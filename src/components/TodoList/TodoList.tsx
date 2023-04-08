import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.value);
    console.log(todos);

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </section>
    );
}
