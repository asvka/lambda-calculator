import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton.js';

const Numbers = () => {
  const [nums, setNums] = useState(numbers);
  return (
    <div className = 'numbers'>
      {
        nums.map((number, i)=>{
        return <NumberButton key = {i} number =  {number} />
      })}
    </div>
  );
};
export default Numbers;