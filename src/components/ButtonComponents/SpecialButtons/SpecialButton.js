import React from "react";

const SpecialButton = (props) => {
  return (
    <React.Fragment>
      <button>
        {props.special}
      </button>
    </React.Fragment>
  );
};
export default SpecialButton;