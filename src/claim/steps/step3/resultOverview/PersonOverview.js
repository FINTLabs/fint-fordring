import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 700,
    },
});



class PersonOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
            }
        }
    }

    /*triggerSort = (val, isNumber) => {
        this.props.sortMethod(
            this.props.testDataPerson,
            (this.state.sort.val === 1) ?
                (this.setState({ sort: { val: -1 } }), 1) :
                (this.setState({ sort: { val: 1 } }), -1),
            val, isNumber);
    }*/

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                {this.props.personOrderedBySelection[0] ? (
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell /*onClick={() => this.triggerSort(["navn.fornavn", "navn.mellomnavn", "navn.etternavn"], false)}*/>Fornavn</TableCell>
                                <TableCell /*onClick={() => this.triggerSort(["navn.etternavn", "navn.fornavn", "navn.mellomnavn"], false)}*/>Etternavn</TableCell>
                                <TableCell /*onClick={() => this.triggerSort(["klassenavn"], false)}*/>Klasse</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.personOrderedBySelection.map(n => {
                                return (
                                    <TableRow key={n.kundenummer}>
                                        <TableCell>{n.navn.fornavn} {n.navn.mellomnavn}</TableCell>
                                        <TableCell>{n.navn.etternavn}</TableCell>
                                        <TableCell>{n.klassenavn}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                ) : (<TableBody />)}
            </Paper>
        );
    }
}

PersonOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonOverview);
