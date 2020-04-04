import React from "react";

const Action = props => {
  return (
    <button onClick={props.handlePick} disabled={!props.hasOption}>
      What should I do?
    </button>
  );
};

export default Action;
