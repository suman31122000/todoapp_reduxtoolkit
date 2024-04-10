import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './slice/todoslice'
 export const store=configureStore({
    reducer:{
      todo:todoSlice,
    },
 })