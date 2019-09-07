import React, { Component } from 'react';
import classes from './SearchResults.module.css';
import CityCard from '../../components/CityCard/CityCard';
import * as hotelSearchActions from '../../store/actions/index'
import { connect } from 'react-redux';


class SearchResults extends Component {
    render() {
        let items = '';
        if (this.props.clis) {
            items = this.props.clis.map(cartao => {
                return <CityCard 
                link={cartao.link}
                nome={cartao.nome}
                foto={cartao.foto}
                id={cartao.id}
                descric={cartao.descric}
                key={cartao.id}
                chamada={cartao.chamada}
            />
            })
        }
        return (
            <div className={classes.srContainer}>
            <p>Resultado da busca: exibindo {this.props.countList} ítens</p>
            {items}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);