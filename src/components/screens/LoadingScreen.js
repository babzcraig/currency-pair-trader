import React from 'react';

const LoadingScreen = ({loading, loadCount}) => {
    return (
      loading ?
      (
        // ONly show this when load count is 1. Else render the text based loader
        loadCount === 1 ?
          <div className="loading-screen">
            <div className="spinner"/>
          </div>
        : 
          <div className="text-loading-screen">
            <small>Updating BTC prices...</small>
          </div>
      )
      : null
    )
  
}

export default LoadingScreen;
