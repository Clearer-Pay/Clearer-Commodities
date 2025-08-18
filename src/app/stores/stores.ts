import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { commonStore } from "./commonStore";

export const store = configureStore({
  reducer: { common: commonStore.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
