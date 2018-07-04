import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ProductOverview from "./resultOverview/ProductOverview";
import PersonOverview from "./resultOverview/PersonOverview";
import GroupOverview from "./resultOverview/GroupOverview";
import Paper from '@material-ui/core/Paper';
import { Divider } from "@material-ui/core";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChipSelectedPerson from "./ChipSelectedPerson";

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    paper: {
        width: '100%',
        height: 150,
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    shrinkSides: {
        margin: 2,
    },
    shrinkSides2: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '100%',
    },
    optionHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.3%',
    },
    rotate: {
        transform: "rotate(180deg)"
    },
    table: {
        minWidth: 521
    },
    actionButton: {
        height: "35px",
        width: "35px",
    },
    actionButtonIcon: {
        color: "#fff",
    },
    paddingClass: {
        padding: 10,
    }
});

class Step3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedPersonList: [],
        };
    }

    sortMethod = (array, order, sortByValue, isNumber) => {
        if (isNumber) {
            function compare(a, b) {
                if (eval("Number(a." + sortByValue + ")<Number(b." + sortByValue + ")")) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("Number(a." + sortByValue + ")>Number(b." + sortByValue + ")")) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
        } else {
            function compare(a, b) {
                if (eval(sortByValue.map(f => "a." + f).join("+") + "<" + sortByValue.map(f => "b." + f).join("+"))) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval(sortByValue.map(f => "a." + f).join("+") + ">" + sortByValue.map(f => "b." + f).join("+"))) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
        }
    }

    checkAmountOfChosenGroups = (listOfGroups, listOfSelectedPeople) => {
        let counter = 0;
        for (let i = 0; i < listOfGroups.length; i++) {
            for (let j = 0; j < listOfGroups[i].kundeliste.length; j++) {
                if (listOfSelectedPeople[listOfGroups[i].kundeliste[j].kundenummer] === true) {
                    counter++;
                    break;
                }
            }
        }
        return counter;
    }

    checkPricePerCustomer = (listOfProducts) => {
        let sum = 0;
        for (let i = 0; i < listOfProducts.length; i++) {
            sum += Number(listOfProducts[i]["pris"]);
        }
        return sum.toFixed(2);
    }

    render() {

        const { classes } = this.props;

        return (
            <Paper>
                <div className={classes.paddingClass}>Mottakere av faktura:</div>
                {this.props.personOrderedBySelection[0] ?
                    (<ChipSelectedPerson orderedBySelection={this.props.personOrderedBySelection} />) :
                    (<div className={classes.paddingClass}>Du har ikke valgt noen mottakere enda</div>)}
                    <Divider/>
                    <div className={classes.paddingClass}>Varer:</div>
                {(!this.props.productOrderedBySelection[0]) ? (<div className={classes.paddingClass}>Du har ikke valgt noen produkter enda</div>) : (
                    <ProductOverview productOrderedBySelection={this.props.productOrderedBySelection} checkPricePerCustomer={this.checkPricePerCustomer}/>
                )}

                {/*<ExpansionPanel defaultExpanded={true}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.optionHeading}></Typography>
                        <Typography className={classes.optionHeading}>Valgte Produkter</Typography>
                        <Typography className={classes.optionHeading}>{this.props.productOrderedBySelection[0] ? (`${this.checkPricePerCustomer(this.props.productOrderedBySelection)},- per kunde`):("")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {(!this.props.productOrderedBySelection[0]) ? (<h3 className={classes.secondaryHeading}>Du har ikke valgt noen produkter enda</h3>) : (
                            <ProductOverview productOrderedBySelection={this.props.productOrderedBySelection} />
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.optionHeading}></Typography>
                        <Typography className={classes.optionHeading}>Valgte Personer</Typography>
                        <Typography className={classes.optionHeading}>{this.props.personOrderedBySelection.length}/{this.props.testDataPerson.length} Personer</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {(!this.props.personOrderedBySelection[0]) ? (<h3 className={classes.secondaryHeading}>Du har ikke valgt noen personer enda</h3>) : (
                            <PersonOverview
                                personOrderedBySelection={this.props.personOrderedBySelection}
                                sortMethod={this.sortMethod}
                                testDataPerson={this.props.testDataPerson}
                                sortedPersonList={this.state.sortedPersonList} />
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.optionHeading}></Typography>
                        <Typography className={classes.optionHeading}>Valgte Grupper</Typography>
                        <Typography className={classes.optionHeading}>
                            {this.checkAmountOfChosenGroups(this.props.testDataGruppe, this.props.selectedPersonList)}/{this.props.testDataGruppe.length} Grupper
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {(!this.props.personOrderedBySelection[0]) ? (<h3 className={classes.secondaryHeading}>Du har ikke valgt noen grupper enda</h3>) : (
                            <GroupOverview elevation={2}
                                sortMethod={this.sortMethod}
                                testDataGruppe={this.props.testDataGruppe}
                                sortedPersonList={this.state.sortedPersonList}
                                selectedPersonList={this.props.selectedPersonList} />
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>*/}
            </Paper>
        );
    }
}

export default withStyles(styles)(Step3);