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
import { CheckBox } from '@material-ui/icons';
import { CheckBoxOutlineBlank } from '@material-ui/icons';


const styles = theme => ({
    root: {
        width: '100%',
        maxHeight: 250,
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 521,
    },
    actionButton: {
        height: "35px",
        width: "35px",
    },
    actionButtonIcon: {
        color: "#fff",
    },
    rotate: {
        transform: "rotate(180deg)"
    },
    fixedHeader: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: 5
    }
});

class ResultTablePerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: -1,
            last: "",
        }
    }

    triggerSort = (val, isNumber, sortKey) => {
        console.log(this.state);
        this.props.sortMethod(
            this.props.testDataPerson,
            (this.state.sort === -1 && this.state.last === sortKey) ?
                (this.setState({ sort: 1 }), -1) :
                (this.setState({ sort: -1 }), 1),
            val, isNumber);
        this.setState({ last: sortKey });
    }



    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    {(this.props.searchFilter.length > 0)?(<TableRow>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort(["navn.fornavn", "navn.mellomnavn", "navn.etternavn"], false, "fornavn")}>
                                Fornavn {(this.state.last === "fornavn") ? (
                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (
                                            <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)) :
                                    (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort(["navn.etternavn", "navn.fornavn", "navn.mellomnavn"], false, "etternavn")}>
                                Etternavn {(this.state.last === "etternavn") ? (
                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (
                                            <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)) :
                                    (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort(["klassenavn"], false, "klasse")}>
                                Klasse {(this.state.last === "klasse") ? (
                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (
                                            <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)) :
                                    (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell className={classes.fixedHeader}>
                                <Button mini variant="fab" aria-label="add" onClick={() => this.props.addAll(this.props.testDataPerson)}
                                    className={classes.actionButton}>
                                    {(this.props.checkIfAllAreSelected(this.props.testDataPerson)) ? (
                                        <CheckBoxOutlineBlank />
                                    ) : (
                                            <CheckBox />
                                        )}
                                </Button>
                            </TableCell>
                        </TableRow>):(false)}
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
                                                    className={classes.actionButton}>
                                                    <Add className={classes.actionButtonIcon} />
                                                </Button>
                                            ) : (
                                                    <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(n)}
                                                        className={classes.actionButton}>
                                                        <Remove />
                                                    </Button>
                                                )}
                                        </TableCell>
                                    </TableRow>
                                );
                            } else {
                                return false;
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
