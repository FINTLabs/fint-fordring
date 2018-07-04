import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import {Search} from '@material-ui/icons';


const styles = theme => ({
    searchContainer: {
        padding: theme.spacing.unit * 2,
    },
    searchInput: {
        margin: theme.spacing.unit,
        width: '50%',
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
        this.setState({search: event.target.value}, () => {
            if(this.state.search === "") {
                this.props.getSearchInput(this.state.search.toLowerCase());
            }
        });
    }

    render() {
        const {classes, placeHolder} = this.props;
        return (
            <div>
                <div className={classes.searchContainer}>
                    <Input
                        onChange={this.updateSearch}
                        onKeyDown={(e) => e.keyCode===13 ? this.props.getSearchInput(this.state.search.toLowerCase()):(false)}
                        placeholder={placeHolder}
                        className={classes.searchInput}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={(event) => this.props.getSearchInput(this.state.search.toLowerCase())}>
                        <Search/>
                    </Button>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(SearchBox);