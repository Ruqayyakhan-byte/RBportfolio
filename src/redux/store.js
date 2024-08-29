import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Import your slice reducer

const store = configureStore({
  reducer: {
    data: dataReducer, // Add other slices if needed
  },
});

export default store;

