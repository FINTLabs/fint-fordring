import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import DashboardCards from "./DashboardCards";


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 10,
        width: "100%",
        height: "100%"
    },
});

class Dashboard extends Component {

    render() {
        const {paymentCount, customerCount} = this.props;
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <DashboardCards customerCount={customerCount} paymentCount={paymentCount}/>
            </div>
        );
    }
}

Dashboard.defaultProps = {
    customerCount: 0,
    paymentCount: 0
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    customerCount: PropTypes.number.isRequired,
    paymentCount: PropTypes.number.isRequired
};
export default withStyles(styles)(Dashboard);

