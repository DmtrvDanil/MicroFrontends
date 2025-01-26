import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { store } from "../app/store";
import { useDispatch } from "react-redux";

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispath = useDispatch.withTypes<AppDispatch>();

export type AppThunk<R = void> = ThunkAction<
    R,
    AppState,
    unknown,
    UnknownAction
>;