import React from "react";
import ReactDOM from "react-dom";
import TradeScreen from "../src/components/screens/TradeScreen";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<TradeScreen />", () => {
  const wrapper = shallow(<TradeScreen />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TradeScreen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("contains two input fields", () => {
    expect(wrapper.find("input").length).toBe(2);
  });

  it('contains an h2 with a Text of "Trade"', () => {
    expect(wrapper.find("h2").text()).toBe("Trade");
  });

  it('contains an h2 with a className of "trade-section', () => {
    expect(wrapper.find("h2").hasClass("trade-section")).toBe(true);
  });

  it("matches the snapshot", () => {
    const tree = shallow(<TradeScreen />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
