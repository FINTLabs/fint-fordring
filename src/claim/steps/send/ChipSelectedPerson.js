import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit,
    overflow: "hidden",
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipSelectedPerson extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}
          id={"chipContainer"}>
          {this.props.orderedBySelection.map(n => {
            let avatar = null;
            return (
              <Chip
                key={n.kundenummer}
                avatar={avatar}
                label={n.navn.fornavn + ((n.navn.mellomnavn) ? (" " + n.navn.mellomnavn + " ") : (" ")) + n.navn.etternavn + " | " + n.klassenavn}
                className={classes.chip}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ChipSelectedPerson.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipSelectedPerson);