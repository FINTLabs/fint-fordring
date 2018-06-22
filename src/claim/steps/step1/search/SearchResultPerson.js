import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';


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



class ResultTablePerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
            }
        }
    }

    triggerSort = (val, isNumber) => {
        this.props.sortMethod(
            this.props.testDataPerson,
            (this.state.sort.val === 1) ?
                (this.setState({ sort: { val: -1 } }), 1) :
                (this.setState({ sort: { val: 1 } }), -1),
            val, isNumber);
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => this.triggerSort(["navn.fornavn", "navn.mellomnavn", "navn.etternavn"], false)}>Fornavn</TableCell>
                            <TableCell onClick={() => this.triggerSort(["navn.etternavn", "navn.fornavn", "navn.mellomnavn"], false)}>Etternavn</TableCell>
                            <TableCell onClick={() => this.triggerSort(["klassenavn"], false)}>Klasse</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.testDataPerson.map(n => {
                            if (this.props.searchFilter.indexOf(n) !== -1) {
                                return (
                                    <TableRow key={n.kundenummer}>
                                        <TableCell>{n.navn.fornavn} {n.navn.mellomnavn}</TableCell>
                                        <TableCell>{n.navn.etternavn}</TableCell>
                                        <TableCell>{n.klassenavn}</TableCell>
                                        <TableCell>
                                            {!this.props.selectedPersonList[n.kundenummer] ? (
                                                <Button mini variant="fab" color="secondary" aria-label="add" onClick={() => this.props.addMethod(n)}
                                                    className={classes.button}>
                                                    <Add />
                                                </Button>
                                            ) : (
                                                    <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(n)}
                                                        className={classes.button}>
                                                        <Remove />
                                                    </Button>
                                                )}
                                        </TableCell>
                                    </TableRow>
                                );
                            }
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

ResultTablePerson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultTablePerson);
