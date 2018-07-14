import React from 'react';

const TradeScreen = () => {
  return (
    <React.Fragment>
      <h2>Trade</h2>
      <div>
        <input type="number" placeholder="USD" disabled/>
      </div>
      <div>
        <input type="number" placeholder="Enter your amount"/>
      </div>
    </React.Fragment>
  )
}

export default TradeScreen;
