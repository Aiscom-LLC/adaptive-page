import React from 'react';

const Arrow = ({
  fill = '#008DFF',
  width = '86',
  viewBox = '0 0 86 90',
  className = '',
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={width * 1.0465} viewBox={viewBox}>
    <g>
      <g opacity=".6">
        <path
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit="50"
          strokeWidth="8"
          d="M5.053 85.503l40.65-40.65"
        />
      </g>
      <g opacity=".6">
        <path
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit="50"
          strokeWidth="8"
          d="M45.702 44.853L5.052 4.203"
        />
      </g>
      <g opacity=".6">
        <path
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit="50"
          strokeWidth="8"
          d="M40.298 85.503l40.65-40.65"
        />
      </g>
      <g opacity=".6">
        <path
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit="50"
          strokeWidth="8"
          d="M80.947 44.853l-40.65-40.65"
        />
      </g>
    </g>
  </svg>
);

export default Arrow;
