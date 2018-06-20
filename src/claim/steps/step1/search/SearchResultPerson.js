import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';


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
        this.state = {
            sort: {
                "firstName": 1,
                "mainGroup": 1,
                "school": 1
            }
        }
    }

    /*triggerSort = (val, isNumber) => {
        let listPerson = [];
        for (let i = 0; i < this.props.listGroup.length; i++) {
            for (let j = 0; j < this.props.listGroup[i].members.length; j++) {
                listPerson.push(this.props.listGroup[i].members[j]);
            }
        }
        //listPerson har alle elever
        this.props.sortMethod(
            listPerson,
            (this.state.sort.val === 1) ?
                (this.setState({ sort: { val: -1 } }), 1) :
                (this.setState({ sort: { val: 1 } }), -1),
            val, isNumber);
    }*/

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell /*onClick={() => this.triggerSort("firstName", false)}*/>Navn</TableCell>
                            <TableCell>Klasse</TableCell>
                            <TableCell>Skole</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                                {this.props.testDataPerson.map(n => {
                                    if (this.props.searchFilter.indexOf(n) === -1) {
                                        return null;
                                    }
                                    return (
                                        <TableRow key={n.kundenummer}>
                                            <TableCell>{n.navn.fornavn} {n.navn.mellomnavn} {n.navn.etternavn}</TableCell>
                                            <TableCell>{n.klassnavn}</TableCell>
                                            <TableCell>{/*n.school*/}</TableCell>
                                            <TableCell>
                                                {!this.props.selectedPersonList[n.kundenummer] ? (
                                                    <Button mini variant="fab" color="secondary" aria-label="add" onClick={() => this.props.addMethod(n)}
                                                        className={classes.button}>
                                                        <Add />
                                                    </Button>
                                                ) : (
                                                        <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(n)}
                                                            className={classes.button}>
                                                            <Remove />
                                                        </Button>
                                                    )}
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
