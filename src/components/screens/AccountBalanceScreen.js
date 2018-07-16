import React from 'react';
import PropTypes from 'prop-types';

const AccountBalanceScreen = ({usdBalance, btcBalance}) => {
  return (
    <div className="account-balance-section">
      <h1>Account Balance</h1>
      <p>
        <span>USD :</span>{usdBalance}</p>
      <p>
        <span>BTC :</span>{btcBalance}</p>
    </div>
  )
}

AccountBalanceScreen.propTypes = {
  usdBalance: PropTypes.number,
  btcBalance: PropTypes.number
}

export default AccountBalanceScreen;
