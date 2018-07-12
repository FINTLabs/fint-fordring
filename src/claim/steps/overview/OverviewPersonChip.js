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

class OverviewPersonChip extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}
          id={"chipContainer"}>
          {this.props.lastSentClaim.map(n => {
            return (
              <Chip
                key={n.kunde.kundenummer}
                label={n.kunde.navn.fornavn + ((n.kunde.navn.mellomnavn) ? (" " + n.kunde.navn.mellomnavn + " ") : (" ")) + n.kunde.navn.etternavn + ": " + (n.numberOrdrenummer)}
                className={classes.chip}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

OverviewPersonChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverviewPersonChip);