import React from 'react';
import PropTypes from 'prop-types';


const TradeScreen = ({amountToBuy, onInputChange}) => {
  console.log('in trade screen: ', amountToBuy)
  return (
    <React.Fragment>
      <h2>Trade</h2>
      <div>
        <input type="number" placeholder="USD" disabled/>
      </div>
      <div>
        <input type="text" placeholder="Enter your amount" onChange={onInputChange} value={amountToBuy}/>
      </div>
    </React.Fragment>
  )
}

TradeScreen.propTypes = {
  amountToBuy: PropTypes.string,
  onInputChange: PropTypes.func
}

export default TradeScreen;
