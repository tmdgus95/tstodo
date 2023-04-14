import React from 'react';
import { TodoType, onDelete, onUpdate } from '../../app/slice/todoSlice';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import styles from './Todo.module.css';

type Props = {
    todo: TodoType;
};

export default function Todo({ todo }: Props) {
    const dispatch = useDispatch();
    const { status, text, id } = todo;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const status: 'active' | 'completed' = e.target.checked
            ? 'completed'
            : 'active';
        dispatch(onUpdate({ ...todo, status }));
    };
    const handleDelete = () => {
        dispatch(onDelete(todo));
    };
    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={id}
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>
                {text}
            </label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
                    <FaTrash />
                </button>
            </span>
        </li>
    );
}
