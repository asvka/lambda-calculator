import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton.js';

const Specials = () => {
  const [specs, setSpecs] = useState(specials);
  return (
    <div className = 'specials'>
      {
        specs.map((special, i) =>{
          return <SpecialButton key = {i} special = {special} />
      })}
    </div>
  );
};
export default Specials;