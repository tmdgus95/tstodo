import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterValue, onFilterChange } from '../../app/slice/filterSlice';
import { RootState } from '../../app/store/store';
import styles from './Header.module.css';

export default function Header() {
    const dispatch = useDispatch();
    const filters = ['all', 'active', 'completed'];
    const nowfilter = useSelector((state: RootState) => state.filter.value);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selectedfilter = e.currentTarget.textContent as FilterValue;
        if (selectedfilter !== null) {
            dispatch(onFilterChange(selectedfilter));
        }
    };

    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {filters.map((filter, i) => (
                    <li key={i}>
                        <button
                            className={`${styles.filter} ${
                                nowfilter === filter && styles.selected
                            }`}
                            onClick={handleClick}
                        >
                            {filter}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
