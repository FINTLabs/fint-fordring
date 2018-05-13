import React, {Component} from 'react';
import './App.css';
import Main from "./main/Main";
import {createMuiTheme, MuiThemeProvider, withStyles} from "material-ui";
import PropTypes from 'prop-types';


const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#bef67a',
            main: '#8bc34a',
            dark: '#5a9216',
            contrastText: '#000',
        },
        primary: {
            light: '#67daff',
            main: '#03a9f4',
            dark: '#007ac1',
            contrastText: '#000000',
        },
    },
});

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    }
});

class App extends Component {

    render() {

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Main/>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);