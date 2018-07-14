import React from 'react';
import PropTypes from 'prop-types';
import { getBTCQuote } from '../../utils';


const BTCQuoteScreen = ({lastPrice, amountToBuy}) => {
  const btcQuote = getBTCQuote(lastPrice, amountToBuy);

  return (
    <React.Fragment>
      <h2>For</h2>
      <div>
        <input type="number" placeholder="BTC" disabled/>
      </div>
      <div>
        <input type="number" placeholder="Quoted Price" value={btcQuote} disabled/>
      </div>
    </React.Fragment>
  )
}

BTCQuoteScreen.propTypes = {
  lastPrice: PropTypes.number,
  amountToBuy: PropTypes.string
}

export default BTCQuoteScreen;
