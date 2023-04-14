import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FilterValue = 'all' | 'active' | 'completed';

interface FilterState {
    value: FilterValue;
}

const initialState: FilterState = {
    value: 'all',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        onFilterChange: (state, action: PayloadAction<FilterValue>) => {
            state.value = action.payload;
        },
    },
});

export const { onFilterChange } = filterSlice.actions;

export default filterSlice.reducer;
