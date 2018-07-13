import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ProductOverview from "./resultOverview/ProductOverview";
import DropdownDager from "./DropdownDager";
import Paper from '@material-ui/core/Paper';
import { Divider } from "@material-ui/core";

import ChipSelectedPerson from "./ChipSelectedPerson";

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    paper: {
        width: '100%',
        height: 150,
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    shrinkSides: {
        margin: 2,
    },
    shrinkSides2: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '100%',
    },
    optionHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.3%',
    },
    rotate: {
        transform: "rotate(180deg)"
    },
    table: {
        minWidth: 521
    },
    actionButton: {
        height: "35px",
        width: "35px",
    },
    actionButtonIcon: {
        color: "#fff",
    },
    paddingClass: {
        padding: 10,
    }
});

class Step3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedPersonList: [],
        };
    }

    checkPricePerCustomer = (listOfProducts) => {
        let sum = 0;
        for (let i = 0; i < listOfProducts.length; i++) {
            sum += Number(listOfProducts[i]["pris"]) * this.props.selectedProductList[listOfProducts[i].kode];
        }
        return sum.toFixed(2);
    }

    render() {

        const { classes } = this.props;

        return (
            <Paper>
                <div className={classes.paddingClass}>Mottakere av faktura:</div>
                {this.props.personOrderedBySelection[0] ?
                    (<ChipSelectedPerson orderedBySelection={this.props.personOrderedBySelection} />) :
                    (<div className={classes.paddingClass}>Du har ikke valgt noen mottakere enda</div>)}
                <Divider />
                <div className={classes.paddingClass}>Produkter:</div>
                {(!this.props.productOrderedBySelection[0]) ? (<div className={classes.paddingClass}>Du har ikke valgt noen produkter enda</div>) : (
                    <ProductOverview
                        productOrderedBySelection={this.props.productOrderedBySelection}
                        selectedProductList={this.props.selectedProductList}
                        checkPricePerCustomer={this.checkPricePerCustomer}
                        mvaCodes={this.props.mvaCodes}
                        />
                )}
                <DropdownDager 
                getSelectedDate={this.props.getSelectedDate} 
                selectedDate={this.props.selectedDate}
                dates={this.props.dates}/>
            </Paper>
        );
    }
}

export default withStyles(styles)(Step3);