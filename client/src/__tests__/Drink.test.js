import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import { mount} from 'enzyme';

import React from 'react';

import Drink from '../components/Drink/Drink';



it('expect to render a Drink component', () => {
    expect(mount(<Drink />)).toMatchSnapshot();
})  