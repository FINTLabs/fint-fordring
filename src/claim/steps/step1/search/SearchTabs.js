import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Tabs, {Tab} from 'material-ui/Tabs';
import SearchBox from "./SearchBox";
import {Paper} from "material-ui";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SearchTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <Paper elevation="0">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Grupper"/>
                        <Tab label="Personer"/>
                    </Tabs>
                </Paper>
                {value === 0 && <SearchBox placeHolder="Søk etter grupper"/>}
                {value === 1 && <SearchBox placeHolder="Søk etter personer"/>}
            </div>
        );
    }
}

SearchTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTabs);
