import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchBox from "./search/SearchBox"
import SearchResultProduct from './search/SearchResultProduct';
import SelectedProduct from './SelectedProduct';

const styles = theme => ({});

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

    sortMethod = (array, order, sortByValue, isNumber) => {
        if(isNumber) {
            function compare(a, b) {
                if (eval("Number(a." + sortByValue + ")<" + "Number(b." + sortByValue + ")")) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("Number(a." + sortByValue + ")>" + "Number(b." + sortByValue + ")")) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ products: array.sort(compare) });
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
            this.setState({ products: array.sort(compare) });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <SearchBox
                    placeHolder="Søk etter varer"
                    getSearchInput={this.getSearchInput} />
                <SelectedProduct
                    listProduct={this.state.products}
                    removeMethod={this.removeMethod} />
                <SearchResultProduct
                    addMethod={this.addMethod}
                    listProduct={this.state.products}
                    removeMethod={this.removeMethod}
                    searchFilter={this.state.searchFilter}
                    sortMethod={this.sortMethod}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Step2);