import reducer from './hotelSearch';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            totalList: null,
            clientes: '',
            error: false,
            searchString: '',
            filteredItems: null,
            cList: null,
        });
    });

    it('equality is wrong', () => {
        expect(reducer({
            totalList: 1,
            clientes: '',
            error: false,
            searchString: null,
            filteredItems: null,
            cList: null,
        }, { 
            type: actionTypes.SET_CLIENTS,
            clientes: 'foo',
         })).toEqual({
            totalList: 3,
            clientes: '',
            error: false,
            searchString: null,
            filteredItems: null,
            cList: 'foo',
        });
    })
});
