import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAdd } from '../../app/slice/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim().length === 0) {
            return;
        }
        dispatch(onAdd({ id: uuidv4(), text, status: 'active' }));
        setText('');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type='text'
                placeholder='Add Todo'
                value={text}
                onChange={handleChange}
            />
            <button className={styles.button}>Add</button>
        </form>
    );
}
