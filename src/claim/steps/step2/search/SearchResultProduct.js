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
        marginTop: theme.spacing.unit,
    },
    table: {
        minWidth: 700,
    },
});



class SearchResultProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: -1,
            last: "",
        }
    }

    triggerSort = (val, isNumber, sortKey) => {
        this.props.sortMethod(
            this.props.listProduct,
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
                        <TableRow>
                            <TableCell onClick={() => this.triggerSort("productName", false, "product")}>Produkt</TableCell>
                            <TableCell onClick={() => this.triggerSort("producer", false, "producer")}>Produsent</TableCell>
                            <TableCell onClick={() => this.triggerSort("model", false, "model")}>Modell</TableCell>
                            <TableCell onClick={() => this.triggerSort("price", true, "price")}>Pris</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.listProduct.map(n => {
                            if (this.props.searchFilter.indexOf(n) === -1) {
                                return null;
                            }
                            return (
                                <TableRow key={n.id}>
                                    <TableCell>{n.productName}</TableCell>
                                    <TableCell>{n.producer}</TableCell>
                                    <TableCell>{n.model}</TableCell>
                                    <TableCell>{n.price},-</TableCell>
                                    <TableCell>
                                        {!n.selected ? (
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
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SearchResultProduct.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultProduct);