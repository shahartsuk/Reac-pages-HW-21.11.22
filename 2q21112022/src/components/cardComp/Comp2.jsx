import React from 'react';
import "./Comps.css";
export const Comp2=(props)=>{
    return (
        <div className="list-item-container">
        <div className="list-style">
            <img className="list-image" src={require("../images/bat-man.jpg")} alt="" />
            </div>
            <div className="content">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi excepturi quae incidunt ad pariatur ducimus.
              </p>
            </div>
        </div>
    );
}
