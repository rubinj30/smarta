import React, { FC, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MapStyled } from "./MapStyles";
import { Legend } from "./Legend/Legend";
import { defaultCoords } from "../../utils/defaultCoords";

interface MapProps {
  position: {
    latitude: number | undefined;
    longitude: number | undefined;
    timestamp: number | undefined;
    accuracy: number | undefined;
    errorMessage: string | undefined;
  };
}

const Map: FC<MapProps> = (props) => {
  const {
    latitude = defaultCoords.lat,
    longitude = defaultCoords.lng,
  } = props.position;
  const { allBusStops } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    console.log("helloooo", latitude, longitude);
  }, [latitude, longitude]);

  return (
    <MapStyled w={{ base: "97%", lg: "800px" }} height={{ base: 400, md: 600 }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY!}>
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            margin: "0 auto",
          }}
          center={{ lat: latitude, lng: longitude }}
          zoom={14}
        >
          <>
            <Marker
              key="my-position"
              position={{
                lat: latitude && latitude + 0.0000001,
                lng: longitude,
              }}
            />
            {allBusStops.map((stop, i) => {
              return (
                <Marker
                  key={stop.BLOCKID + i}
                  draggable={false}
                  position={{
                    lat: parseFloat(stop.LATITUDE),
                    lng: parseFloat(stop.LONGITUDE),
                  }}
                  icon={{
                    url:
                      "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  }}
                />
              );
            })}
          </>
          <></>
        </GoogleMap>
      </LoadScript>
      <Legend />
    </MapStyled>
  );
};

export default React.memo(Map);
