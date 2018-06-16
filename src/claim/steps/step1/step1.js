import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./search/SelectedPerson"


const styles = theme => ({});

const testData = [
    {
        "id": "1",
        "firstName": "Kjell Kari",
        "lastName": "Svendsen",
        "school": "Bryne videregåande skule",
        "mainGroup": "1STA",
        "selected": false
    },
    {
        "id": "2",
        "firstName": "Banjo",
        "lastName": "Kari",
        "school": "Bryne videregåande skule",
        "mainGroup": "1STA",
        "selected": false
    },
    {
        "id": "3",
        "firstName": "Kåre Svein",
        "lastName": "Håland",
        "school": "Bryne videregåande skule",
        "mainGroup": "1STA",
        "selected": false
    },
    {
        "id": "4",
        "firstName": "Harry Jan",
        "lastName": "Varhaug",
        "school": "Bryne videregåande skule",
        "mainGroup": "1STA",
        "selected": false
    },
    {
        "id": "5",
        "firstName": "Berit Anne",
        "lastName": "Vigrestad",
        "school": "Bryne videregåande skule",
        "mainGroup": "1STA",
        "selected": false
    }
];

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {personer: []};
    }

    getData = (val) => {
        let old = this.state.personer;
        old.push(val);
        this.setState({personer: old});
        console.log(this.state); 
    }

    handleDelete = (data) => {
        const chipData = [...this.state.personer];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({ personer:chipData });
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <SearchTabs />
                <SearchResultPerson sendData={this.getData} listSelectedPerson={this.state.personer} testData={testData}/>
                <SelectedPerson listSelectedPerson={this.state.personer} sendChips={this.handleDelete}/>
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
