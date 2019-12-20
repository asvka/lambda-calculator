import React from "react";

const OperatorButton = (props) => {
console.log(props, 'operator button props');
  return (
    <React.Fragment>
      <button>
        {props.operator}
      </button>
    </React.Fragment>
  );
};
export default OperatorButton;
