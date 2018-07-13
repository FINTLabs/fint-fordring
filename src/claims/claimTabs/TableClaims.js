import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';
import { RemoveCircle } from '@material-ui/icons';
import ClaimDialog from './ClaimDialog';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    green: {
        color: "rgba(75, 181, 67, 1)",
        width: '35px',
        height: '35px',
        verticalAlign: 'text-top'
    },
    yellow: {
        color: "rgba(245, 235, 0, 1)",
        width: '35px',
        height: '35px',
        verticalAlign: 'text-top'
    },
    red: {
        color: "rgba(204, 0, 0, 1)",
        width: '35px',
        height: '35px',
        verticalAlign: 'text-top'
    },
    rotate: {
        transform: "rotate(180deg)"
    }
});

class TableClaims extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            currentClaim: {}
        }
    }

    getStatus = (status, green, yellow, red) => {
        if(status === "betalt"){
            return (<TableCell><CheckCircle className={green}/></TableCell>);
        } else if (status === "delbetalt"){
            return (<TableCell><RemoveCircle className={yellow}/></TableCell>);
        } else if (status === "ikkebetalt"){
            return (<TableCell><Cancel className={red}/></TableCell>);
        }
    }

    handleClickOpen = (claim) => {
        this.setState({ open: true, currentClaim: claim });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <ClaimDialog open={this.state.open} close={this.handleClose} claim={this.state.currentClaim} mvaCodes={this.props.mvaCodes}/>
                <Table className={classes.table}>
                    {this.props.searchFilter.length > 0 && this.props.listOfClaims.length > 0 ?(<TableHead>
                    <TableRow>
                            <TableCell onClick={() => this.props.triggerSort(["status"], false, "status")}>
                                Status {(this.props.last === "status")?(
                                (this.props.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>):(
                                <svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true">
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)):
                                (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                            </TableCell>
                            <TableCell onClick={() => this.props.triggerSort(["numberOrdrenummer"], true, "ordrenummer")}>
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
                    </TableHead>) : (false)}
                    <TableBody>
                        {this.props.listOfClaims.map((n,index) => {
                            if (this.props.searchFilter.indexOf(n) === -1 || (n.status !== this.props.selectedTab && this.props.selectedTab !== "alle")) {
                                return false;
                            }                    
                            return (
                                <TableRow key={index} onClick={()=> this.handleClickOpen(n)}>
                                    {this.getStatus(n.status,classes.green,classes.yellow,classes.red)}
                                    <TableCell>{n.numberOrdrenummer}</TableCell>
                                    <TableCell>{n.kunde.navn.etternavn}, {n.kunde.navn.fornavn} {n.kunde.navn.mellomnavn}</TableCell>
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