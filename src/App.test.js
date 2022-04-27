import { mount } from 'enzyme';
import React from 'react'
import App from './App';

it('renders learn react link', () => {
  const wrapper = mount( <App />);
  expect(wrapper).toMatchSnapshot();
});


it('renders learn react link', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find({ "data-testid": "description" }).text()).toEqual('Edit src/App.js and save to reload.')
});