import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./auth/slice.ts";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
