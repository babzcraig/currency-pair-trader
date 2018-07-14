import React from 'react';
import PropTypes from 'prop-types';

const AccountBalanceDisplay = ({usdBalance, btcBalance}) => {
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

AccountBalanceDisplay.propTypes = {
  usdBalance: PropTypes.number.isRequired,
  btcBalance: PropTypes.number.isRequired
}

export default AccountBalanceDisplay;
