import React, { useState } from "react";
import { operators } from '../../../data';
import { OperatorButton } from './OperatorButton';

const Operators = () => {
  const [ops] = useState(operators);
  return (
    <div className = 'operators'>
      {
        ops.map((operator, i) => {
          return <OperatorButton key = {i} operator = {operator} />
        })}
    </div>
  );
};
export default Operators;
