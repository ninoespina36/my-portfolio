import {  configureStore } from '@reduxjs/toolkit';
import workReducer from './reducers/workReducer';
import utilsReducer from './reducers/utilsReducer';

export default configureStore({
    reducer: {
        work: workReducer,
        utils: utilsReducer
    }
})