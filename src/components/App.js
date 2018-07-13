import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className="currency-trader">
        <div className="account-balance-section">
          <h1>Account Balance</h1>
          <p>
            <span>USD :</span>
            152.12</p>
          <p>
            <span>BTC :</span>
            0.00000000</p>
        </div>

        <h2>Trade</h2>
        <div>
          <input type="number" placeholder="USD" disabled/>
        </div>
        <div>
          <input type="number" placeholder="Enter your amount"/>
        </div>

        <h2>For</h2>
        <div>
          <input type="number" placeholder="BTC" disabled/>
        </div>
        <div>
          <input type="number" placeholder="Quoted Price" disabled/>
        </div>
        <button className="main-btn">Trade</button>

      </div>
    </div>
  );
};

export default App;