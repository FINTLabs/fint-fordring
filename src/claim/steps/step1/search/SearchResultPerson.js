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
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;
        return (
            <div>
                <ResultTablePerson addMethod={this.props.addMethod} testData={this.props.testData} removeMethod={this.props.removeMethod}/>
            </div>

        );
    }
}


export default withStyles(styles)(SearchResultPerson);