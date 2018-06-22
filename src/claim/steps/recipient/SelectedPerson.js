import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class SelectedPerson extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={0}>
        {this.props.orderedBySelection.map(n => {
                let avatar = null;

                return (
                  <Chip
                    key={n.kundenummer}
                    avatar={avatar}
                    label={n.navn.fornavn + ((n.navn.mellomnavn) ? ( " " + n.navn.mellomnavn + " ") : (" ")) + n.navn.etternavn}
                    onDelete={() => this.props.removeMethod(n)}
                    className={classes.chip}
                  />
                );
        })}
      </Paper>
    );
  }
}

SelectedPerson.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedPerson);