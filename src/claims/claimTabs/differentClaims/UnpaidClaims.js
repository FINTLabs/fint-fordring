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
  red: {
    backgroundColor: "rgba(204, 0, 0, 0.5)",
  }
});

class AllClaims extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

  render() {

    const { classes } = this.props;

    return (
        <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                              <TableRow>
                                  <TableCell /*onClick={() => this.triggerSort(["navn.fornavn", "navn.mellomnavn", "navn.etternavn"], false)}*/>Ordrenummer</TableCell>
                                  <TableCell /*onClick={() => this.triggerSort(["navn.etternavn", "navn.fornavn", "navn.mellomnavn"], false)}*/>Navn</TableCell>
                                  <TableCell /*onClick={() => this.triggerSort(["klassenavn"], false)}*/>Har betalt</TableCell>
                                  <TableCell /*onClick={() => this.triggerSort(["klassenavn"], false)}*/>Skal betale</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {this.props.listOfUnpaidClaims.map(n => {
                                  return (
                                      <TableRow key={n.ordrenummer} className={classes.red}>
                                          <TableCell>{n.ordrenummer}</TableCell>
                                          <TableCell>{n.kunde.navn.fornavn} {n.kunde.navn.etternavn}</TableCell>
                                          <TableCell>{n.fakturagrunnlag.total - n.restBelop}</TableCell>
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

AllClaims.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllClaims);