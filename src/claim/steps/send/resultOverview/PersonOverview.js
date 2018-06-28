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
        maxHeight: 250,
        marginTop: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 700,
    },
    rotate: {
        transform: "rotate(180deg)"
    }
});



class PersonOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: -1,
            last: ""
            
        }
    }

    triggerSort = (val, isNumber, sortKey) => {
        this.props.sortMethod(
            this.props.personOrderedBySelection,
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
                {this.props.personOrderedBySelection[0] ? (
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={() => this.triggerSort(["navn.fornavn", "navn.mellomnavn", "navn.etternavn"], false, "fornavn")}>
                                    Fornavn {(this.state.last === "fornavn") ? (
                                        (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (
                                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)) :
                                        (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                </TableCell>
                                <TableCell onClick={() => this.triggerSort(["navn.etternavn", "navn.fornavn", "navn.mellomnavn"], false, "etternavn")}>
                                    Etternavn {(this.state.last === "etternavn") ? (
                                        (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (
                                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)) :
                                        (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                </TableCell>
                                <TableCell onClick={() => this.triggerSort(["klassenavn"], false, "klasse")}>
                                    Klasse {(this.state.last === "klasse") ? (
                                        (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (
                                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)) :
                                        (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                </TableCell>
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
                ) : (<div />)}
            </Paper>
        );
    }
}

PersonOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonOverview);
