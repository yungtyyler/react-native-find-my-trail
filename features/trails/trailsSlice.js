import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl'; 

export const fetchTrails = createAsyncThunk(
    'trails/fetchTrails',
    async () => {
        const response = await fetch(baseUrl + 'trails');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch trails from the server: ' + response.status
            );
        }

        const data = await response.json();
        return data;
    }
)

const trailsSlice = createSlice({
    name: 'trails',
    initialState: {
        trailsArray: [],
        isLoading: 'idle',
        errMess: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTrails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.trailsArray = action.payload;
            })
            .addCase(fetchTrails.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error ? action.error.message : 'Fetch Failed';
            });
    }
});

export const trailsReducer = trailsSlice.reducer;