import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getCampersPage } from './operations';

const initialState = {
    data: [],
    isLoading: false,
    isAllLoad: false,
    error: null,
};

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(fetchCampers.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(getCampersPage.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCampersPage.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (payload.length === 0) {
                    state.isAllLoad = true;
                } else {
                    state.data.push(...payload);
                    if (payload.length < 4) {
                        state.isAllLoad = true;
                    }
                }
            })
            .addCase(getCampersPage.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }),
});

export const campersReducer = campersSlice.reducer;

