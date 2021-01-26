import { Action, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";

import createRootReducer from "./reducers";

const DEFAULT_STATE = {};
const MIDDLEWARE = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  thunk,
];

const rootReducer = createRootReducer();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: MIDDLEWARE,
  devTools: true,
  preloadedState: DEFAULT_STATE,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootThunk = ThunkAction<void, RootState, null, Action<string>>;
export type DispatchExts = ThunkDispatch<RootState, undefined, Action<any>>;
