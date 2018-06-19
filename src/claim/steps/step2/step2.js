import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchBox from "./search/SearchBox"
import SearchResultProduct from './search/SearchResultProduct';
import SelectedProduct from './SelectedProduct';

const styles = theme => ({});

const testDataProduct = [
    {
        "id": "1",
        "productName" : "Støvsuger",
        "model" : "ISuccer5000",
        "producer" : "Apple",
        "price" : "19999",
        "selected" : false
    },
    {
        "id": "2",
        "productName" : "scftvygbutøvsuger",
        "model" : "ISuccer5000",
        "producer" : "Apple",
        "price" : "19999",
        "selected" : false
    },
    {
        "id": "3",
        "productName" : "støvsuger",
        "model" : "ISuccer5000",
        "producer" : "Apple",
        "price" : "19999",
        "selected" : false
    },
    {
        "id": "4",
        "productName" : "støvsuger",
        "model" : "ISuccer5000",
        "producer" : "Apple",
        "price" : "19999",
        "selected" : false
    },
    {
        "id": "5",
        "productName" : "støvsuger",
        "model" : "ISuccer5000",
        "producer" : "Apple",
        "price" : "19999",
        "selected" : false
    },
];

class Step2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: testDataProduct,
            searchFilter: testDataProduct
        };
    }

    addMethod = (product) => {
        let updateState = this.state.products;
        updateState[updateState.indexOf(product)]["selected"] = true;
        this.setState({ products: updateState });
    }

    removeMethod = (product) => {
        let updateState = this.state.products;
        updateState[updateState.indexOf(product)]["selected"] = false;
        this.setState({ products: updateState });
    };

    getSearchInput = (val) => {
        let filteredProductArr = [];
            filteredProductArr = this.state.products.filter(e => e.productName.toLowerCase().indexOf(val) !== -1);
        this.setState({ searchFilter: filteredProductArr });
    }

    sortTable = (array,order,sortByValue) => {
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <SearchBox 
                    placeHolder="Søk etter varer"
                    getSearchInput={this.getSearchInput} />
                <SearchResultProduct
                    addMethod={this.addMethod}
                    listProduct={this.state.products}
                    removeMethod={this.removeMethod}
                    searchFilter={this.state.searchFilter} />
                <SelectedProduct
                    listProduct={this.state.products}
                    removeMethod={this.removeMethod} />
            </div>
        );
    }
}

export default withStyles(styles)(Step2);