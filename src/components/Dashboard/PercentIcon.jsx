import React, { useState, useEffect } from 'react';

const AnimatedCircle = ({ percentage, color, remainingColor }) => {
  const [dashArray, setDashArray] = useState('0 251.327');
  const circumference = 2 * Math.PI * 40;
  const strokeWidth = 10;
  const gap = 20;

  useEffect(() => {
    var gapSize = 30;

    if(percentage<30){
      gapSize =   gapSize + 120
    }

    const dashValue = `${(percentage / 100) * (circumference - gap - gapSize)} ${circumference - gapSize}`;
    setDashArray(`0 ${circumference - gapSize}`);

    setTimeout(() => {
      setDashArray(dashValue);
    }, 100);
  }, [percentage]);

  const remainingPercentage = 100 - percentage;
  const remainingDashValue = `${(remainingPercentage / 100) * (circumference - gap)} ${circumference}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60" height="60">
      {/* Red Circle for the Specified Percentage */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: `-${gap / 2}`,
          strokeLinecap: 'round',
          transition: 'stroke-dasharray 1s',
        }}
      />

      {/* Gray Circle for the Remaining Percentage */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={remainingColor}
        strokeWidth={strokeWidth}
        fill="none"
        style={{
          strokeDasharray: remainingDashValue,
          strokeDashoffset: `-${(percentage / 100) * (circumference - gap) + gap / 2}`,
          strokeLinecap: 'round',
        }}
      />
    </svg>
  );
};

export default AnimatedCircle;
