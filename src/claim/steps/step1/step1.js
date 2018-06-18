import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SearchTabs from "./search/SearchTabs";
import SearchResultPerson from "./search/SearchResultPerson";
import SelectedPerson from "./search/SelectedPerson";
import SearchResultGroup from "./search/SearchResultGroup";


const styles = theme => ({});
const testDataGruppe = [
    {
        "id": "1",
        "mainGroup": "1STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "1",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
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
        ]
    },
    {
        "id": "2",
        "mainGroup": "2STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "6",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "7",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "8",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "9",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "10",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "3",
        "mainGroup": "3STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "11",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "12",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "13",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "14",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "15",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "4",
        "mainGroup": "4STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "16",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "17",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "18",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "19",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "20",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
    {
        "id": "5",
        "mainGroup": "5STA",
        "school": "Bryne videregåande skule",
        "showMembers": false,
        "members": [
            {
                "id": "21",
                "firstName": "Kjell Kari",
                "lastName": "Svendsen",
                "school": "Bryne videregåande skule",
                "mainGroup": "2STA",
                "selected": false
            },
            {
                "id": "22",
                "firstName": "Banjo",
                "lastName": "Kari",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "23",
                "firstName": "Kåre Svein",
                "lastName": "Håland",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "24",
                "firstName": "Harry Jan",
                "lastName": "Varhaug",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            },
            {
                "id": "25",
                "firstName": "Berit Anne",
                "lastName": "Vigrestad",
                "school": "Bryne videregåande skule",
                "mainGroup": "1STA",
                "selected": false
            }
        ]
    },
];

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: testDataGruppe,
            searchMethod: 0
        };
    }

    addToSelection = (group,person) => {
        let updateState = this.state.groups;
        let groupIndex = updateState.indexOf(group);
        let personIndex = updateState[groupIndex].members.indexOf(person);
        updateState[groupIndex].members[personIndex]["selected"] = true;
        this.setState({ groups: updateState });
        console.log(this.state);
    }

    removeFromSelection = (group,person) => {
        let updateState = this.state.groups;
        let groupIndex = updateState.indexOf(group);
        let personIndex = updateState[groupIndex].members.indexOf(person);
        updateState[groupIndex].members[personIndex]["selected"] = false;
        this.setState({ groups: updateState });
        console.log(this.state);
    };

    getSearchMethod = (val) => {
        console.log(val);
        this.setState({ searchMethod: val });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <SearchTabs getSearchMethod={this.getSearchMethod} />
                {this.state.searchMethod === 0 ? (
                    <SearchResultGroup listGroup={this.state.groups} addMethod={this.addToSelection} removeMethod={this.removeFromSelection}/>
                ) : (
                    <SearchResultPerson addMethod={this.addToSelection} listGroup={this.state.groups} removeMethod={this.removeFromSelection} />
                    )}
                <SelectedPerson listGroup={this.state.groups} removeMethod={this.removeFromSelection} />
            </div>
        );
    }
}

export default withStyles(styles)(Step1);
