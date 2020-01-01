import React from "react";

const NumberButton = (props) => {
  return (
    <React.Fragment>
      <button className="number-button">
        {props.number}
      </button>
    </React.Fragment>
  );
};
export default NumberButton;
