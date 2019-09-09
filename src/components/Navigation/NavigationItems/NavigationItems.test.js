import NavigationItems from './NavigationItems';
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';



configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
    it(`should render all <NavigationItem />'s because i haven't created any auth proccesses or things that would change the render...`, () => {
        const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavigationItem)).toHaveLength(4);
    })
    
});


// A ideia de testar o componente de navegação é quebrada por não haver ainda a feature de Auth... Se o NavigationItem 'Fazer login' aparecesse somente para quem
// não tivesse o Token o teste de NavigationItems estaria mais interessante.
// Test.js pra cumprir tabela.