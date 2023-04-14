import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { TodoType } from '../../app/slice/todoSlice';
import { FilterValue } from '../../app/slice/filterSlice';
import styles from './TodoList.module.css';
import { useEffect } from 'react';

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.value);
    const filter = useSelector((state: RootState) => state.filter.value);
    const filterd = getFilteredItems(todos, filter);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filterd.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
            <AddTodo />
        </section>
    );
}

function getFilteredItems(todos: TodoType[], filter: FilterValue) {
    if (filter === 'all') {
        return todos;
    } else {
        return todos.filter((todo) => todo.status === filter);
    }
}
