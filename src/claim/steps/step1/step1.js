import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./SelectedPerson";
import SearchResultGroup from "./search/SearchResultGroup";


const styles = theme => ({});
//antar at denne er basisgruppe
const testDataGruppe = [
    {
        "navn": "3REA2",
        "beskrivelse": "Matte!",
        "id": "4",
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
            },
            {
                "kundenummer": "14029923273",
                "navn": {
                    "etternavn": "Støa",
                    "fornavn": "Rose",
                    "mellomnavn": "mellom"
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
        "navn": "1STA",
        "beskrivelse": "1. trinn Studiespesialisering 2018-2019",
        "id": "1",
        "kundeliste": [
            {
                "kundenummer": "14029923273",
                "navn": {
                    "etternavn": "Støa",
                    "fornavn": "Rose",
                    "mellomnavn": "mellom"
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
        "id": "2",
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

]
const testBasisGruppe = [
    {
        "navn": "1STA",
        "beskrivelse": "1. trinn Studiespesialisering 2018-2019",
        "id": "1",
        "kundeliste": [
            {
                "kundenummer": "14029923273",
                "navn": {
                    "etternavn": "Støa",
                    "fornavn": "Rose",
                    "mellomnavn": "mellom"
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
        "id": "2",
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
]
const testDataPerson = [
    {
        "kundenummer": "14029923273",
        "navn": {
            "etternavn": "Støl",
            "fornavn": "Rose",
            "mellomnavn": "Kåre"
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
            "etternavn": "Støa",
            "fornavn": "Rose",
            "mellomnavn": "Kåre"
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
            "etternavn": "Støe",
            "fornavn": "Rose",
            "mellomnavn": "Kåre"
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

//wcag test

let basisGruppeKundenummer = {};
for (let i = 0; i < testBasisGruppe.length; i++) {
    for (let j = 0; j < testBasisGruppe[i]["kundeliste"].length; j++) {
        basisGruppeKundenummer[testBasisGruppe[i]["kundeliste"][j]["kundenummer"]] = testBasisGruppe[i]["navn"];
    }
}
for (let i = 0; i < testDataGruppe.length; i++) {
    for (let j = 0; j < testDataGruppe[i]["kundeliste"].length; j++) {
        testDataGruppe[i]["kundeliste"][j]["klassenavn"] = basisGruppeKundenummer[testDataGruppe[i]["kundeliste"][j]["kundenummer"]]
    }
}
let initialSelectedState = {};
testDataPerson.forEach(person => {
    initialSelectedState[person["kundenummer"]] = false;
    person["klassenavn"] = basisGruppeKundenummer[person["kundenummer"]];
});

//Dette bør kanskje ligge en annen plass enn constructor
//må nok bruke samme metode for å finne ut hvilke skoler elevene hører til

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPersonList: initialSelectedState,
            searchMethod: 0,
            searchFilter: testDataGruppe,
            sortedPersonList: []
        };
        console.log(basisGruppeKundenummer);
        console.log(testDataGruppe);
        this.props.getCheckoutDataStep1("hei");
    }

    addToSelection = (person) => {
        let updateList = this.state.selectedPersonList;
        updateList[person["kundenummer"]] = true;
        this.setState({ selectedPersonList: updateList });
    }

    removeFromSelection = (person) => {
        let updateList = this.state.selectedPersonList;
        updateList[person["kundenummer"]] = false;
        this.setState({ selectedPersonList: updateList });
    };

    addAll = (group) => {
        let allIsSelected = false;
        let updateState = this.state.selectedPersonList;
        for (let i = 0; i < group.kundeliste.length; i++) {
            if (!updateState[group.kundeliste[i]["kundenummer"]]) {
                allIsSelected = true;
            }
        }
        if (allIsSelected) {
            for (let i = 0; i < group.kundeliste.length; i++) {
                if (updateState[group.kundeliste[i]["kundenummer"]]) {
                }
                updateState[group.kundeliste[i]["kundenummer"]] = true;
            }
        } else {
            for (let i = 0; i < group.kundeliste.length; i++) {
                if (updateState[group.kundeliste[i]["kundenummer"]]) {
                }
                updateState[group.kundeliste[i]["kundenummer"]] = false;
            }
        }
        this.setState({ selectedPersonList: updateState });
    }

    checkIfAllAreSelected = (group) => {
        let allIsSelected = false;
        for (let i = 0; i < group.kundeliste.length; i++) {
            if (!this.state.selectedPersonList[group.kundeliste[i]["kundenummer"]]) {
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
            filteredGroupArr = testDataGruppe.filter(e => e.navn.toLowerCase().indexOf(val) !== -1);
        } else {
            filteredGroupArr = testDataPerson.filter(e =>
                (e.navn.fornavn + " " +
                    ((e.navn.mellomnavn) ? (e.navn.mellomnavn + " ") : ("")) +
                    e.navn.etternavn).toLowerCase().indexOf(val) !== -1
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
                <SelectedPerson
                    selectedPersonList={this.state.selectedPersonList}
                    testDataPerson={testDataPerson}
                    removeMethod={this.removeFromSelection} />
                {this.state.searchMethod === 0 ? (
                    <SearchResultGroup
                        selectedPersonList={this.state.selectedPersonList}
                        testDataGruppe={testDataGruppe}

                        sortMethod={this.sortMethod}
                        addMethod={this.addToSelection}
                        removeMethod={this.removeFromSelection}
                        addAll={this.addAll}
                        checkIfAllAreSelected={this.checkIfAllAreSelected}
                        searchFilter={this.state.searchFilter} />
                ) : (
                        <SearchResultPerson
                            selectedPersonList={this.state.selectedPersonList}
                            testDataPerson={testDataPerson}

                            sortedPersonList={this.state.sortedPersonList}
                            sortMethod={this.sortMethod}
                            addMethod={this.addToSelection}
                            removeMethod={this.removeFromSelection}
                            searchFilter={this.state.searchFilter} />
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
