import {createSlice} from "@reduxjs/toolkit";
import {IInitialAuthState} from "./types.ts";
import {signup} from "./actions.ts";


const initialState: IInitialAuthState = {
    user: null,
    loading: false,
    hasErrors: false,
    error: null
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.hasErrors = false;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.hasErrors = false;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.hasErrors = true;
                state.error = action.payload;
            })
    }
})