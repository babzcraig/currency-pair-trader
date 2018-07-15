import React from 'react';

const LoadingScreen = ({loading}) => {
    return (
      loading ?
      <div className="loading-screen">
        <div className="spinner"/>
      </div>
      : null
    )
  
}

export default LoadingScreen;
