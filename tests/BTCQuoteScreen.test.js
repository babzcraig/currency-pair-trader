import React from 'react';
import ReactDOM from 'react-dom'
import BTCQuoteScreen from '../src/components/screens/BTCQuoteScreen'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("<BTCQuoteScreen />", () => {
  const wrapper = shallow(<BTCQuoteScreen />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BTCQuoteScreen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains two input fields', () => {
    expect(wrapper.find('input').length).toBe(2)
  });

  it('contains an h2 with a Text of "For', () => {
    expect(wrapper.find('h2').text()).toBe('For')
  });

  it('matches the snapshot', () => {
    const tree = shallow(<BTCQuoteScreen/>);
    expect(toJson(tree)).toMatchSnapshot()
  })
})


