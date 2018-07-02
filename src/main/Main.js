import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home, History, NoteAdd } from '@material-ui/icons';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Claims from "../claims/Claims";
import Claim from "../claim/Claim";


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
        height: '8%',
        width: '8%',
        marginRight: theme.spacing.unit * 4,
    }
});

class Main extends Component {

    constructor() {
        super();
    }

    render() {
        const { classes } = this.props;

        return (
            <BrowserRouter basename='/'>
                <div className={classes.root}>
                    <AppBar position="absolute" className={classes.appBar} color="primary">
                        <Toolbar>
                            <a href='/' className={classes.logoLink}>
                                <img src="fint.svg" alt="logo" className={classes.logo} />
                            </a>
                            <Typography variant="title" color="inherit" noWrap>
                                Betaling
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
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Home />
                                        </ListItemIcon>
                                        <ListItemText primary="Hjem" />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link to="/ny-fordring" className={classes.menuLink}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <NoteAdd />
                                        </ListItemIcon>
                                        <ListItemText primary="Ny fordring" />
                                    </ListItem>
                                </Link>
                                <Link to="/fordringer" className={classes.menuLink}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <History />
                                        </ListItemIcon>
                                        <ListItemText primary="Sendte fordringer" />
                                    </ListItem>
                                </Link>
                            </div>
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div>
                            <Route exact path='/' component={Dashboard} onChange={console.log("hei")} />
                            <Route path='/fordringer' component={Claims} />
                            <Route path='/ny-fordring' component={Claim} />
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
