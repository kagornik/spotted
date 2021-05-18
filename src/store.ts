import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authorizationReducer from "./features/authorization/authorizationSlice";
import spotifyExampleReducer from "./features/spotifyExample/spotifyEampleSlice";

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    spotifyExample: spotifyExampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
