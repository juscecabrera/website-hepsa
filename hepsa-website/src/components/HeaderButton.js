import React from "react";
import "../stylesheets/main.css"

function HeaderButton (props) {
    return (
      <div className="header-button-wrapper">
          <a className="header-button-text" href={props.section}>{props.text}</a>
          <div className="header-button-bottom-bar" />
      </div>
    )
}

export default HeaderButton;