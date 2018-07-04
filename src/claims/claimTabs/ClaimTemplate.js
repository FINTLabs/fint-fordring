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
import { Divider } from "@material-ui/core";

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
      <div className={classes.root}>
        <GridList cellHeight={140} className={classes.gridList} cols={6}>
          <GridListTile key="1" cols={2}>
            <p>{data.kunde.navn.etternavn}, {data.kunde.navn.fornavn} {data.kunde.navn.mellomnavn}</p>
            <p>Tlf: {data.kunde.kontaktinformasjon.mobiltelefonnummer | data.kunde.kontaktinformasjon.telefonnummer}</p>
            <p>E-post: {data.kunde.kontaktinformasjon.epostadresse} </p>
          </GridListTile>
          <GridListTile key="2" cols={2}>
            <p>Adresse: {data.kunde.postadresse.adresselinje.join(", ")}</p>
            <p>Postnummer: {data.kunde.postadresse.postnummer}</p>
            <p>Poststed: {data.kunde.postadresse.poststed}</p>
          </GridListTile>
          <GridListTile key="3" cols={2}>
            <p>Fakturanr: {data.fakturanummer}</p>
            <p>Leveringsdato: {data.fakturagrunnlag.leveringsdato}</p>
            <p>Forfallsdato: {data.fakturagrunnlag.forfallsdato}</p>
          </GridListTile>
          <GridListTile key="5" cols={6}style={{ height: "!important" }}>
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
                    <b>Total:</b>
                  </TableCell>
                  <TableCell>
                    <b>{data.fakturagrunnlag.total}</b>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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