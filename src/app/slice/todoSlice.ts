import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: string;
    text: string;
    status: 'active' | 'completed';
}

export interface TodoState {
    value: Todo[];
}

const initialState: TodoState = {
    value: [
        { id: '123', text: '장보기', status: 'active' },
        { id: '124', text: '공부하기', status: 'active' },
    ],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            state.value.push(action.payload);
        },
        // increment: (state) => {
        //     state.value += 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

export const { onAdd } = todoSlice.actions;

export default todoSlice.reducer;
