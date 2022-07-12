import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the action

export const fetchPost = createAsyncThunk(
  'posts/list',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return data;
    } catch (err) {
      return err?.response;
    }
  }
);

// Slices

const postSlices = createSlice({
  name: 'post',
  initialState: {},
  extraReducers: {
    // Handling pending state
    [fetchPost.pending]: (state, action) => {
      state.loading = true;
    },
    // Handle fulfilled
    [fetchPost.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.loading = false;
    },
    // Handle rejection
    [fetchPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlices.reducer;
