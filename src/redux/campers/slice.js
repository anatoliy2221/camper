import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const initialState = {
    data: [],
    page: 1,
    hasMore: true,
    isLoading: false,
    error: null,
};

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = [...state.data, ...action.payload];
                if (action.payload.length < 4) {
                    state.hasMore = false;
                }
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

