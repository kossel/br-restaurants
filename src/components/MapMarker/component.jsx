import React from 'react';
import './styles.scss';

function MapMarker({ text, className }) {
  return (
    <div className={`marker ${className}`}>
      <span className="marker__text">{text}</span>
    </div>
  );
}

export default MapMarker;
