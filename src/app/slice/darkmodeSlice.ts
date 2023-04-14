import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export interface Darkmode {
    value: boolean;
}

const initialState: Darkmode = { value: false };

export const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.value = !state.value;
        },
        setDark: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { toggleDarkMode, setDark } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
