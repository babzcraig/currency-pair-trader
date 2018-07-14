import React, {Component} from 'react';
import {connect} from "react-redux";
// Import container components
import TradeContainer from './TradeContainer';

// Import screen components
import AccountBalanceScreen from '../screens/AccountBalanceScreen';
import BTCQuoteScreen from '../screens/BTCQuoteScreen';

// Import our action
import {fetchLastBTCPrice} from "../../actions/tickerActions";

class CurrencyTrader extends Component {
  componentDidMount() {
    // fetch the last price for BTC
    this
      .props
      .fetchLastBTCPrice();
  }

  render() {
    console.log(this.props)
    const {usdBalance, btcBalance, lastPrice} = this.props.user
    return (
      <div className="currency-trader">
        <AccountBalanceScreen usdBalance={usdBalance} btcBalance={btcBalance}/>
        <TradeContainer/>
        <BTCQuoteScreen lastPrice={lastPrice}/>
        <button className="main-btn">Trade</button>
      </div>
    )
  }
}

const mapStateToProps = ({tickerReducer, userReducer}) => {
  // retrieve the reducer values
  const {user} = userReducer;
  const {lastPrice, loading: tickerLoading} = tickerReducer;

  // map the reducer values to the props of the component
  return {user, lastPrice, tickerLoading};
};

export default connect(mapStateToProps, {fetchLastBTCPrice})(CurrencyTrader);
