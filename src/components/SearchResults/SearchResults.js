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
        let tText = `Resultado da busca: exibindo ${number} ${sufix}`
        if (number === 0) {
            tText = `Resultado da busca: não foram encontrados identificáveis por "${this.props.sString}"`
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
            <p>{tText}</p>
            {items}
        </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        clis: state.filteredItems,
        countList: state.totalList,
        sString: state.searchString
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(hotelSearchActions.initClients())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);