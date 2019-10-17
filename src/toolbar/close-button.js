import React from "react";

import "./toolbar-css/close-button.css";

const CloseButton = props => (
  <div className="closeContainer">
    <button className="closeButton" onClick={props.click}>
      <div className="closeMarker">X</div>
    </button>
  </div>
)

export default CloseButton
