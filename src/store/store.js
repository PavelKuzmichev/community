import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from '../services/login';

import { tracksApi } from '../services/tracks';

export const store = configureStore({
    reducer: {
      [tracksApi.reducerPath]: tracksApi.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
    },
    currentTrack: {},
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tracksApi.middleware).concat(loginApi.middleware),
  });