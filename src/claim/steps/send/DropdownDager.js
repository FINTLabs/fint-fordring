import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: 20,
  },
});

class DropdownDager extends React.Component {

  handleSelectChange = (event) => {
    this.props.getSelectedDate(event.target.value)
}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl>
          <InputLabel>Fakturaen forfaller om..</InputLabel>
          <Select
            style={{ minWidth: 200, width: 200, fontSize: 16, textAlign: "left"}}
            onChange={this.handleSelectChange}
            value={this.props.selectedDate}
          >
            {this.props.dates.map((option) => (
              <MenuItem
                key={option}
                value={option}
              >
                {option + " Dager"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

DropdownDager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropdownDager);

