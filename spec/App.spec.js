import React from 'react'
import jasmineEnzyme from 'jasmine-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {mount, shallow} from 'enzyme'
import Homepage from '../src/pages/Homepage';

configure({ adapter: new Adapter() });

beforeEach(function() {
  jasmineEnzyme();
});

const wrapper = mount(<Homepage />);

test('Jasmin test 1', () => {
  expect(wrapper.find('h3').text()).toContain("Frontend Developer Coding Challenge");
});


// describe('test', () => {
    
//     let wrapper;
//     beforeEach(() => {
//     jasmineEnzyme();
//     wrapper = shallow(<Homepage />);
//   });

//   // tests
//   test('Jasmin test 1', () => {
//     expect(wrapper.find('h3').text()).toContain("Frontend Developer Coding Challenge");
//   });
// });






