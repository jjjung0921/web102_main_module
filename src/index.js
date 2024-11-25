import React from "react";

const element = (props) => {
  let path = `assets/icon${props.index}.png`;

  return(
    <p>
      <img src={path} alt="icon image" /><br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
  );
};

export default element;