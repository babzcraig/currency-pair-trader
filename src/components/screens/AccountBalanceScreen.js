import React from 'react';

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

export default AccountBalanceDisplay;
