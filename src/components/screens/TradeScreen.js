import React from "react";
import PropTypes from "prop-types";

const TradeScreen = ({ amountToBuy, onInputChange }) => {
  return (
    <React.Fragment>
      <h2 className="trade-section">Trade</h2>
      <div>
        <input type="number" placeholder="USD" disabled />
      </div>
      <div>
        <input
          className="amount-to-buy"
          type="text"
          placeholder="Enter your amount"
          onChange={onInputChange}
          value={amountToBuy}
        />
      </div>
    </React.Fragment>
  );
};

TradeScreen.propTypes = {
  amountToBuy: PropTypes.string,
  onInputChange: PropTypes.func
};

export default TradeScreen;
