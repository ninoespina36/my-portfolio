import { createSlice } from '@reduxjs/toolkit';

const utilSlice = createSlice({
  name: 'util',
  initialState: {
    isDarkMode: false,
    mobileNavActive: false
  },
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNavActive = !state.mobileNavActive;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  }
})

export const { 
    toggleMobileNav,
    toggleDarkMode
} = utilSlice.actions;

export default utilSlice.reducer;