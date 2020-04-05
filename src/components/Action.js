import React from "react";

const Action = props => {
  return (
    <button
      onClick={props.handlePick}
      disabled={!props.hasOption}
      className="big-button"
    >
      What should I do?
    </button>
  );
};

export default Action;
