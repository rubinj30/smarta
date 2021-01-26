import * as React from "react";
import { ChakraProvider, useDisclosure, Text } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";
import { usePosition } from "use-position";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getAllBusStopsThunk } from "../../redux/ThunkActions/getAllBusStopsThunk/getAllBusStopsThunk";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { RootState, store } from "../../redux/store";
import { Header } from "../Header/Header";
import theme from "../../theme";
import { Routes } from "../Routes/Routes";
import { getAllTrainArrivalsThunk } from "../../redux/ThunkActions/getAllTrainArrivalsThunk/getAllTrainArrivalsThunk";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const position = usePosition(false);

  const { error } = useSelector((state: RootState) => state.global);
  useEffect(() => {
    // TODO: wrap in a single thunk that handles loading/errors for both
    dispatch(getAllBusStopsThunk());
    dispatch(getAllTrainArrivalsThunk());
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header onOpen={onOpen} btnRef={btnRef} />
      <Router>
        <Sidebar
          open={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          btnRef={btnRef}
        />
        <Routes position={position} />
      </Router>
    </ChakraProvider>
  );
};

let persistor = persistStore(store);
const StoreContainer = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default StoreContainer;
