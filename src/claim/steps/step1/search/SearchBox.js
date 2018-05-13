import React, {Component} from 'react';
import {Button, Input, withStyles} from "material-ui";
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

    render() {

        console.log(this);
        const {classes, placeHolder} = this.props;
        return (

            <div>
                <div className={classes.searchContainer}>
                    <Input
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