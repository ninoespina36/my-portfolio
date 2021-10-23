import { createSlice } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    mobileNavActive: false
  },
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNavActive = !state.mobileNavActive;
    },
  }
})

export const { 
    toggleMobileNav, 
} = utilsSlice.actions;

export default utilsSlice.reducer;