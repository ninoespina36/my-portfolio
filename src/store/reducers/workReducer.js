import { createSlice } from '@reduxjs/toolkit';

const workSlice = createSlice({
  name: 'works',
  initialState: {
    work: {}
  },
  reducers: {
    setWork: (state, { payload }) => {
      state.work = payload;
    },
    removeWork: state => {
      state.work = {};
    }
  }
})

export const { 
  setWork, 
  removeWork 
} = workSlice.actions;

export default workSlice.reducer;