import React from 'react';
import classnames from 'classnames';
import closeStyles from './close.css';

const Close = props => (
  <div {...props} className={classnames(closeStyles.close, props.className || '')} aria-label="Закрыть">
    <div className={closeStyles.container}>
      <span />
      <span />
    </div>
  </div>
);

export default Close;
