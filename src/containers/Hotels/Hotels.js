import React, { Component } from 'react';
import classes from './Hotels.module.css';
import SearchResults from '../../components/SearchResults/SearchResults';

import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as hotelSearchActions from '../../store/actions/index'


class HotelSearch extends Component {
    state = {
        loading: null,
    }


    componentDidMount () {
        this.props.onInitClients();
        axios.get('/clientes.json', {mode:'no-cors'})
        .then( response => {
            this.setState({clientes: response.data})
        })
        .catch( error => {
            console.log(error);
        })
    }


    render() {
        let item = null;
        if (this.props.clis) {
            item = this.props
        }

        return (
            <div className={classes.listArea}>
                <SearchResults />
                <button onClick={() => console.log(this.props)}>Aqui</button>
                <button onClick={() => console.log(this.state)}>State</button>
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
const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(hotelSearchActions.initClients())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(HotelSearch, axios));