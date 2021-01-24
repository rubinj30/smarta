import * as React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Homepage } from "../Homepage/Homepage";
import { usePosition } from "use-position";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllBusStopsThunk } from "../../redux/ThunkActions/getAllBusStopsThunk/getAllBusStopsThunk";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";

import { store } from "../../redux/store";
import { Header } from "../Header/Header";
import theme from "../../theme";
import { setError } from "../../redux/Features/Global/globalSlice";
import Map from "../Map/Map";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const position = usePosition(false);

  useEffect(() => {
    dispatch(getAllBusStopsThunk());
    // if (!localStorage.getItem('position')) {
    //   const position = usePosition(false);
    //   if (position.errorMessage) {
    //     dispatch(setError('Unable to get user\'s location'))
    //   }
    //   localStorage.setItem('position', position)
    // }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header onOpen={onOpen} />
      <Router>
        <Sidebar open={isOpen} onOpen={onOpen} onClose={onClose} />
        <Switch>
          <Route exact path="/">
            <Map position={position} />
          </Route>
          <Route exact path="/buses">
            <Buses />
          </Route>
          <Route>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export const Buses = () => {
  return <div> Buses</div>;
};

const StoreContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default StoreContainer;
