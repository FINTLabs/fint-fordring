import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import ResultTablePerson from "./ResultTablePerson";


const styles = theme => ({
    card: {
        width: '90%',
        margin: '0 auto',
        padding: theme.spacing.unit,
    },
    content: {
        textAlign: 'left',
        verticalAlign: 'bottom',
    },
    actions: {
        textAlign: 'right',
    },
    button: {}
});

class SearchResultPerson extends Component {
    render() {
        return (
            <div>
                <ResultTablePerson 
                addMethod={this.props.addMethod} 
                listGroup={this.props.listGroup} 
                removeMethod={this.props.removeMethod} 
                checkIfAllAreSelected={this.props.checkIfAllAreSelected} 
                searchFilter={this.props.searchFilter}/>
            </div>

        );
    }
}


export default withStyles(styles)(SearchResultPerson);