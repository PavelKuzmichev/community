import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from '../services/login';
import userReducer from "./reducers/user";
import tokenReducer from "./reducers/token"
import trackReducer from "./reducers/track"
import { tracksApi } from '../services/tracks';

export const store = configureStore({
    reducer: {
      user: userReducer,
      token: tokenReducer,
      currentTrack: trackReducer,
      [tracksApi.reducerPath]: tracksApi.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
    },
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tracksApi.middleware).concat(loginApi.middleware),
  });