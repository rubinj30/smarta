import { BusStop } from "../interfaces";
import { Marker } from "@react-google-maps/api";

export const genBusMarkers = (points: BusStop[]) => {
  return points.map((point, i) => (
    <Marker
      key={point.BLOCKID + i}
      draggable={false}
      position={{
        lat: parseFloat(point.LATITUDE),
        lng: parseFloat(point.LONGITUDE),
      }}
      icon={{
        url: `http://maps.google.com/mapfiles/ms/icons/blue-dot.png`,
      }}
    />
  ));
};
