import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import {Divider, ListItem, ListItemIcon, ListItemText} from "material-ui";
import {Home, History, NoteAdd} from '@material-ui/icons';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Claims from "../claims/Claims";
import Claim from "../claim/Claim";


const drawerWidth = 300;

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
});

class Main extends Component {

    render() {
        const {classes} = this.props;

        return (
            <BrowserRouter basename='/'>

                <div className={classes.root}>
                    <AppBar position="absolute" className={classes.appBar} color="primary">
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap>
                                FINT - Fordringer
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
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Home/>
                                        </ListItemIcon>
                                        <ListItemText primary="Hjem"/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                <Link to="/ny-fordring" className={classes.menuLink}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <NoteAdd/>
                                        </ListItemIcon>
                                        <ListItemText primary="Ny fordring"/>
                                    </ListItem>
                                </Link>
                                <Link to="/fordringer" className={classes.menuLink}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <History/>
                                        </ListItemIcon>
                                        <ListItemText primary="Sendte fordringer"/>
                                    </ListItem>
                                </Link>
                            </div>
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div>
                            <Route exact path='/' component={Dashboard}/>
                            <Route path='/fordringer' component={Claims}/>
                            <Route path='/ny-fordring' component={Claim}/>
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

export default withStyles(styles, {withTheme: true})(Main);
