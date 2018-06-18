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
    }

    render() {
        const { classes } = this.props;

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
                        {this.props.listGroup.map(m => {
                            {
                                return (
                                    m.members.map(n => {
                                        console.log(this.props.personSearchFilter[0], n)
                                        if (this.props.personSearchFilter.indexOf(n) === -1) {
                                            return;
                                        }
                                        return (
                                            <TableRow key={n.id}>
                                                <TableCell>{n.firstName} {n.lastName}</TableCell>
                                                <TableCell>{n.mainGroup}</TableCell>
                                                <TableCell>{n.school}</TableCell>
                                                <TableCell>
                                                    {!n.selected ? (
                                                        <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.addMethod(m, n)}
                                                            className={classes.button}>
                                                            <Add />
                                                        </Button>
                                                    ) : (
                                                            <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(m, n)}
                                                                className={classes.button}>
                                                                <Remove />
                                                            </Button>
                                                        )}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                );
                            }
                        })
                        }
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
