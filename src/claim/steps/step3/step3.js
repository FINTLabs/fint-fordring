import React, { Component } from 'react';
import ProductOverview from "./resultOverview/ProductOverview"
import PersonOverview from "./resultOverview/PersonOverview"



class Step3 extends Component {

    render() {

        return (
            <div>
                <h1>Valgte Produkter</h1>
                <ProductOverview selectedProductData={this.props.selectedProductData}/>
                {//På bunn av denne tabellen kan en ha sum av produktpris; pris per elev
                }
                <h1>Valgte Personer</h1>
                <PersonOverview orderedBySelection={this.props.orderedBySelection}/>
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