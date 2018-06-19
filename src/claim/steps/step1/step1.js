import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./SelectedPerson";
import SearchResultGroup from "./search/SearchResultGroup";


const styles = theme => ({});
const testDataGruppe = [
    {
        "id": "1",
        "mainGroup": "1STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "1",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "2",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "3",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "4",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "5",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "2",
        "mainGroup": "2STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "6",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "7",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "8",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "9",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "10",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "3",
        "mainGroup": "3STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "11",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "12",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "13",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "14",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "15",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "4",
        "mainGroup": "4STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "16",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "17",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "18",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "19",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "20",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "5",
        "mainGroup": "5STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "21",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "22",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "23",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "24",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "25",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "6",
        "mainGroup": "1STB",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "1",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "2",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "3",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "4",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "5",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "7",
        "mainGroup": "2STB",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "6",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "7",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "8",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "9",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "10",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "8",
        "mainGroup": "3STB",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "11",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "12",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "13",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "14",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "15",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "9",
        "mainGroup": "4STB",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "16",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "17",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "18",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "19",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "20",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "10",
        "mainGroup": "5STB",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "21",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "22",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "23",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "24",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "25",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
];
const testDataPersoner = [

]
/* Skal endre hvordan ting i forhold til personer fungerer, slik at vi slipper dobbel-loops osv for å
plukke ut elever fra gruppene. Kan alltid bruke en 
*/

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: testDataGruppe,
            searchMethod: 0,
            searchFilter: testDataGruppe,
            sortedPersonList: []
        };
    }

    addToSelection = (group, person) => {
        let updateState = this.state.groups;
        let groupIndex = updateState.indexOf(group);
        let personIndex = updateState[groupIndex].members.indexOf(person);
        updateState[groupIndex].members[personIndex]["selected"] = true;
        this.setState({ groups: updateState });
    }

    removeFromSelection = (group, person) => {
        let updateState = this.state.groups;
        let groupIndex = updateState.indexOf(group);
        let personIndex = updateState[groupIndex].members.indexOf(person);
        updateState[groupIndex].members[personIndex]["selected"] = false;
        this.setState({ groups: updateState });
    };

    addAll = (group) => {
        let allIsSelected = false;
        for (let i = 0; i < group.members.length; i++) {
            if (!group.members[i].selected) {
                allIsSelected = true;
            }
        }
        if (allIsSelected) {
            for (let i = 0; i < group.members.length; i++) {
                if (group.members[i].selected) {
                }
                group.members[i].selected = true;
            }
        } else {
            for (let i = 0; i < group.members.length; i++) {
                if (group.members[i].selected) {
                }
                group.members[i].selected = false;
            }
        }
        let updateState = this.state.groups;
        updateState[updateState.indexOf(group)] = group;
        this.setState({ groups: updateState });
    }

    checkIfAllAreSelected = (group) => {
        let allIsSelected = false;
        for (let i = 0; i < group.members.length; i++) {
            if (!group.members[i].selected) {
                allIsSelected = true;
            }
        }
        return allIsSelected;
    }

    getSearchMethod = (val) => {
        this.setState({ searchMethod: val }, () => {
            this.getSearchInput("");
        });
    };

    getSearchInput = (val) => {
        let filteredGroupArr = [];
        if (this.state.searchMethod === 0) {
            filteredGroupArr = this.state.groups.filter(e => e.mainGroup.toLowerCase().indexOf(val) !== -1);
        } else {
            for (let i = 0; i < this.state.groups.length; i++) {
                filteredGroupArr = filteredGroupArr.concat(this.state.groups[i].members.filter(e => (e.firstName + " " + e.lastName).toLowerCase().indexOf(val) !== -1));
            }
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
                if (eval("a." + sortByValue + "<" + "b." + sortByValue)) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("a." + sortByValue + ">" + "b." + sortByValue)) {
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
                {this.state.searchMethod === 0 ? (
                    <SearchResultGroup
                        listGroup={this.state.groups}
                        addMethod={this.addToSelection}
                        removeMethod={this.removeFromSelection}
                        addAll={this.addAll}
                        checkIfAllAreSelected={this.checkIfAllAreSelected}
                        searchFilter={this.state.searchFilter} />
                ) : (
                        <SearchResultPerson
                            sortedPersonList={this.state.sortedPersonList}
                            sortMethod={this.sortMethod}
                            addMethod={this.addToSelection}
                            listGroup={this.state.groups}
                            removeMethod={this.removeFromSelection}
                            searchFilter={this.state.searchFilter} />
                    )}
                <SelectedPerson
                    listGroup={this.state.groups}
                    removeMethod={this.removeFromSelection} />
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
