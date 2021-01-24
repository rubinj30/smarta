import {
  Action,
  AnyAction,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";

import createRootReducer from "./reducers";

const DEFAULT_STATE = {};
const MIDDLEWARE = [...getDefaultMiddleware(), thunk];

const rootReducer = createRootReducer();

export const store = configureStore({
  reducer: rootReducer,
  middleware: MIDDLEWARE,
  devTools: true,
  preloadedState: DEFAULT_STATE,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootThunk = ThunkAction<void, RootState, null, Action<string>>;
export type DispatchExts = ThunkDispatch<RootState, undefined, Action<any>>;
