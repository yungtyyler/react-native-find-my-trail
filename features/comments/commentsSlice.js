import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl'; 

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch comments from the server: ' + response.status
            );
        }

        const data = await response.json();
        return data;
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsArray: [],
        isLoading: 'idle',
        errMess: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.commentsArray = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error ? action.error.message : 'Fetch Failed';
            });
    }
});

export const getCommentsByTrialId = (trailId) => (state) => {
    return (
        state.comments.commentsArray.filter((comment) => comment.trailId === trailId)
    );
}

export const commentsReducer = commentsSlice.reducer;