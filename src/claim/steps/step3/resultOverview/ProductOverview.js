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
        marginTop: theme.spacing.unit,
    },
    table: {
        minWidth: 700,
    },
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
            <Paper className={classes.root}>
                {this.props.selectedProductData[0] ? (
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell /*onClick={() => this.triggerSort("productName", false)}*/>Produkt</TableCell>
                                <TableCell /*onClick={() => this.triggerSort("producer", false)}*/>Produsent</TableCell>
                                <TableCell /*onClick={() => this.triggerSort("model", false)}*/>Modell</TableCell>
                                <TableCell /*onClick={() => this.triggerSort("price", true)}*/>Pris</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.selectedProductData.map(n => {
                                if (n.selected) {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell>{n.productName}</TableCell>
                                            <TableCell>{n.producer}</TableCell>
                                            <TableCell>{n.model}</TableCell>
                                            <TableCell>{n.price},-</TableCell>
                                        </TableRow>
                                    );
                                }
                            })}
                        </TableBody>
                    </Table>
                ) : (<TableBody />)}
            </Paper>
        );
    }
}

ProductOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductOverview);