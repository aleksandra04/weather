import { Redirect, Route, Switch } from "react-router-dom";

import { Main } from "./Main";

export const cities = [
  {
    name: "Toronto",
    id: "toronto",
    lat: 43.6534817,
    lon: -79.3839347,
  },
  {
    name: "London",
    id: "london",
    lat: 51.5073219,
    lon: -0.1276474,
  },
  {
    name: "Tokyo",
    id: "tokyo",
    lat: 35.6828387,
    lon: 139.7594549,
  },
];

export type CityType = {
  name: string;
  id: string;
  lat: number;
  lon: number;
};

function App() {
  return (
    <Switch>
      <Route path="/:city" component={Main} />
      <Redirect from="/" to={`/${cities[0].id}`} />
    </Switch>
  );
}

export default App;
