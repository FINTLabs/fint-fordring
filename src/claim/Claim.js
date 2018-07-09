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
import Snackbar from '@material-ui/core/Snackbar';
import { Prompt } from "react-router-dom";
import CustomerApi from '../api/CustomerApi';
import OrderLineApi from '../api/OrderLineApi';
import PaymentApi from '../api/PaymentApi';
import EmployerApi from '../api/EmployerApi';
import GroupApi from '../api/GroupApi';
import MvaApi from '../api/MvaApi';
import DateApi from '../api/DateApi';
import LoadingProgress from '../common/LoadingProgress';
import Overview from './steps/overview/Overview';

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: '65px',
        minWidth: 350
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
            },
            {
                "kundenummer": "12345678902",
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
                "kundenummer": "14829923273",
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
                "kundenummer": "18014197461",
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
                "kundenummer": "11012759115",
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

];
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
            },
            {
                "kundenummer": "12345978909",
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
                "kundenummer": "14029923279",
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
                "kundenummer": "18010197465",
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
                "kundenummer": "11010159116",
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
            },
            {
                "kundenummer": "12345678902",
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
                "kundenummer": "14829923273",
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
                "kundenummer": "18014197461",
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
                "kundenummer": "11012759115",
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

        ]
    },
    {
        "navn": "2STG",
        "beskrivelse": "3. trinn Studiespesialisering 2018-2019",
        "id": "3",
        "kundeliste": [
            {
                "kundenummer": "12345678902",
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
                "kundenummer": "14829923273",
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
                "kundenummer": "18014197461",
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
                "kundenummer": "11012759115",
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
        ]
    }
];
/*
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
    },
    {
        "kundenummer": "12345978909",
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
        "kundenummer": "14029923279",
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
        "kundenummer": "18010197465",
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
        "kundenummer": "11010159116",
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
        "kundenummer": "12345678902",
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
        "kundenummer": "14829923273",
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
        "kundenummer": "18014197461",
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
        "kundenummer": "11012759115",
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
        "kundenummer": "13345678909",
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
        "kundenummer": "14329923273",
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
        "kundenummer": "18010197471",
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
        "kundenummer": "11017159115",
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
        "kundenummer": "12347678909",
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
        "kundenummer": "13029923273",
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
        "kundenummer": "18030197461",
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
        "kundenummer": "11010559115",
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
];
*/

/*CustomerApi.fetchCustomers("test.no").then(customerList => {
    testDataPerson = customerList
}).then(() => {
    testDataPerson.forEach(person => {
        initialPersonSelectedState[person["kundenummer"]] = false;
        person["klassenavn"] = basisGruppeKundenummer[person["kundenummer"]];
    });
});*/

/*
const testDataProduct = [
    {
        "id": "1",
        "productName": "Stol",
        "model": "Extreme comfort 2000",
        "producer": "Norge",
        "price": "12999"
    },
    {
        "id": "2",
        "productName": "Kinderegg",
        "model": "Kinder suprise",
        "producer": "Kinder peoples",
        "price": "1229999"
    },
    {
        "id": "3",
        "productName": "Nutella",
        "model": "Nutella spray",
        "producer": "Nutella companies",
        "price": "29999"
    },
    {
        "id": "4",
        "productName": "Ostsuger",
        "model": "Succer5000",
        "producer": "Opple",
        "price": "319999"
    },
    {
        "id": "5",
        "productName": "B",
        "model": "Ucer5000",
        "producer": "Ppple",
        "price": "30000.000001"
    },
];*/

/*OrderLineApi.fetchOrderLines(orgId).then(orderLineList => {
    testDataProduct = orderLineList
}).then(() => {
    testDataProduct.forEach(product => {
        initialProductSelectedState[product["kode"]] = 0;
    });
});*/

//wcag test


/*
for (let i = 0; i < testBasisGruppe.length; i++) {
    for (let j = 0; j < testBasisGruppe[i]["kundeliste"].length; j++) {
        basisGruppeKundenummer[testBasisGruppe[i]["kundeliste"][j]["kundenummer"]] = testBasisGruppe[i]["navn"];
    }
}*/
/*
for (let i = 0; i < testDataGruppe.length; i++) {
    for (let j = 0; j < testDataGruppe[i]["kundeliste"].length; j++) {
        testDataGruppe[i]["kundeliste"][j]["klassenavn"] = basisGruppeKundenummer[testDataGruppe[i]["kundeliste"][j]["kundenummer"]]
    }
}*/

let orgId = "fake.no";

//is needed to initialize data on reset
let initialPersonSelectedState = {};
let initialProductSelectedState = {};

class Claim extends Component {

    constructor() {
        super();
        this.state = {
            activeStep: 0,
            //states for personer
            selectedPersonList: {}, //{"393073":true, "234733":false etc.}
            personOrderedBySelection: [], //bare personer som er valgt, i rekkefølgen de er valgt
            //testdataperson+ gruppe

            //states for produkter
            selectedProductList: {},
            productOrderedBySelection: [], //bare produkter som er valgt, i rekkefølgen de er valgt
            //testdata

            //selected date index for dates
            dateIndex: 1,

            lastSentClaim: [],

            //fetch data test
            customerList: [],
            productList: [],
            basicGroupList: [],//basisgruppe
            contactGroupList: [],//kontaklarergruppe
            teachingGroupList: [],//undervisningsgruppe
            allGroupsList: [],//alle grupper
            mvaCodes: [],
            employers: [],
            dates: [],

            //needed for snackbar message
            open: false,
            vertical: null,
            horizontal: null,

            //data from backend
            customers: [],

            fetchedValueIsUndefined: false,
        };
    }

    componentDidMount() {
        OrderLineApi.fetchOrderLines(orgId).then(data => {
            console.log(data, "ol");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ productList: data });
        }).then(() => {
            console.log(this.state.productList);
            this.state.productList.forEach(product => {
                initialProductSelectedState[product["kode"]] = 0;
            });
            this.setState({ selectedProductList: JSON.parse(JSON.stringify(initialProductSelectedState)) });
        });
        MvaApi.fetchMvaCodes(orgId).then(data => {
            console.log(data, "mva");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ mvaCodes: data })
        });
        DateApi.fetchDates(orgId).then(data => {
            console.log(data, "dates");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ dates: data })
        });
        EmployerApi.fetchEmployers(orgId).then(data => {
            console.log(data, "employer");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ employers: data })
        });
        GroupApi.fetchCustomerGroupsFromKontaktlarergruppe(orgId).then(data => {
            console.log(data, "kontakt");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ contactGroupList: data })
        });
        GroupApi.fetchCustomerGroupsFromUndervisningsgruppe(orgId).then(data => {
            console.log(data, "undervisning");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ teachingGroupList: data })
        });
        GroupApi.fetchCustomerGroupsFromBasisgruppe(orgId).then(data => {
            console.log(data, "basis");
            if (data === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ basicGroupList: data })
        }).then(() => {
            let basisGruppeKundenummer = {};
            for (let i = 0; i < this.state.basicGroupList.length; i++) {
                for (let j = 0; j < this.state.basicGroupList[i]["kundeliste"].length; j++) {
                    basisGruppeKundenummer[this.state.basicGroupList[i]["kundeliste"][j]["kundenummer"]] = this.state.basicGroupList[i]["navn"];
                }
            };
            CustomerApi.fetchCustomers(orgId).then(data => {
                console.log(data, "cl");
                if (data === undefined) {
                    return;
                }
                this.setState({ customerList: data })
            }).then(() => {
                this.state.customerList.forEach(person => {
                    initialPersonSelectedState[person["kundenummer"]] = false;
                    person["klassenavn"] = basisGruppeKundenummer[person["kundenummer"]];
                });
                this.setState({ selectedPersonList: JSON.parse(JSON.stringify(initialPersonSelectedState)) });
            });
            GroupApi.fetchAllCustomerGroups(orgId).then(data => {
                console.log(data, "alle");
                if (data === undefined) {
                    return;
                }
                this.setState({ allGroupsList: data })
            }).then(() => {
                for (let i = 0; i < this.state.allGroupsList.length; i++) {
                    for (let j = 0; j < this.state.allGroupsList[i]["kundeliste"].length; j++) {
                        this.state.allGroupsList[i]["kundeliste"][j]["klassenavn"] = basisGruppeKundenummer[this.state.allGroupsList[i]["kundeliste"][j]["kundenummer"]]
                    }
                }
            });
        });
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
        let list = (group.kundeliste) ? (group.kundeliste) : (group);
        for (let i = 0; i < list.length; i++) {
            if (!updateList[list[i]["kundenummer"]]) {
                allIsSelected = true;
                updateOrderedList.push(list[i]);
            }
        }
        if (allIsSelected) {
            for (let i = 0; i < list.length; i++) {
                updateList[list[i]["kundenummer"]] = true;
            }
        } else {
            for (let i = 0; i < list.length; i++) {
                updateList[list[i]["kundenummer"]] = false;
                for (let j = 0; j < updateOrderedList.length; j++) {
                    if (JSON.stringify(updateOrderedList[j]) === JSON.stringify(list[i])) {
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
        updateList[product["kode"]] = 1;
        this.setState({ selectedProductList: updateList });

        let updateOrderedList = this.state.productOrderedBySelection;
        updateOrderedList.push(product);
        this.setState({ productOrderedBySelection: updateOrderedList });
    }

    removeMethodProduct = (product) => {
        let updateList = this.state.selectedProductList;
        updateList[product["kode"]] = 0;
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

    handleClose = () => {
        this.setState({ open: false });
    };

    handleFinish = state => () => {
        this.setState({ open: true, ...state });
        this.handleNext();
        this.sendClaim();
        //reinitialize state as it is to begin with
        this.setState({
            selectedPersonList: JSON.parse(JSON.stringify(initialPersonSelectedState)),
            personOrderedBySelection: [],
            selectedProductList: JSON.parse(JSON.stringify(initialProductSelectedState)),
            productOrderedBySelection: [],
            lastSentClaim: [],
        });
    };

    handleCloseSnack = () => {
        this.setState({ open: false });
    }

    sendClaim = () => {
        let employer = this.state.employers[0];
        let mva = this.state.mvaCodes[0];
        let timeFrameDueDate = this.state.dates[this.state.dateIndex];

        console.log(orgId,
            this.state.personOrderedBySelection,
            this.state.productOrderedBySelection,
            mva,
            employer,
            timeFrameDueDate);

        PaymentApi.setPayment(
            orgId,
            this.state.personOrderedBySelection,
            this.state.productOrderedBySelection,
            mva,
            employer,
            timeFrameDueDate
        ).then(e => {
            this.setState({ lastSentClaim: e });
            console.log(e);
        });
    }

    getInputAmountProduct = (product, targetValue) => {
        let updateList = this.state.selectedProductList;
        updateList[product.kode] = targetValue;
        if (targetValue <= 0 && targetValue !== "") {
            this.removeMethodProduct(product);
        }
        this.setState({ selectedProductList: updateList });
    }

    setInputAmountProductToNumber = (product) => {
        let updateList = this.state.selectedProductList;
        if (updateList[product.kode] === "") {
            this.removeMethodProduct(product);
        }
        updateList[product.kode] = Number(updateList[product.kode]);
        this.setState({ selectedProductList: updateList });
    }

    getDateIndex = (index) => {
        this.setState({ dateIndex: index });
    }

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Step1
                    //data
                    orderedBySelection={this.state.personOrderedBySelection}
                    selectedPersonList={this.state.selectedPersonList}
                    testDataGruppe={this.state.allGroupsList}
                    testDataPerson={this.state.customerList}
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
                    testDataProduct={this.state.productList}
                    //methods
                    getInputAmountProduct={this.getInputAmountProduct}
                    setInputAmountProductToNumber={this.setInputAmountProductToNumber}
                    addMethod={this.addMethodProduct}
                    removeMethod={this.removeMethodProduct}
                />;
            case 2:
                return <Step3
                    testDataPerson={this.state.customerList}
                    testDataGruppe={this.state.allGroupsList}
                    selectedPersonList={this.state.selectedPersonList}
                    selectedProductList={this.state.selectedProductList}
                    personOrderedBySelection={this.state.personOrderedBySelection}
                    productOrderedBySelection={this.state.productOrderedBySelection}
                    dates={this.state.dates}
                    getDateIndex={this.getDateIndex}
                />;
            default:
                return 'Uknown stepIndex';
        }
    }

    renderErrorMessage() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>Sum Ting Wong, Try again later</div>
        )
    }

    renderPosts() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { vertical, horizontal, open } = this.state;
        return (
            <div className={classes.root}>
                <Prompt
                    when={this.state.personOrderedBySelection[0] !== undefined || this.state.productOrderedBySelection[0] !== undefined}
                    message={location =>
                        location.pathname !== this.props.location.pathname ? ("Hvis du forlater denne siden vil alle usendte endringer slettes") : (true)
                    }
                />
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
                        (this.state.lastSentClaim.length !== 0) ? (
                             <div>
                                 <Overview lastSentClaim={this.state.lastSentClaim} />
                                   <Button onClick={this.handleReset}>Start på nytt</Button>
                                 <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={this.handleCloseSnack}
                                    ContentProps={{
                                    'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id">Fakturaene er sendt</span>}
                                />
                                </div>
                         ) : (
            <LoadingProgress />)
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
                                Tilbake
                                </Button>
                            {activeStep === steps.length - 1 ? (
                                <Button disabled={!(this.state.personOrderedBySelection.length > 0 && this.state.productOrderedBySelection.length > 0)} variant="raised" color="primary" onClick={this.handleFinish({ vertical: 'bottom', horizontal: 'right' })}>
                                    Send
                                        </Button>) : (
                                    <Button variant="raised" color="primary" onClick={this.handleNext}>
                                        Neste
                                    </Button>)}
                            {/*<Button variant="raised" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>*/}

                        </div>
                    </div>
                    )}
                </div>
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { vertical, horizontal, open } = this.state;

        if (this.state.fetchedValueIsUndefined) {
            return (this.renderErrorMessage());
        }
        if (this.state.productList.length > 0 && this.state.customerList.length > 0) {
            return (this.renderPosts());
        } else {
            return (<LoadingProgress />);
        }

    }
}

Claim.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Claim);
