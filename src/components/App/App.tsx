import * as React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";
import { usePosition } from "use-position";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllBusStopsThunk } from "../../redux/ThunkActions/getAllBusStopsThunk/getAllBusStopsThunk";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { RootState, store } from "../../redux/store";
import { Header } from "../Header/Header";
import theme from "../../theme";
import Map from "../Map/Map";
import { Buses } from "../Buses/Buses";
import { BusStopDetail } from "../BusStopDetail/BusStopDetail";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const position = usePosition(false);
  useEffect(() => {
    dispatch(getAllBusStopsThunk());
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
export const Routes = ({ position }: any) => {
  return (
    <Switch>
      <Route exact path="/">
        <Map position={position} />
      </Route>
      <Route exact path="/buses">
        <Buses />
      </Route>
      <Route>
        <BusStopDetail />
      </Route>
    </Switch>
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
