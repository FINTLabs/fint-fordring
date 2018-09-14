import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { Divider, ListItemIcon, ListItemText, MenuItem } from "@material-ui/core";
import { Home, History, NoteAdd } from '@material-ui/icons';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Claims from "../claims/Claims";
import Claim from "../claim/Claim";
import CustomerApi from '../api/CustomerApi';
import OrderLineApi from '../api/OrderLineApi';
import PaymentApi from '../api/PaymentApi';
import EmployerApi from '../api/EmployerApi';
import GroupApi from '../api/GroupApi';
import MvaApi from '../api/MvaApi';
import DateApi from '../api/DateApi';
import MeApi from '../api/MeApi';


const drawerWidth = 250;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    menuLink: {
        textDecoration: 'none',
    },
    logo: {
        height: '90%',
        width: '90%',
        marginRight: theme.spacing.unit * 4,
    },
    logoLink: {
        height: '100%',
        width: '8%',
        marginRight: theme.spacing.unit * 4,
        textDecoration: 'none',
    }
});

let orgId = "fintlabs.no";

//is needed to initialize data on reset
let initialPersonSelectedState = {};
let initialProductSelectedState = {};

class Main extends Component {

    constructor(props, context) {
        super(props, context);
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
            me: {},

            fetchedValueIsUndefined: false,
        }
    }

    componentDidMount() {
        this.fetchMe();
    }

    fetchPayments = () => {
        return PaymentApi.fetchPayments(orgId).then(data => {
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            if (data.length !== this.state.payments.length) {
                let paymentCopy = data;
                paymentCopy.forEach(payment => {
                    if (Number(payment.restBelop) === 0) {
                        payment["status"] = "betalt";
                    } else if (Number(payment.restBelop) !== payment["fakturagrunnlag"]["total"]) {
                        payment["status"] = "delbetalt";
                    } else if (Number(payment.restBelop) === payment["fakturagrunnlag"]["total"]) {
                        payment["status"] = "ikkebetalt";
                    }
                });
                this.setState({ payments: paymentCopy });
            }
        });
    };

    fetchMe = () => {
        return MeApi.fetchMe(orgId).then(data => {
            console.log(data, "Me");
            if (data === undefined || data.name === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ me: data })
        })
    }

    fetchCustomers = () => {
        return CustomerApi.fetchCustomers(orgId).then(data => {
            console.log(data, "cl");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ customerListNoBasicGroup: data })
        })
    }

    fetchOrderLines = () => {
        return OrderLineApi.fetchOrderLines(orgId).then(data => {
            console.log(data, "ol");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            for (let product of data) {
                product["beskrivelse"] = "";
            }
            this.setState({ productList: data });
        }).then(() => {
            this.state.productList.forEach(product => {
                initialProductSelectedState[product["kode"]] = 0;
            });
            this.setState({ selectedProductList: JSON.parse(JSON.stringify(initialProductSelectedState)) });
        });
    }

    fetchMvaCodes = () => {
        return MvaApi.fetchMvaCodes(orgId).then(data => {
            console.log(data, "mva");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ mvaCodes: data })
        });
    }

    fetchDates = () => {
        return DateApi.fetchDates(orgId).then(data => {
            console.log(data, "dates");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ dates: data })
        });
    }

    fetchEmployers = () => {
        return EmployerApi.fetchEmployers(orgId).then(data => {
            console.log(data, "employer");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ employers: data })
        });
    }

    fetchCustomerGroupsFromKontaktlarergruppe = () => {
        return GroupApi.fetchCustomerGroupsFromKontaktlarergruppe(orgId).then(data => {
            console.log(data, "kontakt");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ contactGroupList: data })
        });
    }

    fetchCustomerGroupsFromUndervisningsgruppe = () => {
        return GroupApi.fetchCustomerGroupsFromUndervisningsgruppe(orgId).then(data => {
            console.log(data, "undervisning");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ teachingGroupList: data })
        });
    }

    fetchCustomerGroupsFromBasisgruppe = () => {
        return GroupApi.fetchCustomerGroupsFromBasisgruppe(orgId).then(data => {
            console.log(data, "basis");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ basicGroupList: data })
        }).then(data => {
            let basisGruppeKundenummer = {};
            for (let i = 0; i < this.state.basicGroupList.length; i++) {
                for (let j = 0; j < this.state.basicGroupList[i]["kundeliste"].length; j++) {
                    basisGruppeKundenummer[this.state.basicGroupList[i]["kundeliste"][j]["kundenummer"]] = this.state.basicGroupList[i]["navn"];
                }
            };
            CustomerApi.fetchCustomers(orgId).then(data => {
                console.log(data, "cl");
                if (data === undefined || data.length === undefined) {
                    this.setState({ fetchedValueIsUndefined: true });
                    return;
                }
                this.setState({ customerList: data })
            }).then(() => {
                this.state.customerList.forEach(person => {
                    initialPersonSelectedState[person["kundenummer"]] = false;
                    person["klassenavn"] = (basisGruppeKundenummer[person["kundenummer"]] || "ingen klasse");
                });
                console.log("customerlist")
                this.setState({ selectedPersonList: JSON.parse(JSON.stringify(initialPersonSelectedState)) });
            });
            GroupApi.fetchAllCustomerGroups(orgId).then(data => {
                console.log(data, "alle");
                if (data === undefined || data.length === undefined) {
                    this.setState({ fetchedValueIsUndefined: true });
                    return;
                }
                this.setState({ allGroupsList: data })
            }).then(() => {
                for (let i = 0; i < this.state.allGroupsList.length; i++) {
                    for (let j = 0; j < this.state.allGroupsList[i]["kundeliste"].length; j++) {
                        let allGroupsListCopy = this.state.allGroupsList;
                        allGroupsListCopy[i]["kundeliste"][j]["klassenavn"] = basisGruppeKundenummer[this.state.allGroupsList[i]["kundeliste"][j]["kundenummer"]];
                        this.setState({ allGroupsList: allGroupsListCopy });
                    }
                }
            });
        });
    }

    changeProduct = (productToChange, description, price) => {
        let allProducts = this.state.productList;
        console.log(allProducts);
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
        this.setState({ productList: allProducts });
        console.log(productToChange, description, price);
    }

    renderErrorMessage() {
        const { classes } = this.props;
        return (
            <div className={classes.root} style={{ margin: 50 }}><h1>Sum Ting Wong, Try again later</h1></div>
        )
    }

    render() {
        if (this.state.fetchedValueIsUndefined) {
            return (this.renderErrorMessage());
        }
        const { classes } = this.props;

        return (
            <BrowserRouter basename='/'>
                <div className={classes.root}>
                    <AppBar position="absolute" className={classes.appBar} color="primary">
                        <Toolbar>
                            <Link to="/" className={classes.logoLink}>
                                <img src="fint.svg" alt="logo" className={classes.logo} />
                            </Link>
                            <Typography variant="title" color="inherit" noWrap>
                                Betaling
                            </Typography>
                            <Typography style={{ position: 'absolute', right: '2%' }} variant="title" color="inherit" noWrap>
                                {(this.state.me.name || "person") + " - " + (this.state.me.organisation || "organisasjon")}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <List>
                            <div>
                                <Link to="/" className={classes.menuLink}>
                                    <MenuItem button selected={false}>
                                        <ListItemIcon>
                                            <Home />
                                        </ListItemIcon>
                                        <ListItemText primary="Hjem" />
                                    </MenuItem>
                                </Link>
                                <Divider />
                                <Link to="/ny-betaling" className={classes.menuLink}>
                                    <MenuItem button selected={false}>
                                        <ListItemIcon>
                                            <NoteAdd />
                                        </ListItemIcon>
                                        <ListItemText primary="Ny betaling" />
                                    </MenuItem>
                                </Link>
                                <Link to="/betalinger" className={classes.menuLink}>
                                    <MenuItem button selected={false}>
                                        <ListItemIcon>
                                            <History />
                                        </ListItemIcon>
                                        <ListItemText primary="Sendte betalinger" />
                                    </MenuItem>
                                </Link>
                            </div>
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div>
                            <Route exact path='/' render={(routeProps) => <Dashboard {...routeProps}
                                fetchPayments={this.fetchPayments}
                                fetchCustomers={this.fetchCustomers}
                                customerList={this.state.customerListNoBasicGroup}
                                payments={this.state.payments} />}
                            />
                            <Route path='/betalinger' render={(routeProps) => <Claims {...routeProps}
                                fetchPayments={this.fetchPayments}
                                payments={this.state.payments}
                                fetchMvaCodes={this.fetchMvaCodes}
                                mvaCodes={this.state.mvaCodes}
                            />} />
                            <Route path='/ny-betaling' render={(routeProps) => <Claim {...routeProps}
                                customerList={this.state.customerList}
                                productList={this.state.productList}
                                allGroupsList={this.state.allGroupsList}
                                mvaCodes={this.state.mvaCodes}
                                employers={this.state.employers}
                                dates={this.state.dates}
                                selectedPersonList={this.state.selectedPersonList}
                                personOrderedBySelection={this.state.personOrderedBySelection}
                                selectedProductList={this.state.selectedProductList}
                                productOrderedBySelection={this.state.productOrderedBySelection}
                                fetchCustomerGroupsFromBasisgruppe={this.fetchCustomerGroupsFromBasisgruppe}
                                fetchDates={this.fetchDates}
                                fetchMvaCodes={this.fetchMvaCodes}
                                fetchOrderLines={this.fetchOrderLines}
                                fetchEmployers={this.fetchEmployers}

                                changeProduct={this.changeProduct}
                            />} />
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

export default withStyles(styles, { withTheme: true })(Main);
