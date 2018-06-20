import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./SelectedPerson";
import SearchResultGroup from "./search/SearchResultGroup";


const styles = theme => ({});
const testDataGruppe = [
    {
        "navn": "1STA",
        "beskrivelse": "1. trinn Studiespesialisering 2018-2019",
        "kundeliste": [
            {
                "kundenummer": "14029923273",
                "navn": {
                    "etternavn": "Støa",
                    "fornavn": "Rose",
                    "mellomnavn": null
                },
                "kontaktinformasjon": {
                    "epostadresse": "RoseSta@jourrapide.com",
                    "mobiltelefonnummer": "48213268",
                    "nettsted": null,
                    "sip": null,
                    "telefonnummer": null
                },
                "postadresse": {
                    "adresselinje": [
                        "Setra vei 207"
                    ],
                    "postnummer": "0786",
                    "poststed": "Oslo"
                }
            },
            {
                "kundenummer": "18010197461",
                "navn": {
                    "etternavn": "Hansen",
                    "fornavn": "Leona",
                    "mellomnavn": null
                },
                "kontaktinformasjon": {
                    "epostadresse": "LeonaHansen@dayrep.com",
                    "mobiltelefonnummer": "41109815",
                    "nettsted": null,
                    "sip": null,
                    "telefonnummer": null
                },
                "postadresse": {
                    "adresselinje": [
                        "Scheitlies gate 48"
                    ],
                    "postnummer": "3045",
                    "poststed": "Drammen"
                }
            },
            {
                "kundenummer": "11010159115",
                "navn": {
                    "etternavn": "Hofseth",
                    "fornavn": "Gustav",
                    "mellomnavn": null
                },
                "kontaktinformasjon": {
                    "epostadresse": "GustavHofseth@rhyta.com",
                    "mobiltelefonnummer": "94259236",
                    "nettsted": null,
                    "sip": null,
                    "telefonnummer": null
                },
                "postadresse": {
                    "adresselinje": [
                        "Kikkutveien 91"
                    ],
                    "postnummer": "0491",
                    "poststed": "Oslo"
                }
            }
        ]
    },
    {
        "navn": "3STF",
        "beskrivelse": "3. trinn Studiespesialisering 2018-2019",
        "kundeliste": [
            {
                "kundenummer": "12345678909",
                "navn": {
                    "etternavn": "Kjell Kåre",
                    "fornavn": "Kveiteland",
                    "mellomnavn": null
                },
                "kontaktinformasjon": {
                    "epostadresse": "Kjellkå@hotmail.com",
                    "mobiltelefonnummer": "12345678",
                    "nettsted": null,
                    "sip": null,
                    "telefonnummer": null
                },
                "postadresse": {
                    "adresselinje": [
                        "Skole vei 207"
                    ],
                    "postnummer": "4260",
                    "poststed": "Torvastad"
                }
            }
        ]
    }
];
const testDataPersoner = [
    {
        "kundenummer": "14029923273",
        "navn": {
            "etternavn": "Støa",
            "fornavn": "Rose",
            "mellomnavn": null
        },
        "kontaktinformasjon": {
            "epostadresse": "RoseSta@jourrapide.com",
            "mobiltelefonnummer": "48213268",
            "nettsted": null,
            "sip": null,
            "telefonnummer": null
        },
        "postadresse": {
            "adresselinje": [
                "Setra vei 207"
            ],
            "postnummer": "0786",
            "poststed": "Oslo"
        }
    },
    {
        "kundenummer": "18010197461",
        "navn": {
            "etternavn": "Hansen",
            "fornavn": "Leona",
            "mellomnavn": null
        },
        "kontaktinformasjon": {
            "epostadresse": "LeonaHansen@dayrep.com",
            "mobiltelefonnummer": "41109815",
            "nettsted": null,
            "sip": null,
            "telefonnummer": null
        },
        "postadresse": {
            "adresselinje": [
                "Scheitlies gate 48"
            ],
            "postnummer": "3045",
            "poststed": "Drammen"
        }
    },
    {
        "kundenummer": "11010159115",
        "navn": {
            "etternavn": "Hofseth",
            "fornavn": "Gustav",
            "mellomnavn": null
        },
        "kontaktinformasjon": {
            "epostadresse": "GustavHofseth@rhyta.com",
            "mobiltelefonnummer": "94259236",
            "nettsted": null,
            "sip": null,
            "telefonnummer": null
        },
        "postadresse": {
            "adresselinje": [
                "Kikkutveien 91"
            ],
            "postnummer": "0491",
            "poststed": "Oslo"
        }
    },
    {
        "kundenummer": "12345678909",
        "navn": {
            "etternavn": "Kjell Kåre",
            "fornavn": "Kveiteland",
            "mellomnavn": null
        },
        "kontaktinformasjon": {
            "epostadresse": "Kjellkå@hotmail.com",
            "mobiltelefonnummer": "12345678",
            "nettsted": null,
            "sip": null,
            "telefonnummer": null
        },
        "postadresse": {
            "adresselinje": [
                "Skole vei 207"
            ],
            "postnummer": "4260",
            "poststed": "Torvastad"
        }
    }
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
