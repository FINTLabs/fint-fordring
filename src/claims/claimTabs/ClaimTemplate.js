import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avsenderAdresse: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  betalingsInfo: {
    position: 'absolute',
    top: 0,
    left: 200
  },
  fakturaInfo: {
    position: 'absolute',
    top: 200,
    left: 500
  },
  avsenderBedrift: {
    position: 'absolute',
    top: 0,
    left: 500
  },
  varer: {
    position: 'absolute',
    top: 400,
    left: 20,
    width: 500
  },
  avslutning: {
    position: 'absolute',
    top: 600,
    left: 0
  },
  size: {
    position: 'relative',
    marginTop: 0,
  }
});

class ClaimTemplate extends React.Component {
  constructor(props) {
    super(props)
  }
  //this.props.data
  render() {
    const { classes } = this.props;

    let data = this.props.data;
    let fullDate = new Date();
    let day = fullDate.getDate();
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();
    let date = ` ${day}.${month + 1}.${year}`;
    let forfallsDate = ` ${day + 6}.${month + 1}.${year}`;

    return (
      <div className={classes.size}>
        <div className={classes.avsenderAdresse}>
          <p>Avsender:</p>
          <p>gateadresse</p>
          <p>postadresse</p>
        </div>
        <div className={classes.betalingsInfo}>
          <p>Bankkonto:</p>
          <p>Foretaksnummer:{data.kunde.kundenummer}</p>
          <p>IBAN:</p>
          <p>SWIFT:</p>
        </div>
        <div className={classes.fakturaInfo}>
          <p>Kundenummer:{data.kunde.kundenummer}</p>
          <p>Fakturadato:{date}</p>
          <p>Fakturanr:{data.ordrenummer}</p>
          <p>Forfallsdato:{forfallsDate}</p>
        </div>
        <div className={classes.avsenderBedrift}>
          <p>SKEISVANG VGS AS</p>
          <p>ELEV UTTRANSPORTASJON</p>
          <p>SG85</p>
          <p>5870 HIMMELEN V2.0</p>
        </div>
        <div className={classes.varer}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  varer
                </TableCell>
                <TableCell>
                  Pris
                </TableCell>
                <TableCell>
                  Rabatt
                </TableCell>
                <TableCell>
                  MVA
                </TableCell>
                <TableCell>
                  Beløp
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.fakturagrunnlag.fakturalinjer.map(n => {
                return (
                  <TableRow key={n.fritekst}>
                    <TableCell>
                      {n.fritekst}
                    </TableCell>
                    <TableCell>
                      {n.pris}
                    </TableCell>
                    <TableCell>
                      0
                    </TableCell>
                    <TableCell>
                      25%
                    </TableCell>
                    <TableCell>
                      {n.pris}
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
                    </TableCell>
                    <TableCell>
                      {data.fakturagrunnlag.total}
                    </TableCell>
                  </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className={classes.avslutning}></div>
      </div>
    );
  }
}

ClaimTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimTemplate);