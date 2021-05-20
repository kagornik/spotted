import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authorizationReducer from "./features/authorization/authorizationSlice";
import spotifyExampleReducer from "./features/spotifyExample/spotifyEampleSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // whitelist: [],
};

const reducers = combineReducers({
  authorization: authorizationReducer,
  spotifyExample: spotifyExampleReducer,
});

const presistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: presistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
