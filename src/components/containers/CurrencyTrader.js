import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Import container components
import TradeContainer from "./TradeContainer";

// Import screen components
import AccountBalanceScreen from "../screens/AccountBalanceScreen";
import BTCQuoteScreen from "../screens/BTCQuoteScreen";
import LoadingScreen from "../screens/LoadingScreen";
// Import our action
import { fetchLastBTCPrice, tradeUSDForBTC } from "../../actions/tickerActions";

// import poll interval constant
import { POLL_INTERVAL_IN_MS } from "../../constants";

class CurrencyTrader extends Component {
  static propTypes = {
    lastPrice: PropTypes.number,
    loading: PropTypes.bool,
    amountToBuy: PropTypes.string,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      usdBalance: PropTypes.number,
      btcBalance: PropTypes.number
    })
  };

  componentDidMount() {
    // fetch the last price for BTC and set an interval
    this.props.fetchLastBTCPrice();
    this.pollInterval = setInterval(
      this.props.fetchLastBTCPrice,
      POLL_INTERVAL_IN_MS
    );
  }

  componentWillUnmount() {
    clearInterval(this.pollInterval);
  }

  _startTrade = () => {
    const {
      timestamp,
      btcQuote,
      amountToBuy,
      user: { usdBalance }
    } = this.props;
    const usdAmountToBuy = Number(amountToBuy);
    const btcAmountToBuy = Number(btcQuote);
    this.props.tradeUSDForBTC({ usdAmountToBuy, usdBalance, btcAmountToBuy });
  };

  render() {
    const {
      lastPrice,
      loading,
      user,
      amountToBuy,
      btcQuote,
      successMsg,
      errorMsg,
      warningMsg,
      loadCount
    } = this.props;
    const { usdBalance, btcBalance } = user;
    const requiredFieldsAreNotFilled = !amountToBuy;
    return (
      <div className="currency-trader">
        <LoadingScreen loading={loading} loadCount={loadCount} />
        <AccountBalanceScreen usdBalance={usdBalance} btcBalance={btcBalance} />
        <TradeContainer />
        <BTCQuoteScreen lastPrice={lastPrice} btcQuote={btcQuote} />
        <button
          disabled={requiredFieldsAreNotFilled}
          onClick={this._startTrade}
          className={
            requiredFieldsAreNotFilled ? "main-btn btn-disabled" : "main-btn"
          }
        >
          Trade
        </button>
        <div className="alert-div">
          {successMsg && (
            <small className="small-success-text">{successMsg}</small>
          )}
          {errorMsg && <small className="small-error-text">{errorMsg}</small>}
          {warningMsg && (
            <small className="small-warning-text">{warningMsg}</small>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tickerReducer, userReducer }) => {
  // retrieve the reducer values
  const { user } = userReducer;
  const {
    lastPrice,
    loading,
    amountToBuy,
    btcQuote,
    successMsg,
    errorMsg,
    timestamp,
    warningMsg,
    loadCount
  } = tickerReducer;

  // map the reducer values to the props of the component
  return {
    user,
    lastPrice,
    loading,
    amountToBuy,
    btcQuote,
    successMsg,
    errorMsg,
    timestamp,
    warningMsg,
    loadCount
  };
};

export default connect(
  mapStateToProps,
  { fetchLastBTCPrice, tradeUSDForBTC }
)(CurrencyTrader);
