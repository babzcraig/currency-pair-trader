import React from "react";
import ReactDOM from "react-dom";
import AccountBalanceScreen from "../src/components/screens/AccountBalanceScreen";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<AccountBalanceScreen />", () => {
  const wrapper = shallow(
    <AccountBalanceScreen usdBalance={100} btcBalance={0.0069} />
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AccountBalanceScreen usdBalance={100} btcBalance={0.0069} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("contains a div with name account-balance-section", () => {
    expect(wrapper.find(".account-balance-section").exists()).toBe(true);
  });

  it("contains an h1 with a Text of Account Balance", () => {
    expect(wrapper.find("h1").text()).toBe("Account Balance");
  });

  it("matches the snapshot", () => {
    const tree = shallow(<AccountBalanceScreen />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
