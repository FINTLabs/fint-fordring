import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <div>
                {console.log(this.props.lastSentClaim)}
                {this.props.lastSentClaim[0].timeFrameDueDate}
            </div>
        );
    }
}

export default withStyles(styles)(Overview);
