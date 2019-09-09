import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { ManageClients } from './ManageClients';
import ManageableCityCard from '../ManageableCityCard/ManageableCityCard';

configure({adapter: new Adapter()})

describe('<ManageClients />', () => {
    let wrapper ;
    beforeEach (() => {
        wrapper = shallow(<ManageClients />)
    })
    it(`should render <ManageableCityCard /> when receiving clients (hotels) as props from Redux`, () => {
        wrapper.setProps({clis: [{id: 2555, nome: 'Teste do Enzyme'}]});
        expect(wrapper.find(ManageableCityCard)).toHaveLength(1)
    })
    
});
