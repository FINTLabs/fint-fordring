import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchBox from "./search/SearchBox"
import SearchResultProduct from './search/SearchResultProduct';
import SelectedProduct from './SelectedProduct';

const styles = theme => ({});

class Step2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchFilter: this.props.testDataProduct,
        };
    }

    getSearchInput = (val) => {
        let filteredProductArr = [];
        filteredProductArr = this.state.products.filter(e => e.productName.toLowerCase().indexOf(val) !== -1);
        this.setState({ searchFilter: filteredProductArr });
    }

    sortMethod = (array, order, sortByValue, isNumber) => {
        if (isNumber) {
            function compare(a, b) {
                if (eval("Number(a." + sortByValue + ")<Number(b." + sortByValue + ")")) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("Number(a." + sortByValue + ")>Number(b." + sortByValue + ")")) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ products: array.sort(compare) });
        } else {
            function compare(a, b) {
                if (eval("a." + sortByValue + "<b." + sortByValue)) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("a." + sortByValue + ">b." + sortByValue)) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ products: array.sort(compare) });
        }
    }

    checkIfNoneAreSelected = (obj) => {
        for (let o in obj) {
            if (obj[o]) return true;
        }
        return false;
    }

    render() {

        return (
            <div>
                <SearchBox
                    placeHolder="Søk etter varer"
                    getSearchInput={this.getSearchInput} />
                {this.checkIfNoneAreSelected(this.props.selectedProductList) ? (
                    <SelectedProduct
                        orderedBySelection={this.props.orderedBySelection}
                        removeMethod={this.props.removeMethod} />
                ) : (<div />)}
                <SearchResultProduct
                    addMethod={this.props.addMethod}
                    testDataProduct={this.props.testDataProduct}
                    selectedProductList={this.props.selectedProductList}
                    removeMethod={this.props.removeMethod}
                    searchFilter={this.state.searchFilter}
                    sortMethod={this.sortMethod}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Step2);