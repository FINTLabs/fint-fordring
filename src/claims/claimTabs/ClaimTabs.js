import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
/*import AllClaims from './differentClaims/AllClaims';
import PaidClaims from './differentClaims/PaidClaims';
import UnpaidClaims from './differentClaims/UnpaidClaims';
import PartiallyPaidClaims from './differentClaims/PartiallyPaidClaims';*/

import TableClaims from './TableClaims';

import SearchBox from './SearchBox';

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
    minWidth: 851
  },
});

class ClaimTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'one',
      searchFilter: [],
      searchMessage: "",
      last: "",
      sort: -1
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.getSearchInput("");
    this.setState({ last: "" });
  };

  /*
  When searching there are two options:
  numbersearch, where it has to be exact with the ordernumber, and you can write any amount of symbols
  namesearch, where you have to have atleast 3 symbols, and give all searches with names that match
  check with Number(inputstring), if NaN, it is a name, else it is a number
  */

  getSearchInput = (val, claimList, selectedTab) => {
    let filteredClaimArr = [];
    this.setState({ searchMessage: "" });
    if (val !== "") {
      if (isNaN(val)) {
        if (val.length >= 3) {
          filteredClaimArr = claimList.filter(betaling =>
            (betaling.status === selectedTab || selectedTab === "alle") &&
            betaling.kunde.navn.toLowerCase().indexOf(val) !== -1
          );
          if (filteredClaimArr.length === 0) {
            this.setState({ searchMessage: "Ingen søkeresultater" });
          }
        } else if (val !== "") {
          this.setState({ searchMessage: "Søkeordet for navn må minst være 3 bokstaver" });
        }
      } else {
        filteredClaimArr = claimList.filter(betaling =>
          (betaling.status === selectedTab || selectedTab === "alle") &&
          betaling.numberOrdrenummer === Number(val));
        if (filteredClaimArr.length === 0) {
          this.setState({ searchMessage: "Ingen søkeresultater" });
        }
      }
    }
    this.setState({ searchFilter: filteredClaimArr });
  }

  triggerSort = (val, isNumber, sortKey) => {
    this.sortMethod(
      this.props.testDataFordring,
      (this.state.sort === -1 && this.state.last === sortKey) ?
        (this.setState({ sort: 1 }), -1) :
        (this.setState({ sort: -1 }), 1),
      val, isNumber);
    this.setState({ last: sortKey });
  }

  resolve = (obj, path) => {
    path = path.split('.');
    var current = obj;
    while (path.length) {
      if (typeof current !== 'object') return undefined;
      current = current[path.shift()];
    }
    return current;
  }

  sortMethod = (array, order, sortKeyArray, isNumber) => {
    if (isNumber) {
      function compare(a, b) {
        if (Number(this.resolve(a, sortKeyArray[0])) < Number(this.resolve(b, sortKeyArray[0]))) {
          return -1 * order; //order is either -1 or 1
        }
        if (Number(this.resolve(a, sortKeyArray[0])) > Number(this.resolve(b, sortKeyArray[0]))) {
          return 1 * order; //order is either -1 or 1
        }
        return 0;
      }
      this.setState({ sortedPersonList: array.sort(compare.bind(this)) });
    } else {
      function compare(a, b) {
        if (sortKeyArray.map(f => this.resolve(a, f)).join(" ") < sortKeyArray.map(f => this.resolve(b, f)).join(" ")) {
          return -1 * order; //order is either -1 or 1
        }
        if (sortKeyArray.map(f => this.resolve(a, f)).join(" ") > sortKeyArray.map(f => this.resolve(b, f)).join(" ")) {
          return 1 * order; //order is either -1 or 1
        }
        return 0;
      }
      this.setState({ sortedPersonList: array.sort(compare.bind(this)) });
    }
  }


  render() {
    const { classes } = this.props;
    const { value } = this.state;

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
        {value === 'one' && <TabContainer>
          <SearchBox placeHolder="Søk etter navn eller ordrenummer" getSearchInput={this.getSearchInput} listOfClaims={this.props.testDataFordring}
            selectedTab="alle" />
          {(this.state.searchMessage !== "") ? (<div style={{ margin: 20 }}>{this.state.searchMessage}</div>) : (false)}
          <TableClaims
            listOfClaims={this.props.testDataFordring}
            searchFilter={this.state.searchFilter}
            triggerSort={this.triggerSort}
            sortMethod={this.sortMethod}
            last={this.state.last}
            sort={this.state.sort}
            mvaCodes={this.props.mvaCodes}
            selectedTab="alle" />
        </TabContainer>}
        {value === 'two' && <TabContainer>
          <SearchBox placeHolder="Søk etter navn eller ordrenummer" getSearchInput={this.getSearchInput} listOfClaims={this.props.testDataFordring}
            selectedTab="ikkebetalt" />
          {(this.state.searchMessage !== "") ? (<div style={{ margin: 20 }}>{this.state.searchMessage}</div>) : (false)}
          <TableClaims
            listOfClaims={this.props.testDataFordring}
            searchFilter={this.state.searchFilter}
            triggerSort={this.triggerSort}
            sortMethod={this.sortMethod}
            last={this.state.last}
            sort={this.state.sort}
            mvaCodes={this.props.mvaCodes}
            selectedTab="ikkebetalt" />
        </TabContainer>}
        {value === 'three' && <TabContainer>
          <SearchBox placeHolder="Søk etter navn eller ordrenummer" getSearchInput={this.getSearchInput} listOfClaims={this.props.testDataFordring}
            selectedTab="delbetalt" />
          {(this.state.searchMessage !== "") ? (<div style={{ margin: 20 }}>{this.state.searchMessage}</div>) : (false)}
          <TableClaims
            listOfClaims={this.props.testDataFordring}
            searchFilter={this.state.searchFilter}
            triggerSort={this.triggerSort}
            sortMethod={this.sortMethod}
            last={this.state.last}
            sort={this.state.sort}
            mvaCodes={this.props.mvaCodes}
            selectedTab="delbetalt" />
        </TabContainer>}
        {value === 'four' && <TabContainer>
          <SearchBox placeHolder="Søk etter navn eller ordrenummer" getSearchInput={this.getSearchInput} listOfClaims={this.props.testDataFordring}
            selectedTab="betalt" />
          {(this.state.searchMessage !== "") ? (<div style={{ margin: 20 }}>{this.state.searchMessage}</div>) : (false)}
          <TableClaims
            listOfClaims={this.props.testDataFordring}
            searchFilter={this.state.searchFilter}
            triggerSort={this.triggerSort}
            sortMethod={this.sortMethod}
            last={this.state.last}
            sort={this.state.sort}
            mvaCodes={this.props.mvaCodes}
            selectedTab="betalt" />
        </TabContainer>}
      </div>
    );
  }
}

ClaimTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimTabs);