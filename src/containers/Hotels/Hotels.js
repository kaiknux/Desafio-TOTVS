import React, { Component } from 'react';
import classes from './Hotels.module.css';
import ManageClients from '../../components/ManageClients/ManageClients';

import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';


class Hotels extends Component {
    state = {
        loading: null,
    }

    render() {

        return (
            <div className={classes.listArea}>
                <ManageClients />
           </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        clis: state.newItem,
        countList: state.totalList,
    }
};



export default connect(mapStateToProps, null )(withErrorHandler(Hotels, axios));