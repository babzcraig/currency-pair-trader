import React from 'react';
import ReactDOM from 'react-dom'
import App from '../src/components/App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it("should just contain one div element with class app", () => {
    expect(wrapper.find('.App').exists()).toBe(true)
  })
})
