import React, {Component} from 'react';
import {withStyles} from "material-ui/styles/index";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./search/SelectedPerson"


const styles = theme => ({});


class Step1 extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div>
                <SearchTabs />
                <SearchResultPerson/>
                <SelectedPerson/>
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
