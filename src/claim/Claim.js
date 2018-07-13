import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Step1 from "./steps/recipient/recipients";
import Step2 from "./steps/order/orders";
import Step3 from "./steps/send/send";
import Snackbar from '@material-ui/core/Snackbar';
import { Prompt } from "react-router-dom";
import PaymentApi from '../api/PaymentApi';
import LoadingProgress from '../common/LoadingProgress';
import Overview from './steps/overview/Overview';
import { Link } from "react-router-dom";

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: '65px',
        minWidth: 350
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Velg mottakere', 'Velg varer', 'Send'];
}

//wcag test

let orgId = "fake.no";


class Claim extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,

            selectedPersonList: JSON.parse(JSON.stringify(this.props.selectedPersonList)),
            personOrderedBySelection: JSON.parse(JSON.stringify(this.props.personOrderedBySelection)),

            selectedProductList: {},
            productOrderedBySelection: JSON.parse(JSON.stringify(this.props.productOrderedBySelection)),

            //selected date index for dates
            selectedDate: "",

            lastSentClaim: [],

            //needed for snackbar message
            open: false,
            vertical: null,
            horizontal: null,

            //data from backend
            customers: [],

            fetchedValueIsUndefined: false,
        };
    }

    componentDidMount() {
        //can check if the data is there for each one before fetching it
        if (this.props.dates.length === 0) {
            this.props.fetchDates();
        }
        if (this.props.employers.length === 0) {
            this.props.fetchEmployers();
        }
        /*if(this.props.mvaCodes.length === 0) {
            this.props.fetchMvaCodes();
        }*/
        if (this.props.productList.length === 0) {
            this.props.fetchOrderLines();
        }
        if (this.props.customerList.length === 0 || this.props.allGroupsList.length === 0) {
            this.props.fetchCustomerGroupsFromBasisgruppe().then(() => {
                this.setState({
                    selectedPersonList: JSON.parse(JSON.stringify(this.props.selectedPersonList)),
                    selectedProductList: JSON.parse(JSON.stringify(this.props.selectedProductList)),
                });
            });
        } else {
            this.setState({
                selectedPersonList: JSON.parse(JSON.stringify(this.props.selectedPersonList)),
                selectedProductList: JSON.parse(JSON.stringify(this.props.selectedProductList)),
            });
        }
    }

    addMethodPerson = (person) => {
        let updateList = this.state.selectedPersonList;
        updateList[person["kundenummer"]] = true;
        this.setState({ selectedPersonList: updateList });

        let updateOrderedList = this.state.personOrderedBySelection;
        updateOrderedList.push(person);
        this.setState({ personOrderedBySelection: updateOrderedList });
    }

    removeMethodPerson = (person) => {
        let updateList = this.state.selectedPersonList;
        updateList[person["kundenummer"]] = false;
        this.setState({ selectedPersonList: updateList });

        let updateOrderedList = this.state.personOrderedBySelection;
        for (let i = 0; i < updateOrderedList.length; i++) {
            if (JSON.stringify(updateOrderedList[i]) === JSON.stringify(person)) {
                updateOrderedList.splice(i, 1);
            }
        }
        this.setState({ personOrderedBySelection: updateOrderedList });
    };

    addAllPerson = (group) => {
        let allIsSelected = false;
        let updateList = this.state.selectedPersonList;
        let updateOrderedList = this.state.personOrderedBySelection;
        let list = (group.kundeliste) ? (group.kundeliste) : (group);
        for (let i = 0; i < list.length; i++) {
            if (!updateList[list[i]["kundenummer"]]) {
                allIsSelected = true;
                updateOrderedList.push(list[i]);
            }
        }
        if (allIsSelected) {
            for (let i = 0; i < list.length; i++) {
                updateList[list[i]["kundenummer"]] = true;
            }
        } else {
            for (let i = 0; i < list.length; i++) {
                updateList[list[i]["kundenummer"]] = false;
                for (let j = 0; j < updateOrderedList.length; j++) {
                    if (JSON.stringify(updateOrderedList[j]) === JSON.stringify(list[i])) {
                        updateOrderedList.splice(j, 1);
                    }
                }
            }
        }
        this.setState({ selectedPersonList: updateList });
        this.setState({ personOrderedBySelection: updateOrderedList });
    }

    addMethodProduct = (product) => {
        let updateList = this.state.selectedProductList;
        updateList[product["kode"]] = 1;
        this.setState({ selectedProductList: updateList });

        let updateOrderedList = this.state.productOrderedBySelection;
        updateOrderedList.push(product);
        this.setState({ productOrderedBySelection: updateOrderedList });
    }

    removeMethodProduct = (product) => {
        let updateList = this.state.selectedProductList;
        updateList[product["kode"]] = 0;
        this.setState({ selectedProductList: updateList });

        let updateOrderedList = this.state.productOrderedBySelection;
        for (let i = 0; i < updateOrderedList.length; i++) {
            if (JSON.stringify(updateOrderedList[i]) === JSON.stringify(product)) {
                updateOrderedList.splice(i, 1);
            }
        }
        this.setState({ productOrderedBySelection: updateOrderedList });
    }

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };


    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleFinish = state => () => {
        this.setState({ open: true, ...state });
        this.handleNext();
        this.sendClaim();
        //reinitialize state as it is to begin with
        this.setState({
            selectedPersonList: JSON.parse(JSON.stringify(this.props.selectedPersonList)),
            personOrderedBySelection: [],
            selectedProductList: JSON.parse(JSON.stringify(this.props.selectedProductList)),
            productOrderedBySelection: [],
            lastSentClaim: [],
        });
    };

    handleCloseSnack = () => {
        this.setState({ open: false });
    }

    sendClaim = () => {
        let employer = this.props.employers[0];
        let mva = this.props.mvaCodes[0];
        let timeFrameDueDate = this.state.selectedDate;

        let amountOfProductList = this.state.selectedProductList;
        let productList = this.state.productOrderedBySelection;

        let listOfProductPackage = [];
        for (let i = 0; i < productList.length; i++) {
            let desc = productList[i].beskrivelse;
            delete productList[i].beskrivelse;
            let obj = {
                amount: amountOfProductList[productList[i].kode],
                description: desc,
                orderLine: productList[i]
            }
            listOfProductPackage.push(obj);
        }

        console.log(listOfProductPackage, this.state.personOrderedBySelection);

        PaymentApi.setPayment(
            orgId,
            this.state.personOrderedBySelection,
            listOfProductPackage,
            mva,
            employer,
            timeFrameDueDate
        ).then(data => {
            let paymentCopy = data;
            //tenker at alle fakturaer har samme orgId
            let orgIdString = paymentCopy[0].ordrenummer;
            let firstDigit = orgIdString.match(/\d/);
            let indexOfFirstDigit = orgIdString.indexOf(firstDigit);
            paymentCopy.forEach(payment => {
                payment["numberOrdrenummer"] = Number(payment["ordrenummer"].substr(indexOfFirstDigit));
            });
            this.setState({ lastSentClaim: data }, () => {
                console.log(data);
            });
        });
    }

    getInputAmountProduct = (product, targetValue) => {
        let updateList = this.state.selectedProductList;
        updateList[product.kode] = targetValue;
        if (targetValue <= 0 && targetValue !== "") {
            this.removeMethodProduct(product);
        }
        this.setState({ selectedProductList: updateList });
    }

    setInputAmountProductToNumber = (product) => {
        let updateList = this.state.selectedProductList;
        if (updateList[product.kode] === "") {
            this.removeMethodProduct(product);
        }
        updateList[product.kode] = Number(updateList[product.kode]);
        this.setState({ selectedProductList: updateList });
    }

    getSelectedDate = (date) => {
        this.setState({ selectedDate: date }, () => {
            console.log(this.state.selectedDate);
        });
    }

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Step1
                    //data
                    orderedBySelection={this.state.personOrderedBySelection}
                    selectedPersonList={this.state.selectedPersonList}
                    testDataGruppe={this.props.allGroupsList}
                    testDataPerson={this.props.customerList}
                    //methods
                    addMethod={this.addMethodPerson}
                    removeMethod={this.removeMethodPerson}
                    addAll={this.addAllPerson}
                />;
            case 1:
                return <Step2
                    //data
                    orderedBySelection={this.state.productOrderedBySelection}
                    selectedProductList={this.state.selectedProductList}
                    testDataProduct={this.props.productList}
                    //methods
                    getInputAmountProduct={this.getInputAmountProduct}
                    setInputAmountProductToNumber={this.setInputAmountProductToNumber}
                    addMethod={this.addMethodProduct}
                    removeMethod={this.removeMethodProduct}

                    changeProduct={this.props.changeProduct}
                />;
            case 2:
                return <Step3
                    testDataPerson={this.props.customerList}
                    testDataGruppe={this.props.allGroupsList}
                    selectedPersonList={this.state.selectedPersonList}
                    selectedProductList={this.state.selectedProductList}
                    personOrderedBySelection={this.state.personOrderedBySelection}
                    productOrderedBySelection={this.state.productOrderedBySelection}
                    dates={this.props.dates}
                    getSelectedDate={this.getSelectedDate}
                    selectedDate={this.state.selectedDate}
                />;
            default:
                return 'Uknown stepIndex';
        }
    }

    renderPosts() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { vertical, horizontal, open } = this.state;

        return (
            <div className={classes.root}>
                <Prompt
                    when={this.state.personOrderedBySelection[0] !== undefined || this.state.productOrderedBySelection[0] !== undefined}
                    message={location =>
                        location.pathname !== this.props.location.pathname ? ("Hvis du forlater denne siden vil alle usendte endringer slettes") : (true)
                    }
                />
                <Stepper activeStep={activeStep} >
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        (this.state.lastSentClaim.length !== 0) ? (
                            <div>
                                <Overview lastSentClaim={this.state.lastSentClaim} />
                                <div style={{margin: 10}}>
                                    <Button variant="raised" color="primary" className={classes.backButton} onClick={this.handleReset}>Send ny betaling</Button>
                                    <Link to="/betalinger" style={{ textDecoration: 'none' }}><Button variant="raised" color="primary">Gå til sendte betalinger</Button></Link>
                                </div>
                                <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={this.handleCloseSnack}
                                    ContentProps={{
                                        'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id">Fakturaene er sendt</span>}
                                />
                            </div>
                        ) : (
                                <LoadingProgress />)
                    ) : (
                            <div>
                                <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                                {/*changed from "Typography tag to div tag to avoid warnings in console, not sure if it breaks something*/}
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.backButton}
                                    >
                                        Tilbake
                                </Button>
                                    {activeStep === steps.length - 1 ? (
                                        <Button disabled={!(this.state.personOrderedBySelection.length > 0 && this.state.productOrderedBySelection.length > 0 && this.state.selectedDate !== "")} variant="raised" color="primary" onClick={this.handleFinish({ vertical: 'bottom', horizontal: 'right' })}>
                                            Send
                                        </Button>) : (
                                            <Button variant="raised" color="primary" onClick={this.handleNext}>
                                                Neste
                                    </Button>)}
                                    {/*<Button variant="raised" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>*/}

                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }

    render() {
        if (this.props.productList.length > 0 && this.props.allGroupsList.length > 0  && this.props.customerList.length > 0 && JSON.stringify(this.props.selectedProductList) !== "{}") {
            return (this.renderPosts());
        } else {
            return (<LoadingProgress />);
        }

    }
}

Claim.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Claim);
