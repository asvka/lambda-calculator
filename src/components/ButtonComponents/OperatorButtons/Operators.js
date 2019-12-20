import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton.js';

const Operators = () => {
  const [ops, setOps] = useState(operators);
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
