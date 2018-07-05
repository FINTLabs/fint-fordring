import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import PropTypes from "prop-types";
import { Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import BusinessIcon from "@material-ui/icons/Business";
import ApiIcon from "@material-ui/icons/WebAsset";
import ContactIcon from "@material-ui/icons/Person";
import { History, NoteAdd } from '@material-ui/icons';


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

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h1>VELKOMMEN</h1>
                <Grid container spacing={24}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="ny-fordring" className={classes.cardLink}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title="Ny Fordring"
                                    avatar={
                                        <Avatar className={classes.avatar}>
                                            <NoteAdd className={classes.avatar} />
                                        </Avatar>
                                    }
                                    subheader="Opprett ny fordring"
                                />
                                <Divider />
                                <CardContent className={classes.cardContent}>
                                    <Typography type="display4">
                                        Gjennomsnittlig sendetid: 0.3 picosekunder
                            </Typography>
                                </CardContent>

                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={false}>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="fordringer" className={classes.cardLink}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title="Sendte fordringer"
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
                                        Fordringer sendt: {6}
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
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Dashboard);