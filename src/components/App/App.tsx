import * as React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Homepage } from "../Homepage/Homepage";
import { usePosition } from "use-position";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllBusStopsThunk } from "../../redux/ThunkActions/getAllBusStopsThunk/getAllBusStopsThunk";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";

import { RootState, store } from "../../redux/store";
import { Header } from "../Header/Header";
import theme from "../../theme";
import Map from "../Map/Map";
import { Buses } from "../Buses/Buses";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const position = usePosition(false);
  const { loading } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    dispatch(getAllBusStopsThunk(position));
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
        {loading ? (
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
        ) : null}
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
