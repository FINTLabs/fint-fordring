import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { ExpandMore } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';

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

  constructor() {
    super();
    this.state = {
      height: 0,
      expanded: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let height = document.getElementById("chipContainer").scrollHeight;
    if (height !== prevState.height) {
      this.setState({ height });
    }
    if (height <= 128 && this.state.expanded) {
      this.setState({ expanded: false });
    }
  }
  componentDidMount() {
    this.setState({ height: document.getElementById("chipContainer").scrollHeight });
  }

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { classes } = this.props;

    let expandStyle = {
      maxHeight: 'none'
    }
    let notExpandedStyle = {
      maxHeight: 120
    }


    return (
      <Paper elevation={0}>
        <Chip
          key="eksempel"
          label="Navn: Ordrenummer"
          className={classes.chip}
        />
        <div className={classes.root} style={this.state.expanded ? (expandStyle) : (notExpandedStyle)}
          id={"chipContainer"}>
          {this.props.lastSentClaim.map(n => {
            return (
              <Chip
                key={n.kunde.kundenummer}
                label={n.kunde.navn.fornavn + ((n.kunde.navn.mellomnavn) ? (" " + n.kunde.navn.mellomnavn + " ") : (" ")) + n.kunde.navn.etternavn + ": " + (n.ordrenummer)}
                className={classes.chip}
              />
            );
          })}
        </div>
        {(this.state.height > 128) ? (<Button onClick={() => this.handleExpand()}>{this.state.expanded ? (<ExpandLess />) : (<ExpandMore />)}</Button>) : (<div />)}
      </Paper>
    );
  }
}

OverviewPersonChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverviewPersonChip);