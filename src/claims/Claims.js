import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClaimTabs from './claimTabs/ClaimTabs';

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


let testDataFordring = [
    {
        "kundenummer": "12345678909",
        "fakturanummer" : "4",
        "organisasjonnummer" : "1203951",
        "kundenavn": {
            "fornavn" : "Ole",
            "mellomnavn" : "Olaf",
            "etternavn" : "Oteke"
        },
        "postadresse": {
            "adresselinje": [
                "Skole vei 207"
            ],
            "postnummer": "4260",
            "poststed": "Torvastad"
        },
        "kontaktinformasjon": {
            "epostadresse": "Kjellkå@hotmail.com",
            "mobiltelefonnummer": "12345678",
            "nettsted": null,
            "sip": null,
            "telefonnummer": null
        },
        "fakturadato" : "Fri Jun 22 2018 10:08:02 GMT+0200 (sentraleuropeisk sommertid)",
        "forfallsdato" : "Fri Jul 22 2018 10:08:02 GMT+0200 (sentraleuropeisk sommertid)",
        "vareliste":[
            {
                "id": "1",
                "productName": "A",
                "model": "B",
                "producer": "C",
                "price": "12999",
                "selected": false
            }
        ],
        "totalsum":"12999" ,
        "betalt":"5999" ,
        "status":"delbetalt" ,
        "ferdigbetal" : false,
    },
    {},
    {}
]
class Claims extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}><ClaimTabs/></div>
        )
    };
}

Claims.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Claims);