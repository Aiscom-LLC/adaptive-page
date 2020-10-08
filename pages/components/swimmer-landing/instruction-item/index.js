import React from 'react';
import instructionItemStyles from './instruction-item.css';

const InstructionItem = ({
  number = '', title = '', subtitle = '', arrowType = null,
}) => (
  <>
    <div className={instructionItemStyles.item}>
      <h3 className={instructionItemStyles.number}>{number}</h3>
      <h4 className={instructionItemStyles.subtitle}>{title}</h4>
      <p className={instructionItemStyles.text}>{subtitle}</p>
    </div>
    {arrowType && <div className={instructionItemStyles[arrowType]} />}
  </>
);

export default InstructionItem;
