import React, {Component} from 'react';
import {withStyles} from "material-ui";
import {green} from 'material-ui/colors';
import PropTypes from "prop-types";


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 10,
        width: '100%',
    },
    cardContent: {
        textAlign: 'center',
    },
    cardLink: {
        textDecoration: 'none'
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: green[500],
    }

});

class Dashboard extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <h1>Velkommen</h1>
            </div>

        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Dashboard);