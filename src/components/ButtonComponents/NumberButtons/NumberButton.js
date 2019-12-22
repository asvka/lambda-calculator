import React from "react";

const NumberButton = (props) => { 
  return (
    <React.Fragment>
      <button>
        {props.number}
      </button>
    </React.Fragment>
  );
};
export default NumberButton;
