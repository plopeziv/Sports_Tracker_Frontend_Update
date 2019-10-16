import React from "react";

import "./toolbar-css/close-button.css";

const CloseButton = props => (
  <button className="closeButton" onClick={props.click}>
    <div className="closeMarker">X</div>
  </button>
)

export default CloseButton
