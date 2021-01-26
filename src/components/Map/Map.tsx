import React, { FC, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MapStyled } from "./MapStyles";
import { Legend } from "./Legend/Legend";
import { defaultCoords } from "../../utils/defaultCoords";
import { Position } from "../../interfaces";
import { genBusMarkers } from "../../utils/genBusMarkers";

interface MapProps {
  position: Position;
}

const Map: FC<MapProps> = (props) => {
  const { position } = props;
  const { latitude, longitude } = position;
  const { allBusStops } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    console.log("position", latitude, longitude);
  }, [latitude, longitude]);

  return (
    <MapStyled w={{ base: "97%", lg: "800px" }} height={{ base: 400, md: 600 }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY!}>
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            margin: "0 auto",
            minHeight: "400px",
            minWidth: "400px",
          }}
          options={{ radius: 6000 }}
          center={{
            lat: latitude || defaultCoords.lat,
            lng: longitude || defaultCoords.lng,
          }}
          zoom={13}
        >
          <>
            <Marker
              key="my-position"
              position={{
                lat: latitude || defaultCoords.lat,
                lng: longitude || defaultCoords.lng,
              }}
            />
            <>{genBusMarkers(allBusStops)}</>
          </>
          <></>
        </GoogleMap>
      </LoadScript>
      <Legend />
    </MapStyled>
  );
};

export default React.memo(Map);
