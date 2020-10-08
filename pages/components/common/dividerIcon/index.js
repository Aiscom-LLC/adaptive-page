import React from 'react';

const Divider = ({
  fill = '#0250bf', width = '312', className = '', reverse = false,
}) => (
  <svg
    transform={reverse ? 'rotate(180)' : ''}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width * 0.1923}
    viewBox="0 0 312 60"
  >
    <g>
      <g>
        <path
          fill={fill}
          d="M309.184 0c1 0 2 1 2 2v56c0 1-1 2-2 2h-11c-1 0-2-1-2-2V2c0-1 1-2 2-2z"
        />
      </g>
      <g>
        <path fill={fill} d="M310.352 38H0V23h310.352z" />
      </g>
    </g>
  </svg>
);

export default Divider;
