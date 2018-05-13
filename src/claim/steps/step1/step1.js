import React, {Component} from 'react';
import {withStyles} from "material-ui/styles/index";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";


const styles = theme => ({});


class Step1 extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div>
                <SearchTabs />
                <SearchResultPerson/>
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
