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
        filteredProductArr = this.props.testDataProduct.filter(e => e.navn.toLowerCase().indexOf(val) !== -1);
        this.setState({ searchFilter: filteredProductArr });
    }

    resolve = (obj, path) => {
        path = path.split('.');
        var current = obj;
        while(path.length) {
            if(typeof current !== 'object') return undefined;
            current = current[path.shift()];
        }
        return current;
    }

    sortMethod = (array, order, sortKeyArray, isNumber) => {
        if (isNumber) {
            function compare(a, b) {
                if (Number(a[sortKeyArray]) < Number(b[sortKeyArray])) {
                    return -1 * order; //order is either -1 or 1
                }
                if (Number(a[sortKeyArray]) > Number(b[sortKeyArray])) {
                    return 1 * order; //order is either -1 or 1
                }
                return 0;
            }
            this.setState({ products: array.sort(compare) });
        } else {
            function compare(a, b){
                if (sortKeyArray.map(f => this.resolve(a, f)).join(" ") < sortKeyArray.map(f => this.resolve(b, f)).join(" ")) {
                    return -1 * order; //order is either -1 or 1
                }
                if (sortKeyArray.map(f => this.resolve(a, f)).join(" ") > sortKeyArray.map(f => this.resolve(b, f)).join(" ")) {
                    return 1 * order; //order is either -1 or 1
                }
                return 0;
            }
            this.setState({ products: array.sort(compare.bind(this)) });
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
                        selectedProductList={this.props.selectedProductList}
                        removeMethod={this.props.removeMethod} />
                ) : (<div />)}
                <SearchResultProduct
                    getInputAmountProduct={this.props.getInputAmountProduct}
                    setInputAmountProductToNumber={this.props.setInputAmountProductToNumber}
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