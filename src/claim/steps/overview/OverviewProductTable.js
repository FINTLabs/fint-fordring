import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Amount from "../../../common/Amount";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1400,
        height: 460,
    },
    subheader: {
        width: '100%',
    },
});

class OverviewProductTable extends React.Component {

    render() {
        const { classes } = this.props;

        let data = this.props.lastSentClaim;

        return (
            <div className={classes.root}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Produkt
          </TableCell>
                            <TableCell>
                                Produktkode
          </TableCell>
                            <TableCell>
                                Antall
          </TableCell>
                            <TableCell>
                                Nettopris
          </TableCell>
                            <TableCell>
                                Nettototal
          </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data[0].varelinjer.map((n, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        {n.orderLine.navn}
                                    </TableCell>
                                    <TableCell>
                                        {n.orderLine.kode}
                                    </TableCell>
                                    <TableCell>
                                        {n.amount}
                                    </TableCell>
                                    <TableCell>
                                        <Amount>{n.orderLine.pris}</Amount>
                                    </TableCell>
                                    <TableCell>
                                        <Amount>{n.orderLine.pris * n.amount}</Amount>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell colSpan={2}>
                                <b>Total uten mva:</b>
                            </TableCell>
                            <TableCell>
                                <b><Amount>{data[0].fakturagrunnlag.netto}</Amount></b>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell colSpan={2}>
                                <b>Total inkl. mva:</b>
                            </TableCell>
                            <TableCell>
                                <b><Amount>{data[0].fakturagrunnlag.total}</Amount></b>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

OverviewProductTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverviewProductTable);