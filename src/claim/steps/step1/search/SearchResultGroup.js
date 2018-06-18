import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class SearchResultGroup extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        if (event.target.type === "button") {
            return;
        }
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                {this.props.listGroup.map(n => {
                    return (
                        <ExpansionPanel expanded={expanded === n.id} onChange={this.handleChange(n.id)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>{n.mainGroup}</Typography>
                                <Typography className={classes.secondaryHeading}>{n.school}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Paper className={classes.root}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Navn</TableCell>
                                                <TableCell>Klasse</TableCell>
                                                <TableCell>
                                                    <Button mini variant="fab" color="secondary" aria-label="add" onClick={() => this.props.addAll(n)}
                                                        className={classes.button}>
                                                        {(this.props.checkIfAllAreSelected(n)) ? (
                                                            <Add />
                                                        ) : (
                                                                <Remove />
                                                            )}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {n.members.map(m => {
                                                return (
                                                    <TableRow key={m.id}>
                                                        <TableCell>{m.firstName} {m.lastName}</TableCell>
                                                        <TableCell>{m.mainGroup}</TableCell>
                                                        <TableCell>
                                                            {!m.selected ? (
                                                                <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.addMethod(n, m)}
                                                                    className={classes.button}>
                                                                    <Add />
                                                                </Button>
                                                            ) : (
                                                                    <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(n, m)}
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
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    );
                })}
            </div>
        );
    }
}

SearchResultGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultGroup);