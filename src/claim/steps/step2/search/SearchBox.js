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


    render() {
        const {classes, placeHolder} = this.props;
        return (

            <div>
                <div className={classes.searchContainer}>
                    <Input
                        onChange={(event) => this.props.getSearchInput(event.target.value.toLowerCase())}
                        placeholder={placeHolder}
                        className={classes.searchInput}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                    <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                        <Search/>
                    </Button>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(SearchBox);