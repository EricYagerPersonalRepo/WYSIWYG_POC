import React from 'react';
import './LoadingScreenStyle.css'; 

const LoadingView = ({text}:any) => {
  return (
    <div className="loading-view">
      <div className="spinner"></div>
      {text}
    </div>
  );
};

export default LoadingView