import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import LoadingProgress from '../common/LoadingProgress';
import DashboardCards from "./DashboardCards";


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 10,
        width: "100%",
        height: "100%"
    },
});

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchPayments();
        this.props.fetchCustomers();
    }

    render() {
        const {payments, customerList} = this.props;
        if (payments.length >= 0 && customerList.length >= 0) {
            const {classes} = this.props;
            return (
                <div className={classes.root}>
                    <DashboardCards customerCount={customerList.length} paymentCount={payments.length}/>
                </div>
            );
        } else {
            return (<LoadingProgress/>);
        }
    }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  customerList: PropTypes.array.isRequired,
  fetchCustomers: PropTypes.func.isRequired,
  fetchPayments: PropTypes.func.isRequired,
  payments: PropTypes.array.isRequired
};

export default withStyles(styles)(Dashboard);