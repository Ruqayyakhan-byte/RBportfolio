import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('/data.json'); 
  return response.data;            
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: '',
    status: 'idle',
    error: null
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
