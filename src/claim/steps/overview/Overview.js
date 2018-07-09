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
                <p>leveringsdato: {new Date(this.props.lastSentClaim[0].fakturagrunnlag.leveringsdato).toLocaleDateString()}</p>
                <p>forfallsdato: {new Date(this.props.lastSentClaim[0].fakturagrunnlag.forfallsdato).toLocaleDateString()}</p>
                <p>Ordrenummer:</p>
                {this.props.lastSentClaim.map(e => {
                    return (
                        <ul key={e.ordrenummer}>{e.ordrenummer}</ul>
                    );
                }
                )}
            </div>
        );
    }
}

export default withStyles(styles)(Overview);
