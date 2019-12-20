import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';


const Numbers = () => {
  const [nums] = useState(numbers);
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