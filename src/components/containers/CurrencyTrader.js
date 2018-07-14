import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
// Import container components
import TradeContainer from './TradeContainer';

// Import screen components
import AccountBalanceScreen from '../screens/AccountBalanceScreen';
import BTCQuoteScreen from '../screens/BTCQuoteScreen';

// Import our action
import {fetchLastBTCPrice} from "../../actions/tickerActions";

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

  render() {
    const { lastPrice, loading, user, amountToBuy } = this.props;
    const {usdBalance, btcBalance} = user;
    return (
      <div className="currency-trader">
        <AccountBalanceScreen usdBalance={usdBalance} btcBalance={btcBalance}/>
        <TradeContainer/>
        <BTCQuoteScreen lastPrice={lastPrice} amountToBuy={amountToBuy}/>
        <button className="main-btn">Trade</button>
      </div>
    )
  }
}

const mapStateToProps = ({tickerReducer, userReducer}) => {
  // retrieve the reducer values
  const { user } = userReducer;
  const { lastPrice, loading, amountToBuy } = tickerReducer;

  // map the reducer values to the props of the component
  return {user, lastPrice, loading, amountToBuy};
};

export default connect(mapStateToProps, {fetchLastBTCPrice})(CurrencyTrader);
