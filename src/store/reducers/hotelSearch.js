import * as actionTypes from '../actions/actionTypes';

const initialState = {
    totalList: null,
    clientes: '',
    error: false,
    searchString: '',
    filteredItems: null,
    cList: null,
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
                cList: action.clientes,
                searchString: null,
                filteredItems: null,
            }
        case actionTypes.FETCH_CLIENTS_FAILED:
            return {
                ...state,
                error: true,
            }
        case actionTypes.SUCCESSFUL_SEARCH:
            return {
                ...state,
                error: true,
                filteredItems: action.cliente
            }
        case actionTypes.END_OF_SEARCH:
            return {
                ...state,
                error: true,
                searchString: action.string,
                filteredItems: action.clientes
            }            
        default:
            return state;
    }
};

export default reducer;