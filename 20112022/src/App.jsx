import React from "react";

import { Routes, Route } from "react-router-dom";

import { Container } from "./components/listcontainer/Container";
import "./App.css";
import {
  AboutMe,
  HomePage,
  NotFoundPage,
  GamesPage,
  MoviesPage,
  ContactusPage,
} from "./pages/main";

export const App = () => {
  return (
    <div className="container">
      <Container />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/Contactus" element={<ContactusPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
