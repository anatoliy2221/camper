import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6624dc3304457d4aaf9d258b.mockapi.io';
const perPage = 4;

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`/advert?&page=1&limit=${perPage}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getCampersPage = createAsyncThunk('campers/getCampersPage', async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/advert?&page=${page}&limit=${perPage}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})