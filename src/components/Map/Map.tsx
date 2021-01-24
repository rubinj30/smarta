import React, { FC } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MapStyled } from "./MapStyles";

const containerStyle = {
  height: "100%",
  margin: "0 auto",
};

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
  // default to Cox Headquarters if nothing provided
  const {
    latitude = 33.92639848579192,
    longitude = -84.35114426079765,
  } = props.position;
  const { allBusStops } = useSelector((state: RootState) => state.global);
  console.log(props.position);
  return (
    <MapStyled w={{ base: "97%", lg: "800px" }} height={{ base: 400, md: 600 }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: latitude, lng: longitude }}
          zoom={10}
        >
          <>
            <Marker
              key="my-position"
              position={{
                lat: latitude && latitude + 0.0000001,
                lng: longitude,
              }}
            />
            {allBusStops.map((stop) => {
              console.log("TOP", stop);
              return (
                <Marker
                  key={stop.STOPID}
                  draggable={false}
                  position={{
                    lat: parseInt(stop.LATITUDE),
                    lng: parseInt(stop.LONGITUDE),
                  }}
                />
              );
            })}
          </>
          <></>
        </GoogleMap>
      </LoadScript>
    </MapStyled>
  );
};

export default React.memo(Map);
