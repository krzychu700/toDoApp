import React from "react";
import "./style.scss";

export const Item = (props) => {
    return (
    <div className="item_container">
      <p>{props.text}</p>
    </div>
    );
}