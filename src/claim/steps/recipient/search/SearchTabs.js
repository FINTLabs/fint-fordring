import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchBox from "./SearchBox";
import Paper from "@material-ui/core/Paper";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SearchTabs extends React.Component {

    constructor() {
        super();
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.getSearchMethod(value);
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Paper elevation="0">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Grupper" />
                        <Tab label="Personer" />
                    </Tabs>
                </Paper>
                {value === 0 && <SearchBox placeHolder="Søk etter grupper" getSearchInput={this.props.getSearchInput} />}
                {value === 1 && <SearchBox placeHolder="Søk etter personer" getSearchInput={this.props.getSearchInput} />}
            </div>
        );
    }
}

SearchTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTabs);
