import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClaimTabs from './claimTabs/ClaimTabs';
import LoadingProgress from '../common/LoadingProgress';

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: '65px',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

class Claims extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchPayments().then(()=>{
            console.log("fetched again");
        });
    }

    renderPosts(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ClaimTabs testDataFordring={this.props.payments}/>
            </div>
        )
    }

    render() {
        if (this.props.payments.length > 0) {
            return (this.renderPosts());
        } else {
            return (<LoadingProgress />);
        }
    };
}

Claims.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Claims);