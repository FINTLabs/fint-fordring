import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AllClaims from './differentClaims/AllClaims';
import PaidClaims from './differentClaims/PaidClaims';
import PartiallyPaidClaims from './differentClaims/PartiallyPaidClaims';
import UnpaidClaims from './differentClaims/UnpaidClaims';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minWidth: 300
  },
});

class ClaimTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'one',
    };
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    let listOfUnpaidClaims = [];
    let listOfPaidClaims = [];
    let listOfPartiallyPaidClaims = [];
    let listOfAllClaims = this.props.testDataFordring;

    for (let i = 0; i < listOfAllClaims.length; i++) {
      if (listOfAllClaims[i].restBelop === 0) {
        listOfAllClaims[i]["farge"] = "green";
        listOfPaidClaims.push(listOfAllClaims[i]);
      } else if (listOfAllClaims[i].restBelop !== listOfAllClaims[i]["fakturagrunnlag"]["total"]) {
        listOfAllClaims[i]["farge"] = "yellow";
        listOfPartiallyPaidClaims.push(listOfAllClaims[i]);
      } else if (listOfAllClaims[i].restBelop === listOfAllClaims[i]["fakturagrunnlag"]["total"]) {
        listOfAllClaims[i]["farge"] = "red";
        listOfUnpaidClaims.push(listOfAllClaims[i]);
      }
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab value="one" label="Alle fakturaer" />
            <Tab value="two" label="Ubetalte fakturaer" />
            <Tab value="three" label="Delbetalte fakturaer" />
            <Tab value="four" label="Betalte fakturaer" />
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer><AllClaims listOfAllClaims={listOfAllClaims} /></TabContainer>}
        {value === 'two' && <TabContainer><UnpaidClaims listOfUnpaidClaims={listOfUnpaidClaims} /></TabContainer>}
        {value === 'three' && <TabContainer><PartiallyPaidClaims listOfPartiallyPaidClaims={listOfPartiallyPaidClaims} /></TabContainer>}
        {value === 'four' && <TabContainer><PaidClaims listOfPaidClaims={listOfPaidClaims} /></TabContainer>}
      </div>
    );
  }
}

ClaimTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimTabs);