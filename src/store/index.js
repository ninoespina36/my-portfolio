import {  configureStore } from '@reduxjs/toolkit';
import workReducer from './reducers/workReducer';
import utilReducer from './reducers/utilReducer';

export default configureStore({
    reducer: {
        work: workReducer,
        util: utilReducer
    }
})