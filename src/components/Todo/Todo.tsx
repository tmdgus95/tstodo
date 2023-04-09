import React from 'react';
import { TodoType, onDelete, onUpdate } from '../../app/slice/todoSlice';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

type Props = {
    todo: TodoType;
};

export default function Todo({ todo }: Props) {
    const dispatch = useDispatch();
    const { status, text } = todo;
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
        <li>
            <input
                type='checkbox'
                id='checkbox'
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor='checkbox'>{text}</label>
            <button onClick={handleDelete}>
                <FaTrash />
            </button>
        </li>
    );
}
