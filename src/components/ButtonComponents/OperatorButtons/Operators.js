import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton.js';

const Operators = () => {
  const [ops] = useState(operators);
  return (
    <>
      {
        ops.map((operator, i) => {
          return <OperatorButton key = {i} operator = {operator} />
        })}
    </>
  );
};
export default Operators;
