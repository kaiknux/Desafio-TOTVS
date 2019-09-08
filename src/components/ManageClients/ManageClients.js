import React, { Component } from 'react';
import classes from './ManageClients.module.css';
import CityCard from '../CityCard/CityCard';
import * as hotelSearchActions from '../../store/actions/index'
import { connect } from 'react-redux';


class ManageClients extends Component {
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
            <div className={classes.mcContainer}>
            <p>Exibindo {this.props.countList} ítens</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClients);