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
            searchFilter: [],
            sortedPersonList: [],
            searchMessage: "",
        };
    }

    checkIfAllAreSelected = (group) => {
        let allIsSelected = false;
        let list = (group.kundeliste) ? (group.kundeliste) : (group);

        for (let i = 0; i < list.length; i++) {
            if (!this.props.selectedPersonList[list[i]["kundeid"]]) {
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
        this.setState({ searchMessage: "" });
        let filteredGroupArr = [];
        if (val.length >= 3) {
            if (this.state.searchMethod === 0) {
                filteredGroupArr = this.props.testDataGruppe.filter(e => e.navn.toLowerCase().indexOf(val) !== -1);
            } else {
                filteredGroupArr = this.props.testDataPerson.filter(e =>
                    (e.navn + " " + e.klassenavn).toLowerCase().indexOf(val) !== -1
                );
            }
            if (filteredGroupArr.length === 0) {
                this.setState({ searchMessage: "Ingen søkeresultater" });
            }
        } else if (val !== "") {
            this.setState({ searchMessage: "Søkeordet må være minst 3 bokstaver" });
        }
        this.setState({ searchFilter: filteredGroupArr });
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
                if (Number(a[sortKeyArray]) < Number(b[sortKeyArray])) {
                    return -1 * order; //order is either -1 or 1
                }
                if (Number(a[sortKeyArray]) > Number(b[sortKeyArray])) {
                    return 1 * order; //order is either -1 or 1
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
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

        return (
            <div>
                <SearchTabs
                    getSearchInput={this.getSearchInput}
                    getSearchMethod={this.getSearchMethod} />
                {(this.state.searchMessage !== "") ? (<div style={{ margin: 20 }}>{this.state.searchMessage}</div>) : (false)}
                {this.checkIfNoneAreSelected(this.props.selectedPersonList) ? (
                    <SelectedPerson
                        orderedBySelection={this.props.orderedBySelection}
                        removeMethod={this.props.removeMethod}
                        removeAllPerson={this.props.removeAllPerson}
                    />

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
                            addAll={this.props.addAll}
                            checkIfAllAreSelected={this.checkIfAllAreSelected}
                            searchFilter={this.state.searchFilter} />
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
