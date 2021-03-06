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

class SelectedProduct extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.props.orderedBySelection.map(data => {
          return (
            <Chip
              key={data.kode}
              label={Number(this.props.selectedProductList[data.kode]) + " x " + data.navn}
              onDelete={() => this.props.removeMethod(data)}
              className={classes.chip}
            />
          );
        })
        }
      </Paper>
    );
  }
}

SelectedProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedProduct);