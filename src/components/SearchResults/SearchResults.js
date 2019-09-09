import React, { Component } from 'react';
import classes from './SearchResults.module.css';
import CityCard from '../../components/CityCard/CityCard';
import * as hotelSearchActions from '../../store/actions/index'
import { connect } from 'react-redux';
import Modal from '../UI/Modal/Modal';

class SearchResults extends Component {
    state = {
        showModal: false,
        object: false,
    }

    displayModalWithInfo = (cartao) => {
        this.setState({showModal: true, object: cartao})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    render() {
        let modalInfo = '';
        if (this.state.showModal) {
            modalInfo = (
                <div className={classes.mContent}>
                    <div className={classes.imgArea}>
                        <img className={classes.imgTeste} alt="img" src={`https://firebasestorage.googleapis.com/v0/b/desafio-totvseo.appspot.com/o/${this.state.object.foto}?alt=media&token=f87c9c27-f691-4c43-a758-c41555642e07`} />
                    </div>
                    <div className={classes.txtArea}>
                        <h4>{this.state.object.nome} parece uma boa empresa para oferecer serviços de tecnologia.</h4>
                        <p>Deseja ligar agora?</p>
                    </div>
                    <div className={classes.mdInteraction}>
                        <p className={classes.intOptions}>NÃO</p>
                        <p className={classes.intOptions}>SIM</p>
                    </div>
                </div>
            )

        }
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
                clicked={() => this.displayModalWithInfo(cartao)}
            />
            })
        }
        return (
            <div className={classes.srContainer}>
            <p>{tText}</p>
            {items}
                <Modal show={this.state.showModal} modalClosed={() => this.hideModal()}>
                    {modalInfo}
                </Modal>
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