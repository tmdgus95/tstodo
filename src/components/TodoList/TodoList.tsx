import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.value);

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
            <AddTodo />
        </section>
    );
}
