import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from "./steps/recipient/recipients";
import Step2 from "./steps/order/orders";
import Step3 from "./steps/send/send";

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: '65px',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Velg mottakere', 'Velg varer', 'Send'];
}

//testdata
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
const testDataProduct = [
    {
        "id": "1",
        "productName": "A",
        "model": "B",
        "producer": "C",
        "price": "12999",
        "selected": false
    },
    {
        "id": "2",
        "productName": "H",
        "model": "G",
        "producer": "Eple",
        "price": "1229999",
        "selected": false
    },
    {
        "id": "3",
        "productName": "Liten støsuger",
        "model": "Iis",
        "producer": "Apple",
        "price": "29999",
        "selected": false
    },
    {
        "id": "4",
        "productName": "Ostsuger",
        "model": "Succer5000",
        "producer": "Opple",
        "price": "319999",
        "selected": false
    },
    {
        "id": "5",
        "productName": "B",
        "model": "Ucer5000",
        "producer": "Ppple",
        "price": "30000.000001",
        "selected": false
    },
];

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
let initialPersonSelectedState = {};
testDataPerson.forEach(person => {
    initialPersonSelectedState[person["kundenummer"]] = false;
    person["klassenavn"] = basisGruppeKundenummer[person["kundenummer"]];
});
let initialProductSelectedState = {};
testDataProduct.forEach(product => {
    initialProductSelectedState[product["id"]] = false;
});

class Claim extends Component {

    constructor() {
        super();
        this.state = {
            activeStep: 0,
            //states for personer
            selectedPersonList: JSON.parse(JSON.stringify(initialPersonSelectedState)), //{"393073":true, "234733":false etc.}
            personOrderedBySelection: [], //bare personer som er valgt, i rekkefølgen de er valgt
            //testdataperson+ gruppe

            //states for produkter
            selectedProductList: JSON.parse(JSON.stringify(initialProductSelectedState)),
            productOrderedBySelection: [], //bare produkter som er valgt, i rekkefølgen de er valgt
            //testdata
        };
    }
    
    addMethodPerson = (person) => {
        let updateList = this.state.selectedPersonList;
        updateList[person["kundenummer"]] = true;
        this.setState({ selectedPersonList: updateList });
        
        let updateOrderedList = this.state.personOrderedBySelection;
        updateOrderedList.push(person);
        this.setState({ personOrderedBySelection: updateOrderedList });
    }

    removeMethodPerson = (person) => {
        let updateList = this.state.selectedPersonList;
        updateList[person["kundenummer"]] = false;
        this.setState({ selectedPersonList: updateList });

        let updateOrderedList = this.state.personOrderedBySelection;
        for (let i = 0; i < updateOrderedList.length; i++) {
            if (JSON.stringify(updateOrderedList[i]) === JSON.stringify(person)) {
                updateOrderedList.splice(i, 1);
            }
        }
        this.setState({ personOrderedBySelection: updateOrderedList });
    };

    addAllPerson = (group) => {
        let allIsSelected = false;
        let updateList = this.state.selectedPersonList;
        let updateOrderedList = this.state.personOrderedBySelection;
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
                updateList[group.kundeliste[i]["kundenummer"]] = false;
                for (let j = 0; j < updateOrderedList.length; j++) {
                    if (JSON.stringify(updateOrderedList[j]) === JSON.stringify(group.kundeliste[i])) {
                        updateOrderedList.splice(j, 1);
                    }
                }
            }
        }
        this.setState({ selectedPersonList: updateList });
        this.setState({ personOrderedBySelection: updateOrderedList });
    }

    addMethodProduct = (product) => {
        let updateList = this.state.selectedProductList;
        updateList[product["id"]] = true;
        this.setState({ selectedProductList: updateList });

        let updateOrderedList = this.state.productOrderedBySelection;
        updateOrderedList.push(product);
        this.setState({ productOrderedBySelection: updateOrderedList });
    }

    removeMethodProduct = (product) => {
        let updateList = this.state.selectedProductList;
        updateList[product["id"]] = false;
        this.setState({ selectedProductList: updateList });

        let updateOrderedList = this.state.productOrderedBySelection;
        for (let i = 0; i < updateOrderedList.length; i++) {
            if (JSON.stringify(updateOrderedList[i]) === JSON.stringify(product)) {
                updateOrderedList.splice(i, 1);
            }
        }
        this.setState({ productOrderedBySelection: updateOrderedList });
    }

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });

    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Step1
                //data
                    orderedBySelection={this.state.personOrderedBySelection} 
                    selectedPersonList={this.state.selectedPersonList}
                    testDataGruppe={testDataGruppe}
                    testDataPerson={testDataPerson}
                //methods
                    addMethod={this.addMethodPerson}
                    removeMethod={this.removeMethodPerson}
                    addAll={this.addAllPerson}
                    />;
            case 1:
                return <Step2 
                //data
                orderedBySelection={this.state.productOrderedBySelection}
                selectedProductList={this.state.selectedProductList}
                testDataProduct={testDataProduct}
                //methods
                addMethod={this.addMethodProduct}
                removeMethod={this.removeMethodProduct}
                />;
            case 2:
                return <Step3 
                personOrderedBySelection={this.state.personOrderedBySelection}
                productOrderedBySelection={this.state.productOrderedBySelection}
                 />;
            default:
                return 'Uknown stepIndex';
        }
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} >
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                                {/*changed from "Typography tag to div tag to avoid warnings in console, not sure if it breaks something*/}
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                </Button>
                                    <Button variant="raised" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

Claim.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Claim);
