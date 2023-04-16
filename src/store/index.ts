import { configureStore } from '@reduxjs/toolkit';

import formPage from '../pages/FormPage/formPageSlice';
import mainPage from '../pages/MainPage/mainPageSlice';

const store = configureStore({
  reducer: { formPage, mainPage },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
