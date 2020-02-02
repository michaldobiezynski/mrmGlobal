import { shallow, mount, render} from 'enzyme';
import React from 'react';

import Drink from './Drink';

it('expect to render a Drink component', () => {
    expect(shallow(<Drink drink={drink} onRemove={onRemove} />).length).toEqual(1)
})  