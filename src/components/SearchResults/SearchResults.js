import React, { Component } from 'react';
import classes from './SearchResults.module.css';
import CityCard from '../../components/CityCard/CityCard';
import * as hotelSearchActions from '../../store/actions/index'
import { connect } from 'react-redux';


class SearchResults extends Component {
    
    render() {
        let number = this.props.clis.length
        let items = '';
        let sufix = 'ítem'
        if (number > 1) {
        sufix = 'ítens'
        }
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
            <p>Resultado da busca: exibindo {number} {sufix}</p>
            {items}
        </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        clis: state.filteredItems,
        countList: state.totalList,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(hotelSearchActions.initClients())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);