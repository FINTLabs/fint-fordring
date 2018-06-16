import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import {Add} from '@material-ui/icons';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});



class ResultTablePerson extends Component {

    constructor(props) {
        super(props);

        /*this.state = {
            result: [
                {
                    "id": "1",
                    "firstName": "Kjell Kari",
                    "lastName": "Svendsen",
                    "school": "Bryne videregåande skule",
                    "mainGroup": "1STA"
                },
                {
                    "id": "2",
                    "firstName": "Banjo",
                    "lastName": "Kari",
                    "school": "Bryne videregåande skule",
                    "mainGroup": "1STA"
                },
                {
                    "id": "3",
                    "firstName": "Kåre Svein",
                    "lastName": "Håland",
                    "school": "Bryne videregåande skule",
                    "mainGroup": "1STA"
                },
                {
                    "id": "4",
                    "firstName": "Harry Jan",
                    "lastName": "Varhaug",
                    "school": "Bryne videregåande skule",
                    "mainGroup": "1STA"
                },
                {
                    "id": "5",
                    "firstName": "Berit Anne",
                    "lastName": "Vigrestad",
                    "school": "Bryne videregåande skule",
                    "mainGroup": "1STA"
                }
            ]
        };*/

    }

    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Navn</TableCell>
                            <TableCell>Klasse</TableCell>
                            <TableCell>Skole</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.testData.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell>{n.firstName} {n.lastName}</TableCell>
                                    <TableCell>{n.mainGroup}</TableCell>
                                    <TableCell>{n.school}</TableCell>
                                    <TableCell>
                                        <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.sendData(n)}
                                                className={classes.button}>
                                            <Add/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

ResultTablePerson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultTablePerson);
