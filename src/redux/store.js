import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './appSlice';

export default configureStore({
  reducer: {
    app: counterReducer,
  },
});
