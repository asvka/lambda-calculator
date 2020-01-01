import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton.js';

const Specials = () => {
  const [specs] = useState(specials);
  return (
    <>
      {
        specs.map((special, i) =>{
          return <SpecialButton key = {i} special = {special} />
      })}
    </>
  );
};
export default Specials;