// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

axios.defaults.baseURL = 'https://6624dc3304457d4aaf9d258b.mockapi.io';

// export const fetchCampers = createAsyncThunk('campers/fetchAll', async ({ limit, page }, thunkAPI) => {
//     try {
//         const { data } = await axios.get('/advert', {
//             params: {
//                 limit,
//                 page,
//             }
//         });
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });

// src/redux/campers/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async ({ limit, page }) => {
        const response = await axios.get('/advert', {
            params: { limit, page },
        });
        return response.data;
    }
);
