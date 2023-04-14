import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
export interface TodoType {
    id: string;
    text: string;
    status: 'active' | 'completed';
}

export interface TodoState {
    value: TodoType[];
}
const storedTodos = localStorage.getItem('todos');
const initialState: TodoState = {
    value: storedTodos ? JSON.parse(storedTodos) : [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        onAdd: (state, action: PayloadAction<TodoType>) => {
            state.value.push(action.payload);
        },
        onUpdate: (state, action: PayloadAction<TodoType>) => {
            state.value = state.value.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        },
        onDelete: (state, action: PayloadAction<TodoType>) => {
            state.value = state.value.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
    },
});

export const { onAdd, onUpdate, onDelete } = todoSlice.actions;

export default todoSlice.reducer;
