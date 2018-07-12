import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
                                varer
          </TableCell>
                            <TableCell>
                                Pris
          </TableCell>
                            <TableCell>
                                MVA
          </TableCell>
                            <TableCell>
                                Antall
          </TableCell>
                            <TableCell>
                                Beløp
          </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log(data)}
                        {data[0].varelinjer.map((n, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        {n.orderLine.navn}
                                    </TableCell>
                                    <TableCell>
                                        {n.orderLine.pris},-
                                    </TableCell>
                                    <TableCell>
                                        25%
              </TableCell>
                                    <TableCell>
                                        {n.amount}
                                    </TableCell>
                                    <TableCell>
                                        {n.orderLine.pris * n.amount},-
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                <b>Total:</b>
                            </TableCell>
                            <TableCell>
                                <b>{data[0].fakturagrunnlag.total},-</b>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className={classes.size}>
                    <div className={classes.varer}>
                    </div>
                    <div className={classes.avslutning}></div>
                </div>
            </div>
        );
    }
}

OverviewProductTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverviewProductTable);