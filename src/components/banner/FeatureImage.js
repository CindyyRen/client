import React from 'react';
import feature from '../../assets/academic-faculty-positions.png';

const FeatureImage = () => {
  return (
<div className="relative w-full flex justify-center">
  <img src={feature} alt="Your" className="max-w-full h-auto" />
  <div className="absolute top-0 left-1/2 bg-picton-blue-300">000</div>
</div>
  );
};

export default FeatureImage;
