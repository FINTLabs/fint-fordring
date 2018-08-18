import React from "react";
import {CircularProgress, withStyles} from "@material-ui/core";
import Paper from "../../node_modules/@material-ui/core/Paper/Paper";
import Typography from "../../node_modules/@material-ui/core/Typography/Typography";
import Grid from "../../node_modules/@material-ui/core/Grid/Grid";

const styles = theme => ({
    progress: {
        //margin: `0 ${theme.spacing.unit * 2}px`,
        position: 'absolute',
        top: '30%',
        left: '50%',
        padding: theme.spacing.unit * 2,
        //marginRight: '-50%',
    },
    message: {
        marginLeft: theme.spacing.unit * 2,
    }
});

class LoadingProgress extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <Paper className={classes.progress}>
                <Grid container alignItems={"center"}>
                    <CircularProgress color='secondary' size={50}/>
                    <Typography className={classes.message} variant={"caption"}>Vi er øyeblikk klare...</Typography>
                </Grid>
            </Paper>
        );
    }

}

export default withStyles(styles)(LoadingProgress);