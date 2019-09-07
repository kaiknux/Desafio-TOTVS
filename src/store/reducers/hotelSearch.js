import * as actionTypes from '../actions/actionTypes';

const initialState = {
    totalList: null,
    clientes: '',
    error: false,
}



const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.REMOVE_CLIENT:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    [action.clientId]: state.clients[action.clientId] - 1
                }
            }
        case actionTypes.SET_CLIENTS:

            return {
                ...state,
                totalList: action.clientes.length,
                newItem: action.clientes 
            }
        case actionTypes.FETCH_CLIENTS_FAILED:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
};

export default reducer;