import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slice/todoSlice';
import filterSlice from '../slice/filterSlice';

export const store = configureStore({
    reducer: {
        todo: todoSlice,
        filter: filterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
