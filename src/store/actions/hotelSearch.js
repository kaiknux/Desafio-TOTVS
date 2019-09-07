import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';
import axios from 'axios';

export const addClient = (id) => {
    return {
        type: actionTypes.ADD_CLIENT,
        clientId: id
    }
}

export const removeClient = (id) => {
    return {
        type: actionTypes.REMOVE_CLIENT,
        clientId: id
    }
}

export const setClients = (clientes) => {
    return {
        type: actionTypes.SET_CLIENTS,
        clientes: clientes
    }
}

export const fetchClientsFailed = () => {
    return {
        type: actionTypes.FETCH_CLIENTS_FAILED,
    }
}

export const initClients = () => {
    return dispatch => {
    //     let header = new Headers({
    //         'Access-Control-Allow-Origin':'*',
    //         'Content-Type': 'multipart/form-data'
    // });
        axios.get('http://desafio-totvseo.firebaseio.com/clientes.json')
        .then( response => {
            dispatch(setClients(response.data))
        })
        .catch( error => {
            dispatch(fetchClientsFailed())
        })
    }
}

// export const initClients = () => {
//      return async dispatch => {
//         let response = await fetch('http://desafio-totvseo.firebaseio.com/clientes', {mode:'no-cors'})
//         await dispatch(setClients(response.data))
//     }
// }