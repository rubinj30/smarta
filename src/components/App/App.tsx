import * as React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Homepage } from "../Homepage/Homepage";
import { usePosition } from "use-position";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getAllBusStopsThunk } from "../../redux/ThunkActions/getAllBusStopsThunk/getAllBusStopsThunk";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";

import { RootState, store } from "../../redux/store";
import { Header } from "../Header/Header";
import theme from "../../theme";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { allBusStops } = useSelector((state: RootState) => state.global);
  const { latitude, longitude } = usePosition(false);

  useEffect(() => {
    dispatch(getAllBusStopsThunk());
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header onOpen={onOpen} />
      <Router>
        {allBusStops ? JSON.stringify(allBusStops.slice(0, 3), null, 2) : null}
        <Sidebar open={isOpen} onOpen={onOpen} onClose={onClose} />
        <Homepage longitude={longitude} latitude={latitude} />
      </Router>
    </ChakraProvider>
  );
};

const StoreContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default StoreContainer;
