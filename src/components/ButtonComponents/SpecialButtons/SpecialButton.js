import React from "react";

const SpecialButton = (props) => {
  console.log(props, 'special button props');
  return (
    <React.Fragment>
      <button>
        {props.special}
      </button>
    </React.Fragment>
  );
};
export default SpecialButton;