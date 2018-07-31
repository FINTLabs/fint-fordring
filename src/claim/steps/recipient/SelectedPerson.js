import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { ExpandMore } from '@material-ui/icons';
import { ExpandLess } from '@material-ui/icons';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit,
    maxHeight: 120,
    overflow: "hidden",
  },
  rootExpanded: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit,
    maxHeight: "none",
    overflow: "hidden",
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class SelectedPerson extends React.Component {

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
      <Paper>
        <div style={{marginTop: 10}}>
          <GridList cellHeight={50} className={classes.gridList} cols={6}>
            <GridListTile key="1" cols={1}>
            </GridListTile>
            <GridListTile key="2" cols={4}>
              <p style={{ fontSize: 16 }}>Valgte personer</p> </GridListTile>
            <GridListTile key="3" cols={1}>
              <Button onClick={this.props.removeAllPerson}>Fjern alle</Button>
            </GridListTile>
          </GridList>
        </div>
        <div className={classes.root} style={this.state.expanded ? (expandStyle) : (notExpandedStyle)}
          id={"chipContainer"}>
          {this.props.orderedBySelection.map(n => {
            let avatar = null;

            return (
              <Chip
                key={n.kundeid}
                avatar={avatar}
                label={n.navn + " | " + n.klassenavn}
                onDelete={() => this.props.removeMethod(n)}
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

SelectedPerson.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedPerson);