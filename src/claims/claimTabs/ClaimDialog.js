import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClaimTemplate from './ClaimTemplate';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class ClaimDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth = "md"
        >
          
          <DialogContent className={classes.size}>
            <DialogContentText id="alert-dialog-description">
              <ClaimTemplate data={this.props.claim}/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
              Lukk
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ClaimDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimDialog);