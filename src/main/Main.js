import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Claims from "../claims/Claims";
import Claim from "../claim/Claim";
import {connect} from "react-redux";
import {fetchCustomers} from "../data/redux/dispatchers/customer";
import {bindActionCreators} from "redux";
import {fetchMe} from "../data/redux/dispatchers/me";
import LoadingProgress from "../common/LoadingProgress";
import {fetchPayments} from "../data/redux/dispatchers/payment";
import Utils from "../libs/Utils";
import {fetchOrderLines} from "../data/redux/dispatchers/orderLines";
import {fetchMvaCodes} from "../data/redux/dispatchers/mvaCodes";
import {fetchDates} from "../data/redux/dispatchers/dates";
import {fetchEmployers} from "../data/redux/dispatchers/employers";
import {fetchAllCustomerGroups} from "../data/redux/dispatchers/allCustomerGroup";
import AppContainer from "./AppContainer";


const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

            //states for personer
            selectedPersonList: {}, //{"393073":true, "234733":false etc.}
            personOrderedBySelection: [], //bare personer som er valgt, i rekkefølgen de er valgt

            //states for produkter
            selectedProductList: {},
            productOrderedBySelection: [], //bare produkter som er valgt, i rekkefølgen de er valgt

            payments: [],

            customerListNoBasicGroup: [],

            customerList: [],
            productList: [],
            basicGroupList: [],//basisgruppe
            contactGroupList: [],//kontaklarergruppe
            teachingGroupList: [],//undervisningsgruppe
            allGroupsList: [],//alle grupper
            mvaCodes: [],
            employers: [],
            dates: [],
            //me: {},
        }
    }

    componentDidMount() {
        this.props.fetchMe();
        this.props.fetchCustomers();
        this.props.fetchPayments();
        this.props.fetchOrderLines();
        this.props.fetchMvaCodes();
        this.props.fetchDates();
        this.props.fetchEmployers();
        this.props.fetchAllCustomerGroups();
    }


    changeProduct = (productToChange, description, price) => {
        let allProducts = this.state.productList;
        for (let product of allProducts) {
            if (product.kode === productToChange.kode) {
                if (description) {
                    product["beskrivelse"] = description;
                }
                if (price) {
                    product.pris = price;
                }
                break;
            }
        }
        this.setState({productList: allProducts});
    };

    render() {
        if (this.props.me === undefined) {
            return (<LoadingProgress/>);
        }
        const {classes, me, customers, payments, mvaCodes, employers, dates} = this.props;
        return (
            <BrowserRouter basename='/'>
                <div className={classes.root}>
                    <AppContainer me={me}/>
                    <main className={classes.content}>
                        <div>
                            <Route exact path='/'
                                   render={(routeProps) => <Dashboard {...routeProps}
                                                                      customerCount={Utils.getLength(customers)}
                                                                      paymentCount={Utils.getLength(payments)}
                                   />}
                            />
                            <Route path='/betalinger'
                                   render={(routeProps) => <Claims {...routeProps}
                                                                   payments={payments}
                                                                   mvaCodes={mvaCodes}
                                   />}
                            />
                            <Route path='/ny-betaling'
                                   render={(routeProps) => <Claim {...routeProps}
                                                                  customerList={customers}
                                                                  productList={this.state.productList}
                                                                  allGroupsList={this.state.allGroupsList}
                                                                  mvaCodes={mvaCodes}
                                                                  employers={employers}
                                                                  dates={dates}
                                                                  selectedPersonList={this.state.selectedPersonList}
                                                                  personOrderedBySelection={this.state.personOrderedBySelection}
                                                                  selectedProductList={this.state.selectedProductList}
                                                                  productOrderedBySelection={this.state.productOrderedBySelection}
                                                                  changeProduct={this.changeProduct}
                                   />}
                            />
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        customers: state.customer.customers,
        me: state.me.me,
        payments: state.payment.payments,
        orderLines: state.orderLine.orderLines,
        mvaCodes: state.mvaCode.mvaCodes,
        employers: state.employer.employers,
        allCustomerGroups: state.allCustomerGroup.allCustomerGroups,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCustomers: fetchCustomers,
        fetchMe: fetchMe,
        fetchPayments: fetchPayments,
        fetchOrderLines: fetchOrderLines,
        fetchMvaCodes: fetchMvaCodes,
        fetchDates: fetchDates,
        fetchEmployers: fetchEmployers,
        fetchAllCustomerGroups: fetchAllCustomerGroups,
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(Main));
