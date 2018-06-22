import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./SelectedPerson";
import SearchResultGroup from "./search/SearchResultGroup";


const styles = theme => ({});

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchMethod: 0,
            searchFilter: this.props.testDataGruppe,
            sortedPersonList: [],
        };
    }

    checkIfAllAreSelected = (group) => {
        let allIsSelected = false;
        for (let i = 0; i < group.kundeliste.length; i++) {
            if (!this.props.selectedPersonList[group.kundeliste[i]["kundenummer"]]) {
                allIsSelected = true;
            }
        }
        return allIsSelected;
    }

    checkIfNoneAreSelected = (obj) => {
        for (let o in obj) {
            if (obj[o]) return true;
        }
        return false;
    }

    getSearchMethod = (val) => {
        this.setState({ searchMethod: val }, () => {
            this.getSearchInput("");
        });
    };

    getSearchInput = (val) => {
        let filteredGroupArr = [];
        if (this.state.searchMethod === 0) {
            filteredGroupArr = this.props.testDataGruppe.filter(e => e.navn.toLowerCase().indexOf(val) !== -1);
        } else {
            filteredGroupArr = this.props.testDataPerson.filter(e =>
                (e.navn.fornavn + " " +
                    ((e.navn.mellomnavn) ?
                        (e.navn.mellomnavn + " ") :
                        (""))
                    + e.navn.etternavn).toLowerCase().indexOf(val) !== -1
            );
        }
        this.setState({ searchFilter: filteredGroupArr });
    }

    sortMethod = (array, order, sortByValue, isNumber) => {
        if (isNumber) {
            function compare(a, b) {
                if (eval("Number(a." + sortByValue + ")<" + "Number(b." + sortByValue + ")")) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("Number(a." + sortByValue + ")>" + "Number(b." + sortByValue + ")")) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
        } else {
            function compare(a, b) {
                if (eval(sortByValue.map(f => "a." + f).join("+") + "<" + sortByValue.map(f => "b." + f).join("+"))) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval(sortByValue.map(f => "a." + f).join("+") + ">" + sortByValue.map(f => "b." + f).join("+"))) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <SearchTabs
                    getSearchInput={this.getSearchInput}
                    getSearchMethod={this.getSearchMethod} />
                {this.checkIfNoneAreSelected(this.props.selectedPersonList) ? (
                    <SelectedPerson
                        orderedBySelection={this.props.orderedBySelection}
                        removeMethod={this.props.removeMethod} />
                ) : (<div />)}
                {this.state.searchMethod === 0 ? (
                    <SearchResultGroup
                        selectedPersonList={this.props.selectedPersonList}
                        testDataGruppe={this.props.testDataGruppe}

                        sortMethod={this.sortMethod}
                        addMethod={this.props.addMethod}
                        removeMethod={this.props.removeMethod}
                        addAll={this.props.addAll}
                        checkIfAllAreSelected={this.checkIfAllAreSelected}
                        searchFilter={this.state.searchFilter} />
                ) : (
                        <SearchResultPerson
                            selectedPersonList={this.props.selectedPersonList}
                            testDataPerson={this.props.testDataPerson}

                            sortedPersonList={this.state.sortedPersonList}
                            sortMethod={this.sortMethod}
                            addMethod={this.props.addMethod}
                            removeMethod={this.props.removeMethod}
                            searchFilter={this.state.searchFilter} />
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
