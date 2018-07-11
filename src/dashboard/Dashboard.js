import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import PropTypes from "prop-types";
import { Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { History, NoteAdd } from '@material-ui/icons';
import LoadingProgress from '../common/LoadingProgress';


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

    componentDidMount() {
        if(this.props.payments.length === 0){
            this.props.fetchPayments();
        }
        if(this.props.customerList.length === 0){
            this.props.fetchCustomers();
        }
    }

    render() {
        if (this.props.payments.length > 0 && this.props.customerList.length > 0) {
            const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <h1>VELKOMMEN</h1>
                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="ny-betaling" className={classes.cardLink}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="Ny Betaling"
                                        avatar={
                                            <Avatar className={classes.avatar}>
                                                <NoteAdd className={classes.avatar} />
                                            </Avatar>
                                        }
                                        subheader="Opprett en ny betaling"
                                    />
                                    <Divider />
                                    <CardContent className={classes.cardContent}>
                                        <Typography type="display4">
                                            Fakturer opp til {this.props.customerList.length} elever i dag!
                                </Typography>
                                    </CardContent>

                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={false}>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="betalinger" className={classes.cardLink}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="Sendte betalinger"
                                        avatar={
                                            <Avatar className={classes.avatar}>
                                                <History className={classes.avatar} />
                                            </Avatar>
                                        }
                                        subheader="Se en oversikt"
                                    />
                                    <Divider />
                                    <CardContent className={classes.cardContent}>
                                        <Typography type="display4">
                                            Betalinger sendt: {this.props.payments.length}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </div>
            );
        } else {
            return (<LoadingProgress />);
        }
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Dashboard);