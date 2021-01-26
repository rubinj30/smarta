import React from "react";
import { Route, Switch } from "react-router-dom";
import { Position } from "../../interfaces";
import { Buses } from "../Buses/Buses";
import { BusStopDetail } from "../BusStopDetail/BusStopDetail";
import Map from "../Map/Map";

export const Routes = ({ position }: { position: Position }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Map position={position} />
      </Route>
      <Route exact path="/buses">
        <Buses position={position} />
      </Route>
      <Route path="/bus-detail">
        <BusStopDetail />
      </Route>
    </Switch>
  );
};
