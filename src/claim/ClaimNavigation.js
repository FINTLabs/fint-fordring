import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
    backButton: {
        marginRight: theme.spacing.unit,
    },
});

class ClaimNavigation extends Component {
    render() {
        const {classes} = this.props;
        const {
            activeStep,
            steps,
            personOrderedBySelection,
            productOrderedBySelection,
            selectedDate
        } = this.props;
        return (
            <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                >
                    Tilbake
                </Button>
                {activeStep === steps.length - 1 ? (
                    <Button
                        disabled={!(personOrderedBySelection.length > 0 && productOrderedBySelection.length > 0 && selectedDate !== "")}
                        variant="raised" color="primary"
                        onClick={this.props.handleFinish({vertical: 'bottom', horizontal: 'right'})}>
                        Send
                    </Button>) : (
                    <Button variant="raised" color="primary" onClick={this.props.handleNext}>
                        Neste
                    </Button>)}
                {/*<Button variant="raised" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>*/}

            </div>
        );
    }
}

export default withStyles(styles)(ClaimNavigation);

ClaimNavigation.propTypes = {
    activeStep: PropTypes.any.isRequired,
    handleFinish: PropTypes.any.isRequired,
    handleNext: PropTypes.any.isRequired,
    personOrderedBySelection: PropTypes.any.isRequired,
    productOrderedBySelection: PropTypes.any.isRequired,
    selectedDate: PropTypes.any.isRequired,
    steps: PropTypes.any.isRequired
}