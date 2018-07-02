import React from 'react';
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
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    green: {
        backgroundColor: "rgba(75, 181, 67, 0.5)",
    },
    yellow: {
        backgroundColor: "rgba(240, 240, 0, 0.5)",
    },
    red: {
        backgroundColor: "rgba(204, 0, 0, 0.5)",
    },
    rotate: {
        transform: "rotate(180deg)"
    }
});

class TableClaims extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const { classes } = this.props;
        

        let classGreen = {
            backgroundColor: "rgb(220, 255, 220)" //change values that are 220 closer to 0 to get stronger colors
        };
        let classYellow = {
            backgroundColor: "rgb(255, 255, 220)"
        };
        let classRed = {
            backgroundColor: "rgb(255, 220, 220)"
        };
        let classCurrent = {};
        

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                            <TableCell onClick={() => this.props.triggerSort(["ordrenummer"], true, "ordrenummer")}>
                                Ordrenummer {(this.props.last === "ordrenummer")?(
                                (this.props.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>):(
                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)):
                                (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell onClick={() => this.props.triggerSort(["kunde.navn.etternavn", "kunde.navn.fornavn", "kunde.navn.mellomnavn"], false, "navn")}>
                                Navn {(this.props.last === "navn")?(
                                (this.props.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>):(
                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)):
                                (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell onClick={() => this.props.triggerSort(["fakturagrunnlag.total"], true, "totalpris")}>
                                Totalpris {(this.props.last === "totalpris")?(
                                (this.props.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>):(
                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)):
                                (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell onClick={() => this.props.triggerSort(["restBelop"], true, "betale")}>
                                Har igjen å betale {(this.props.last === "betale")?(
                                (this.props.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>):(
                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)):
                                (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.listOfClaims.map(n => {
                            if (this.props.searchFilter.indexOf(n) === -1) {
                                return;
                            }
                            if(n.farge === "green"){
                                classCurrent = classGreen;
                            } else if (n.farge === "yellow"){
                                classCurrent = classYellow;
                            } else if (n.farge === "red"){
                                classCurrent = classRed;
                            }
                            return (
                                <TableRow key={n.ordrenummer} style={classCurrent}>
                                    <TableCell>{n.ordrenummer}</TableCell>
                                    <TableCell>{n.kunde.navn.fornavn} {n.kunde.navn.mellomnavn} {n.kunde.navn.etternavn}</TableCell>
                                    <TableCell>{n.fakturagrunnlag.total}</TableCell>
                                    <TableCell>{n.restBelop}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

TableClaims.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableClaims);