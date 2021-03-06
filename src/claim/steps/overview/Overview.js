import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import OverviewPersonChip from './OverviewPersonChip';
import OverviewProductTable from './OverviewProductTable';
import { Divider } from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: 10,
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
            <Paper className={classes.root}>
                {(this.props.lastSentClaim.length !== undefined) ? (
                    <div>
                        <GridList cellHeight={50} className={classes.gridList} cols={6}>
                            <GridListTile key="1" cols={2}>
                                <p>Antall fakturaer sendt: {this.props.lastSentClaim.length}</p>
                            </GridListTile>
                            <GridListTile key="2" cols={2}>
                                <p>Leveringsdato: {new Date(this.props.lastSentClaim[0].fakturagrunnlag.leveringsdato).toLocaleDateString()}</p>
                            </GridListTile>
                            <GridListTile key="3" cols={2}>
                                <p>Forfallsdato: {new Date(this.props.lastSentClaim[0].fakturagrunnlag.forfallsdato).toLocaleDateString()}</p>
                            </GridListTile>
                        </GridList>
                        <Divider />
                        <OverviewPersonChip lastSentClaim={this.props.lastSentClaim} />
                        <Divider style={{ marginTop: 10 }} />
                        <OverviewProductTable lastSentClaim={this.props.lastSentClaim} />
                    </div>
                ) : (
                        <div>
                            {this.props.lastSentClaim.message || "error"}
                        </div>
                    )}
            </Paper>
        );
    }
}

export default withStyles(styles)(Overview);
