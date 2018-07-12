import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import OverviewPersonChip from './OverviewPersonChip';
import OverviewProductTable from './OverviewProductTable';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {(this.props.lastSentClaim.length !== undefined) ? (
                    <div>
                        <p>leveringsdato: {new Date(this.props.lastSentClaim[0].fakturagrunnlag.leveringsdato).toLocaleDateString()}</p>
                        <p>forfallsdato: {new Date(this.props.lastSentClaim[0].fakturagrunnlag.forfallsdato).toLocaleDateString()}</p>
                        <p>Ordrenummer:</p>
                        <OverviewPersonChip lastSentClaim={this.props.lastSentClaim}/>
                        <OverviewProductTable lastSentClaim={this.props.lastSentClaim}/>
                    </div>
                ) : (
                        <div>
                            {this.props.lastSentClaim.message || "error"}
                        </div>
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(Overview);
