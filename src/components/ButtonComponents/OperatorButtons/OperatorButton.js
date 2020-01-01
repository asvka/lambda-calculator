import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <button className="operator-button">
        {props.operator.char}
      </button>
    </React.Fragment>
  );
};
export default OperatorButton;
