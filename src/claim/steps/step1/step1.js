import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./SelectedPerson";
import SearchResultGroup from "./search/SearchResultGroup";


const styles = theme => ({});

//Dette bør kanskje ligge en annen plass enn constructor
//må nok bruke samme metode for å finne ut hvilke skoler elevene hører til
class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //this state seems to be global, it isnt reevaluated when we change from one step to another, im confused
            searchMethod: 0,
            searchFilter: this.props.testDataGruppe,
            sortedPersonList: [],
            //for some reason this is updated when you go back to previous page, while selectedPersonList is for some reason remembered...
        }; //må da sannsynligvis sende denne dataen opp til claim (eller lagre den der til å begynne med), og sende den ned til step1 via prop
        /**
         Kanskje vi må si at selectedPersonList : {} til å starte med, også her
         skrive: this.setState(Initial) etc. Kanskje den vil være uavhengig av initial da?
         */
    }

    /*addToSelection = (person) => {
        let updateList = this.state.selectedPersonList;
        let updateOrderedList = this.props.selectedPersonData;
        updateList[person["kundenummer"]] = true;
        this.setState({ selectedPersonList: updateList });
        updateOrderedList.push(person);
        this.setState({ orderedBySelection: updateOrderedList }, () => {
            this.props.sendPersonDataToClaim(this.props.selectedPersonData);
            console.log(this.props.selectedPersonData);
        });
    }

    removeFromSelection = (person) => {
        let updateList = this.state.selectedPersonList;
        let updateOrderedList = this.props.selectedPersonData;
        updateList[person["kundenummer"]] = false;
        this.setState({ selectedPersonList: updateList });
        for (let i = 0; i < updateOrderedList.length; i++) {
            if (JSON.stringify(updateOrderedList[i]) === JSON.stringify(person)) {
                updateOrderedList.splice(i, 1);
            }
        }
        this.setState({ orderedBySelection: updateOrderedList }, () => {
            this.props.sendPersonDataToClaim(this.props.selectedPersonData);
        });
    };*/
    /*
        addAll = (group) => {
            let allIsSelected = false;
            let updateOrderedList = this.props.selectedPersonData;
            let updateList = this.state.selectedPersonList;
            for (let i = 0; i < group.kundeliste.length; i++) {
                if (!updateList[group.kundeliste[i]["kundenummer"]]) {
                    allIsSelected = true;
                    updateOrderedList.push(group.kundeliste[i]);
                }
            }
            if (allIsSelected) {
                for (let i = 0; i < group.kundeliste.length; i++) {
                    updateList[group.kundeliste[i]["kundenummer"]] = true;
                }
            } else {
                for (let i = 0; i < group.kundeliste.length; i++) {
                    //console.log(group.kundeliste[i]);
                    updateList[group.kundeliste[i]["kundenummer"]] = false;
                    for (let j = 0; j < updateOrderedList.length; j++) {
                        if (JSON.stringify(updateOrderedList[j]) === JSON.stringify(group.kundeliste[i])) {
                            updateOrderedList.splice(j, 1);
                        }
                    }
                }
            }
            this.setState({ selectedPersonList: updateList });
            this.setState({ orderedBySelection: updateOrderedList }, () => {
                this.props.sendPersonDataToClaim(this.props.selectedPersonData);
            });
        }
    */
    /**/

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
                    ((e.navn.mellomnavn) ? (e.navn.mellomnavn + " ") : ("")) +
                    e.navn.etternavn).toLowerCase().indexOf(val) !== -1
            );
        }
        this.setState({ searchFilter: filteredGroupArr }, () => {
            console.log(this.state.searchFilter);
        });
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
