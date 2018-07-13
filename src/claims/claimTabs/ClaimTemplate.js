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
import Paper from '@material-ui/core/Paper';

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

class ClaimTemplate extends React.Component {

  render() {
    const { classes } = this.props;

    let data = this.props.data;

    return (
      <div className={classes.root}>
        <GridList cellHeight={140} className={classes.gridList} cols={6}>
        <Paper style={{margin: 10, width: '30%', paddingLeft: 7}}>
          <GridListTile key="1" cols={2}>
            <p>{data.kunde.navn.etternavn}, {data.kunde.navn.fornavn} {data.kunde.navn.mellomnavn}</p>
            <p>Tlf: {data.kunde.kontaktinformasjon.mobiltelefonnummer | data.kunde.kontaktinformasjon.telefonnummer}</p>
            <p>E-post: {data.kunde.kontaktinformasjon.epostadresse} </p>
          </GridListTile>
          </Paper>
          <Paper style={{margin: 10, width: '30%', paddingLeft: 7}}>
          <GridListTile key="2" cols={2}>
            <p>Adresse: {data.kunde.postadresse.adresselinje.join(", ")}</p>
            <p>Postnummer: {data.kunde.postadresse.postnummer}</p>
            <p>Poststed: {data.kunde.postadresse.poststed}</p>
          </GridListTile>
          </Paper>
          <Paper style={{margin: 10, width: '30%', paddingLeft: 7}}>
          <GridListTile key="3" cols={2}>
            <p>Fakturanr: {data.numberOrdrenummer}</p>
            <p>Leveringsdato: {new Date(data.fakturagrunnlag.leveringsdato).toLocaleDateString()}</p>
            <p>Forfallsdato: {new Date(data.fakturagrunnlag.forfallsdato).toLocaleDateString()}</p>
          </GridListTile>
          </Paper>
          <GridListTile key="5" cols={6} style={{ height: "!important" }}>
            <Paper style={{margin: 10}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Varer
                </TableCell>
                  <TableCell>
                    Nettopris
                </TableCell>
                  <TableCell>
                    MVA
                </TableCell>
                  <TableCell>
                    Antall
                </TableCell>
                  <TableCell>
                    Nettobeløp
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.fakturagrunnlag.fakturalinjer.map((n, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {n.fritekst}
                      </TableCell>
                      <TableCell>
                        {n.pris},-
                      </TableCell>
                      <TableCell>
                        25%
                    </TableCell>
                      <TableCell>
                        {n.antall}
                      </TableCell>
                      <TableCell>
                        {n.pris * n.antall},-
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
                    <b>Total inkl. mva:</b>
                  </TableCell>
                  <TableCell>
                    <b>{data.fakturagrunnlag.total / 100},-</b>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </Paper>
          </GridListTile>
        </GridList>
        <div className={classes.size}>
          <div className={classes.varer}>
          </div>
          <div className={classes.avslutning}></div>
        </div>
      </div>
    );
  }
}

ClaimTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimTemplate);