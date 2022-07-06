import React from "react";
import { NavLink } from "react-router-dom";
import { cities } from "./App";
import "./styles/navigation.css";

type CityType = {
  name: string;
  id: string;
  lat: number;
  lon: number;
};

export class Navigation extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { color: "red" };
  }

  render() {
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
  }
}
