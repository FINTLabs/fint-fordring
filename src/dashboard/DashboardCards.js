import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {History, NoteAdd} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";

const styles = (theme) => ({
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
    },
});

class DashboardCards extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Grid container justify={"center"} alignItems={"center"} spacing={24}>

                <Grid item xs={4}>
                    <Link to="ny-betaling" className={classes.cardLink}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Ny Betaling"
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        <NoteAdd className={classes.avatar}/>
                                    </Avatar>
                                }
                                subheader="Opprett en ny betaling"
                            />
                            <Divider/>
                            <CardContent className={classes.cardContent}>
                                <Typography type="display4">
                                    Fakturer opp til {this.props.customerCount} elever i dag!
                                </Typography>
                            </CardContent>

                        </Card>
                    </Link>
                </Grid>

                <Grid item xs={4}>
                    <Link to="betalinger" className={classes.cardLink}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Sendte betalinger"
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        <History className={classes.avatar}/>
                                    </Avatar>
                                }
                                subheader="Se en oversikt"
                            />
                            <Divider/>
                            <CardContent className={classes.cardContent}>
                                <Typography type="display4">
                                    Betalinger sendt: {this.props.paymentCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

            </Grid>
        );
    }
}

DashboardCards.propTypes = {
    customerCount: PropTypes.number.isRequired,
    paymentCount: PropTypes.number.isRequired
};
export default withStyles(styles)(DashboardCards);

