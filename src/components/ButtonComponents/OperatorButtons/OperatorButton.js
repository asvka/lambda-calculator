import React from "react";

const OperatorButton = (props) => {
  return (
    <React.Fragment>
      <button>
        {props.operator}
      </button>
    </React.Fragment>
  );
};
export default OperatorButton;
