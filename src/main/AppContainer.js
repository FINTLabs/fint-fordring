import PropTypes from 'prop-types'
import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {Divider, ListItemIcon, ListItemText, MenuItem, withStyles} from "@material-ui/core";
import {History, Home, NoteAdd} from "@material-ui/icons";

const drawerWidth = 250;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
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

class AppContainer extends Component {
    render() {
        const {classes, me} = this.props;
        return (
            <div>
                <AppBar position="absolute" className={classes.appBar} color="primary">
                    <Toolbar>
                        <Link to="/" className={classes.logoLink}>
                            <img src="fint.svg" alt="logo" className={classes.logo}/>
                        </Link>
                        <Typography variant="title" color="inherit" noWrap>
                            Betaling
                        </Typography>
                        <Typography style={{position: 'absolute', right: '2%'}} variant="title" color="inherit"
                                    noWrap>
                            {(me.name || "person") + " - " + (me.organisation || "organisasjon")}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <List>
                        <div>
                            <Link to="/" className={classes.menuLink}>
                                <MenuItem button selected={false}>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary="Hjem"/>
                                </MenuItem>
                            </Link>
                            <Divider/>
                            <Link to="/ny-betaling" className={classes.menuLink}>
                                <MenuItem button selected={false}>
                                    <ListItemIcon>
                                        <NoteAdd/>
                                    </ListItemIcon>
                                    <ListItemText primary="Ny betaling"/>
                                </MenuItem>
                            </Link>
                            <Link to="/betalinger" className={classes.menuLink}>
                                <MenuItem button selected={false}>
                                    <ListItemIcon>
                                        <History/>
                                    </ListItemIcon>
                                    <ListItemText primary="Sendte betalinger"/>
                                </MenuItem>
                            </Link>
                        </div>
                    </List>
                </Drawer>
            </div>
        );
    }
}

AppContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired
};

export default withStyles(styles)(AppContainer);

