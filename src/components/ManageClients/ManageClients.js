import React, { Component } from 'react';
import classes from './ManageClients.module.css';
import ManageableCityCard from '../ManageableCityCard/ManageableCityCard';
import * as hotelSearchActions from '../../store/actions/index'
import { connect } from 'react-redux';


export class ManageClients extends Component {
    sate = {

    }
    removeItemHandler = (aRemover) => {
        let novaListaDeClientes = this.props.clis.filter(itens => !aRemover.includes(itens.nome))
        console.log(novaListaDeClientes)
        this.props.onRemoveClient(novaListaDeClientes)

    }
    render() {
        let items = '';
        if (this.props.clis) {
            items = this.props.clis.map(cartao => {
                return <ManageableCityCard 
                link={cartao.link}
                nome={cartao.nome}
                foto={cartao.foto}
                id={cartao.id}
                descric={cartao.descric}
                key={cartao.id}
                chamada={cartao.chamada}
                clicked={() => this.removeItemHandler(cartao.nome)}
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
        clis: state.cList,
        countList: state.totalList,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(hotelSearchActions.initClients()),
        onRemoveClient: (novaListaDeClientes) => dispatch(hotelSearchActions.removeClient(novaListaDeClientes))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageClients);