import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { Search } from '@material-ui/icons';


const styles = theme => ({
    searchContainer: {
        padding: theme.spacing.unit * 2,
    },
    searchInput: {
        margin: theme.spacing.unit,
        width: '50%',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SearchBox extends Component {

    constructor() {
        super();
        this.state = {
            search: ""
        };
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value }, () => {
            if (this.state.search === "") {
                this.props.getSearchInput(this.state.search.toLowerCase(), this.props.listOfClaims, this.props.selectedTab);
            }
        });
    }

    render() {
        const { classes, placeHolder } = this.props;
        return (

            <div className={classes.root}>
                <div className={classes.searchContainer}>
                    <Input
                        onChange={this.updateSearch}
                        onKeyDown={(e) => e.keyCode === 13 ? this.props.getSearchInput(this.state.search.toLowerCase(), this.props.listOfClaims, this.props.selectedTab) : (false)}
                        placeholder={placeHolder}
                        className={classes.searchInput}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={(event) => this.props.getSearchInput(this.state.search.toLowerCase(), this.props.listOfClaims, this.props.selectedTab)}>
                        <Search />
                    </Button>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(SearchBox);