import React from "react";
import "./Header.css";
import "../images/marvel.jpg";

export const Header = (props) => {
  return (
    <div className="container">
      <header>
        <img
          className="image-main"
          src={require("../images/marvel.jpg")}
          alt=""
          srcset=""
        />
        <h1>Lorem ipsum dolor sit</h1>
      </header>
      <main>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          autem, laboriosam minima a error necessitatibus similique quae,
          accusamus, facere deserunt officia tempore ab eum maiores!
        </p>
      </main>
    </div>
  );
};
