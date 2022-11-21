import React from "react";
import "./Comps.css";

export const Comp1 = (props) => {
  return (
    <div className="list-item-container">
      <div className="list-style">
        <img
          className="list-image"
          src={require("../images/iron-man.jpg")}
          alt=""
          srcset=""
        />
        </div>
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            excepturi quae incidunt ad pariatur ducimus.
          </p>
        </div>
      </div>
  );
};
