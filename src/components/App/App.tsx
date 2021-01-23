import * as React from "react";
import { ChakraProvider, theme, useDisclosure } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { HiMenu } from "react-icons/hi";
import { Homepage } from "../Homepage/Homepage";
import { usePosition } from "use-position";
import { useEffect } from "react";
import { getAllBuses } from "../../services/bus/bus";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { latitude, longitude } = usePosition(false);
  const [busRoutes, setBusRoutes] = React.useState([]);

  useEffect(() => {
    // get bus and train routes and add to state to distribute to components]
    getAllBuses().then((data) => {
      setBusRoutes(data);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {busRoutes ? JSON.stringify(busRoutes.slice(0, 3), null, 2) : null}
      <Header />
      <Homepage longitude={longitude} latitude={latitude} />
      <HiMenu size="2em" style={{ margin: "10px" }} onClick={onOpen} />
      <Sidebar open={isOpen} onOpen={onOpen} onClose={onClose} />
    </ChakraProvider>
  );
};
