import React from "react";

const NumberButton = (props) => {
  console.log(props, 'number button props');
  return (
    <React.Fragment>
      <button>
        {props.number}
      </button>
    </React.Fragment>
  );
};
export default NumberButton;
