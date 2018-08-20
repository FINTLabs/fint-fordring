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
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Amount from "../../common/Amount";
import Utils from "../../libs/Utils";


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

  constructor() {
    super();
    this.state = {
      open: false,
      descriptionDialogContent: "",
    }
  }

  handleClose = value => {
    this.setState({ descriptionDialogContent: "", open: false });
  };

  handleDescriptionText = (beskrivelse) => {
    this.setState({
      open: true,
      descriptionDialogContent: beskrivelse || "",
    });
  }

  render() {
    const { classes } = this.props;

    const {kunde, fakturagrunnlag} = this.props.data;
    console.log("kunde", kunde);
    console.log("fakturagrunnlag", fakturagrunnlag);

    return (
      <div className={classes.root}>
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
          <DialogContent>
            <div style={{wordWrap: "break-word", maxWidth: 400}}>
              {this.state.descriptionDialogContent}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Lukk
            </Button>
          </DialogActions>
        </Dialog>
        <GridList cellHeight={140} className={classes.gridList} cols={6}>
          <Paper style={{ margin: 10, width: '30%', paddingLeft: 7 }}>
            <GridListTile key="1" cols={2}>
              <p>{Utils.getValue(kunde.navn.etternavn)}, {Utils.getValue(kunde.navn.fornavn)} {Utils.getValue(kunde.navn.mellomnavn)}</p>
              <p>Tlf: {Utils.getValue(kunde.kontaktinformasjon).mobiltelefonnummer | Utils.getValue(kunde.kontaktinformasjon).telefonnummer}</p>
              <p>E-post: {Utils.getValue(kunde.kontaktinformasjon).epostadresse} </p>
            </GridListTile>
          </Paper>
            <Paper style={{ margin: 10, width: '30%', paddingLeft: 7 }}>
                <GridListTile key="2" cols={2}>
                    <p>Postnummer: {Utils.getValue(kunde.postadresse).postnummer}</p>
                    <p>Poststed: {Utils.getValue(kunde.postadresse).poststed}</p>
                </GridListTile>
            </Paper>
            <Paper style={{ margin: 10, width: '30%', paddingLeft: 7 }}>
                <GridListTile key="3" cols={2}>
                    <p>Fakturanr: {fakturagrunnlag.ordrenummer.identifikatorverdi}</p>
                    <p>Leveringsdato: {new Date(fakturagrunnlag.leveringsdato).toLocaleDateString()}</p>
                    <p>Forfallsdato: {new Date(fakturagrunnlag.forfallsdato).toLocaleDateString()}</p>
                </GridListTile>
            </Paper>
          <GridListTile key="5" cols={6} style={{ height: "!important" }}>
            <Paper style={{ margin: 10 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Produkt
                </TableCell>
                    <TableCell>
                      Beskrivelse
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
                  {fakturagrunnlag.fakturalinjer.map((n, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          {n.fritekst[0]}
                        </TableCell>
                        <TableCell onClick={() => (n.fritekst[1]) ? this.handleDescriptionText(n.fritekst[1]) : (false)}>
                          {(n.fritekst[1]) ? "Trykk for å se beskrivelse" : ""}
                        </TableCell>
                        <TableCell>
                          {n.antall}
                        </TableCell>
                        <TableCell>
                            <Amount>{n.pris}</Amount>
                        </TableCell>
                        <TableCell>
                            <Amount>{n.pris * n.antall}</Amount>
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
                        <b><Amount>{fakturagrunnlag.netto}</Amount></b>
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
                        <b><Amount>{fakturagrunnlag.total}</Amount></b>
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