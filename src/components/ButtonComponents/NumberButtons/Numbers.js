import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton.js';

const Numbers = () => {
  const [nums] = useState(numbers);
  return (
    <>
      {
        nums.map((number, i)=>{
        return <NumberButton key = {i} number =  {number} />
      })}
    </>
  );
};
export default Numbers;