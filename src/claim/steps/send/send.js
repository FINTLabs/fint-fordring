import React, { Component } from 'react';
import ProductOverview from "./resultOverview/ProductOverview"
import PersonOverview from "./resultOverview/PersonOverview"



class Step3 extends Component {

    render() {

        return (
            <div>
                <h2>{(this.props.productOrderedBySelection[0])?("Valgte produkter"):("Du har ikke valgt noen produkter enda.")}</h2>
                <ProductOverview productOrderedBySelection={this.props.productOrderedBySelection}/>
                {//På bunn av denne tabellen kan en ha sum av produktpris; pris per elev
                }
                <h2>{(this.props.personOrderedBySelection[0])?("Valgte Personer"):("Du har ikke valgt noen personer enda.")}</h2>
                <PersonOverview personOrderedBySelection={this.props.personOrderedBySelection}/>
                {/*Gruppering etter klasse?
                Hvis det kan det på hver klasse vise oversikt over hvor mange av totalt som er valgt, for eksempel:
                3STB: 26/28
                3STF: 1/27

                */
                }
            </div>
        );
    }
}

export default Step3;