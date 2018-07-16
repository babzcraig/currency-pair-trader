import React from "react";
import PropTypes from "prop-types";
import { getBTCQuote } from "../../utils";

const BTCQuoteScreen = ({ lastPrice, btcQuote }) => {
  return (
    <React.Fragment>
      <h2 className="trade-section">For</h2>
      <div>
        <input type="number" placeholder="BTC" disabled />
      </div>
      <div>
        <input
          type="number"
          placeholder="Quoted Price"
          value={btcQuote}
          disabled
        />
      </div>
    </React.Fragment>
  );
};

BTCQuoteScreen.propTypes = {
  lastPrice: PropTypes.number,
  btcQuote: PropTypes.string
};

export default BTCQuoteScreen;
