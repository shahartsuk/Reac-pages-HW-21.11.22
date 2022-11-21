import React from 'react';

import {Link } from "react-router-dom";

import "./Container.css";

import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

export const Container=(props)=> {
    return (
        <div className="list">
        <ul>
          <li>
            <Link className="Links" to="/home">
              <HomeIcon fontSize="large" className="icons" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/about">
              <InfoIcon fontSize="large" className="icons" />
              <div className="section-name">About</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/Contactus">
              <PhoneIcon fontSize="large" className="icons" />{" "}
              <div className="section-name">Contact us</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/movies">
              <OndemandVideoIcon fontSize="large" className="icons" />
              <div className="section-name">Movies</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/games">
              <SmartToyIcon fontSize="large" className="icons" />{" "}
              <div className="section-name">Games</div>
            </Link>
          </li>
          <li className="not-found">
            <Link className="Links not-found" to="/">
              <ZoomOutIcon fontSize="large" className="icons" />
              <div className="section-name">Not Found</div>
            </Link>
          </li>
        </ul>
      </div>
    );
}
