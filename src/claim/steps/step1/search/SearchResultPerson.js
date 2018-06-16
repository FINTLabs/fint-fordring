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
        this.state = {personer: []};
    }

    getData = (val) => {
        let old = this.state.personer;
        old.push(val);
        this.setState({personer: old});
    }

    render() {

        const {classes} = this.props;
        return (
            <div>
                <ResultTablePerson
                sendData={this.getData}
                />
            </div>

        );
    }
}


export default withStyles(styles)(SearchResultPerson);