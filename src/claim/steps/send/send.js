import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProductOverview from "./resultOverview/ProductOverview";
import PersonOverview from "./resultOverview/PersonOverview";
import GroupOverview from "./resultOverview/GroupOverview";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    paper: {
        width: '100%',
        height: 150,
        overflowX: 'auto',
        marginTop: theme.spacing.unit * 2,
    },
    shrinkSides: {
        margin: 2,
    },
    shrinkSides2: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '100%',
    },
    optionHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '100%',
    },
    rotate: {
        transform: "rotate(180deg)"
    },
    table: {
        minWidth: 521
    },
    actionButton: {
        height: "35px",
        width: "35px",
    },
    actionButtonIcon: {
        color: "#fff",
    }
});

class Step3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedPersonList: [],
        };
    }

    sortMethod = (array, order, sortByValue, isNumber) => {
        if (isNumber) {
            function compare(a, b) {
                if (eval("Number(a." + sortByValue + ")<Number(b." + sortByValue + ")")) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval("Number(a." + sortByValue + ")>Number(b." + sortByValue + ")")) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
        } else {
            function compare(a, b) {
                if (eval(sortByValue.map(f => "a." + f).join("+") + "<" + sortByValue.map(f => "b." + f).join("+"))) {
                    return -1 * order; //order is either -1 or 1
                }
                if (eval(sortByValue.map(f => "a." + f).join("+") + ">" + sortByValue.map(f => "b." + f).join("+"))) {
                    return 1 * order;
                }
                return 0;
            }
            this.setState({ sortedPersonList: array.sort(compare) });
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.optionHeading}>Valgte Produkter</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {(!this.props.productOrderedBySelection[0]) ? (<h3 className={classes.secondaryHeading}>Du har ikke valgt noen produkter enda</h3>) : (
                            <ProductOverview productOrderedBySelection={this.props.productOrderedBySelection} />
                        )}
                        {/*På bunn av denne tabellen kan en ha sum av produktpris; pris per elev*/}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.optionHeading}>Valgte Personer</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {(!this.props.personOrderedBySelection[0]) ? (<h3 className={classes.secondaryHeading}>Du har ikke valgt noen personer enda</h3>) : (
                            <PersonOverview
                                personOrderedBySelection={this.props.personOrderedBySelection}
                                sortMethod={this.sortMethod}
                                testDataPerson={this.props.testDataPerson}
                                sortedPersonList={this.state.sortedPersonList} />
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.optionHeading}>Valgte Grupper</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {(!this.props.personOrderedBySelection[0]) ? (<h3 className={classes.secondaryHeading}>Du har ikke valgt noen grupper enda</h3>) : (
                            <GroupOverview elevation={2}
                                sortMethod={this.sortMethod}
                                testDataGruppe={this.props.testDataGruppe}
                                sortedPersonList={this.state.sortedPersonList}
                                selectedPersonList={this.props.selectedPersonList} />
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(styles)(Step3);