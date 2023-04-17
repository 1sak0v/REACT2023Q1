import { configureStore } from '@reduxjs/toolkit';

import formPage from '../pages/FormPage/formPageSlice';
import mainPage from '../pages/MainPage/mainPageSlice';
import { marvelApi } from '../service/apiSlice';

const store = configureStore({
  reducer: { formPage, mainPage, [marvelApi.reducerPath]: marvelApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
