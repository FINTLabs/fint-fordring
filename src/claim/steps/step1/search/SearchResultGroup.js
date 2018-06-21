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
import { CheckBox } from '@material-ui/icons';
import { CheckBoxOutlineBlank } from '@material-ui/icons';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    }
});

class SearchResultGroup extends React.Component {

    constructor() {
        super();
        this.state = {
            expanded: null,
            sort: {}
        };
    }

    handleChange = panel => (event, expanded) => {
        if (event.target.type === "button") {
            return;
        }
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    triggerSort = (val, isNumber, personArr) => {
        this.props.sortMethod(
            personArr,
            (this.state.sort.val === 1) ?
                (this.setState({ sort: { val: -1 } }), 1) :
                (this.setState({ sort: { val: 1 } }), -1),
            val, isNumber);
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                {this.props.testDataGruppe.map(n => {
                    if (this.props.searchFilter.indexOf(n) === -1) {
                        return;
                    }
                    return (
                        <ExpansionPanel expanded={expanded === n.id} onChange={this.handleChange(n.id)} elevation={2} key={n.id}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>{n.navn}</Typography>
                                <Typography className={classes.secondaryHeading}>{/*n.school*/}Ingen skole</Typography>
                                <Typography className={classes.heading}>{n.kundeliste.length} Elever</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Paper className={classes.root} elevation={2}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell onClick={() => this.triggerSort(["navn.fornavn", "navn.mellomnavn", "navn.etternavn"], false, n.kundeliste)}>Fornavn</TableCell>
                                                <TableCell onClick={() => this.triggerSort(["navn.etternavn", "navn.fornavn", "navn.mellomnavn"], false, n.kundeliste)}>Etternavn</TableCell>
                                                <TableCell onClick={() => this.triggerSort(["klassenavn"], false, n.kundeliste)}>Klasse</TableCell>
                                                <TableCell>
                                                    <Button mini variant="fab" aria-label="add" onClick={() => this.props.addAll(n)}
                                                        className={classes.button}>
                                                        {(this.props.checkIfAllAreSelected(n)) ? (
                                                            <CheckBoxOutlineBlank />
                                                        ) : (
                                                                <CheckBox />
                                                            )}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {n.kundeliste.map(m => {
                                                return (
                                                    <TableRow key={m.kundenummer}>
                                                        <TableCell>{m.navn.fornavn} {m.navn.mellomnavn}</TableCell>
                                                        <TableCell>{m.navn.etternavn}</TableCell>
                                                        <TableCell>{m.klassenavn}</TableCell>
                                                        <TableCell>
                                                            {!this.props.selectedPersonList[m.kundenummer] ? (
                                                                <Button mini variant="fab" color="secondary" aria-label="add" onClick={() => this.props.addMethod(m)}
                                                                    className={classes.button}>
                                                                    <Add />
                                                                </Button>
                                                            ) : (
                                                                    <Button mini variant="fab" color="primary" aria-label="add" onClick={() => this.props.removeMethod(m)}
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