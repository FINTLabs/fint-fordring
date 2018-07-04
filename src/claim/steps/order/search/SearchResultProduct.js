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
        minWidth: 720,
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
            this.props.testDataProduct,
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
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort("navn", false, "product")}>Produkt {(this.state.last === "product") ? (
                                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                                                ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                                </TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort("kode", false, "producer")}>Kode {(this.state.last === "producer") ? (
                                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                                                ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                                </TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort("hei", false, "model")}>Hei {(this.state.last === "model") ? (
                                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                                                ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                                </TableCell>
                            <TableCell className={classes.fixedHeader} onClick={() => this.triggerSort("pris", true, "price")}>Pris {(this.state.last === "price") ? (
                                                    (this.state.sort === 1) ? (<svg className={classes.rotate} height="12" width="12" viewBox="3 5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>)
                                                ) : (<svg height="12" width="12" viewBox="-3 -5 24 24" aria-hidden="true"></svg>)}
                                                </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.testDataProduct.map(n => {
                            if (this.props.searchFilter.indexOf(n) === -1) {
                                return null;
                            }
                            return (
                                <TableRow key={n.kode}>
                                    <TableCell>{n.navn}</TableCell>
                                    <TableCell>{n.kode}</TableCell>
                                    <TableCell>Hei</TableCell>
                                    <TableCell>{n.pris},-</TableCell>
                                    <TableCell>
                                        {!this.props.selectedProductList[n.kode] ? (
                                            <Button mini variant="fab" color="secondary" aria-label="add" onClick={() => this.props.addMethod(n)}
                                                className={classes.actionButton}>
                                                <Add className={classes.actionButtonIcon}/>
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