import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
// Import container components
import TradeContainer from './TradeContainer';

// Import screen components
import AccountBalanceScreen from '../screens/AccountBalanceScreen';
import BTCQuoteScreen from '../screens/BTCQuoteScreen';
import LoadingScreen from '../screens/LoadingScreen';
// Import our action
import {fetchLastBTCPrice, tradeUSDForBTC} from "../../actions/tickerActions";

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
  }

  componentDidMount() {
    // fetch the last price for BTC
    this.props.fetchLastBTCPrice();
  }

  _startTrade = () => {
    const { btcQuote, amountToBuy, user: {usdBalance} } = this.props;
    const usdAmountToBuy = Number(amountToBuy);
    const btcAmountToBuy = Number(btcQuote);
    this.props.tradeUSDForBTC({usdAmountToBuy, usdBalance, btcAmountToBuy});
  }

  render() {
    const { lastPrice, loading, user, amountToBuy, btcQuote, successMsg, errorMsg } = this.props;
    const {usdBalance, btcBalance} = user;
    console.log('buying: ', amountToBuy)
    const requiredFieldsAreNotFilled = !amountToBuy;
    return (
      <div className="currency-trader">
        <LoadingScreen loading={loading} />
        <AccountBalanceScreen usdBalance={usdBalance} btcBalance={btcBalance}/>
        <TradeContainer/>
        <BTCQuoteScreen lastPrice={lastPrice} btcQuote={btcQuote}/>
        <button
          disabled={requiredFieldsAreNotFilled}
          onClick={this._startTrade}
          className={
            requiredFieldsAreNotFilled ?
            "main-btn btn-disabled" :
            "main-btn"
          }>Trade</button>
        <div className="align-center">
          {successMsg && <small className="small-success-text">{successMsg}</small>}
          {errorMsg && <small className="small-error-text">{errorMsg}</small>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({tickerReducer, userReducer}) => {
  // retrieve the reducer values
  const { user } = userReducer;
  const { lastPrice, loading, amountToBuy, btcQuote, successMsg, errorMsg } = tickerReducer;

  // map the reducer values to the props of the component
  return {user, lastPrice, loading, amountToBuy, btcQuote, successMsg, errorMsg};
};

export default connect(mapStateToProps, {fetchLastBTCPrice, tradeUSDForBTC})(CurrencyTrader);
