import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    productValue: []
  },
  reducers: {
    setProductdata: (state, action) => {
      state.productValue = action.payload
    }
  },
  extraReducers: {
  }
});

export const { setProductdata } = authSlice.actions;
export default authSlice.reducer;





