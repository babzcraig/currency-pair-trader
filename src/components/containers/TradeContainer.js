import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TradeScreen from "../screens/TradeScreen";
import { updateAmountToBuy } from "../../actions/tickerActions";

class TradeContainer extends Component {
  static propTypes = {
    lastPrice: PropTypes.number,
    amountToBuy: PropTypes.string,
    timestamp: PropTypes.any,
    updateAmountToBuy: PropTypes.func
  };

  onInputChange = e => {
    const amountToBuy = e.target.value;
    this.props.updateAmountToBuy(amountToBuy);
  };

  render() {
    const { amountToBuy } = this.props;
    return (
      <TradeScreen
        amountToBuy={amountToBuy}
        onInputChange={this.onInputChange}
      />
    );
  }
}

const mapStateToProps = ({ tickerReducer }) => {
  // retrieve the reducer values
  const { lastPrice, timestamp, amountToBuy } = tickerReducer;

  // map the reducer values to the props of the component
  return { lastPrice, timestamp, amountToBuy };
};

export default connect(
  mapStateToProps,
  { updateAmountToBuy }
)(TradeContainer);
