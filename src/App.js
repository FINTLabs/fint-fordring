import React, {Component} from 'react';
import Main from "./main/Main";
import {createMuiTheme, MuiThemeProvider, withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import Provider from "react-redux/es/components/Provider";
import store from "./data/redux/store/configure-store";


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#98ee99',
            main: '#66bb6a',
            dark: '#338a3e',
            contrastText: '#000',
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
                    <Provider store={store}>
                        <Main/>
                    </Provider>
                </MuiThemeProvider>

            </div>

        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);