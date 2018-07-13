import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing.unit,
    },
    table: {
        minWidth: 700,
    },
    fixedHeader: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: 5
    }
});



class ProductOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
                /*"productName": 1,
                "producer": 1,
                "model": 1,
                "price": 1*/
            }
        }
    }
    

    /*triggerSort = (val, isNumber) => {
        this.props.sortMethod(
            this.props.listProduct,
            (this.state.sort.val === 1) ?
                (this.setState({ sort: { val: -1 } }), 1) :
                (this.setState({ sort: { val: 1 } }), -1),
            val, isNumber);
    }*/
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.props.productOrderedBySelection[0] ? (
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.fixedHeader}>Produkt</TableCell>
                                <TableCell className={classes.fixedHeader}>Produktkode</TableCell>
                                <TableCell className={classes.fixedHeader}>Antall</TableCell>
                                <TableCell className={classes.fixedHeader}>Nettopris</TableCell>
                                <TableCell className={classes.fixedHeader}>Nettototal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.productOrderedBySelection.map(n => {
                                return (
                                    <TableRow key={n.kode}>
                                        <TableCell>{n.navn}</TableCell>
                                        <TableCell>{n.kode}</TableCell>
                                        <TableCell>{this.props.selectedProductList[n.kode]}</TableCell>
                                        <TableCell>{n.pris},-</TableCell>
                                        <TableCell>{n.pris*this.props.selectedProductList[n.kode]},-</TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow key="almost final row">
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell colSpan={2}><b>Total pris per elev uten mva:</b></TableCell>
                            <TableCell><b>{this.props.checkPricePerCustomer(this.props.productOrderedBySelection)},-</b></TableCell>
                        </TableRow>
                        <TableRow key="final row">
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell colSpan={2}><b>inkl. mva:</b></TableCell>
                            <TableCell><b>{(this.props.checkPricePerCustomer(this.props.productOrderedBySelection) * (1 + (this.props.mvaCodes[0].kode/100))).toFixed(2)},-</b></TableCell>
                        </TableRow>
            </TableBody>
                    </Table>
                ) : (<div/>)}
            </div>
        );
    }
}

ProductOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductOverview);