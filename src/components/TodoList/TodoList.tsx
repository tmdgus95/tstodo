import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.value);

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <AddTodo />
        </section>
    );
}
