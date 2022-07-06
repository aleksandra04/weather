import React from "react";
import { NavLink } from "react-router-dom";
import { cities } from "./App";
import "./styles/navigation.css";
import { CityType } from "./types";

export const Navigation = () => {
  return (
    <nav className="navWrapper">
      {cities.map((city: CityType) => {
        return (
          <NavLink
            to={city.id}
            key={city.id}
            className="navLink"
            activeClassName="navLink navLink--active"
          >
            {city.name.toUpperCase()}
          </NavLink>
        );
      })}
    </nav>
  );
};
