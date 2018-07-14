import React from 'react';

const BTCQuoteDisplay = ({usdBalance, btcBalance}) => {
  return (
    <React.Fragment>
      <h2>For</h2>
      <div>
        <input type="number" placeholder="BTC" disabled/>
      </div>
      <div>
        <input type="number" placeholder="Quoted Price" disabled/>
      </div>
    </React.Fragment>
  )
}

export default BTCQuoteDisplay;
