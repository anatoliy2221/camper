import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6624dc3304457d4aaf9d258b.mockapi.io';

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async ({ limit, page }) => {
        const response = await axios.get('/advert', {
            params: { limit, page },
        });
        return response.data;
    }
);
