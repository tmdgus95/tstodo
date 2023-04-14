import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterValue, onFilterChange } from '../../app/slice/filterSlice';
import { RootState } from '../../app/store/store';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from './Header.module.css';
import { setDark, toggleDarkMode } from '../../app/slice/darkmodeSlice';

export default function Header() {
    const dispatch = useDispatch();
    const filters = ['all', 'active', 'completed'];
    const darkmode = useSelector((state: RootState) => state.darkmode.value);
    const nowfilter = useSelector((state: RootState) => state.filter.value);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selectedfilter = e.currentTarget.textContent as FilterValue;
        if (selectedfilter !== null) {
            dispatch(onFilterChange(selectedfilter));
        }
    };
    const handleDarkMode = () => {
        dispatch(toggleDarkMode());
        updateDarkMode(!darkmode);
    };
    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        dispatch(setDark(isDark));
        updateDarkMode(darkmode);
    }, []);

    return (
        <header className={styles.header}>
            <button onClick={handleDarkMode} className={styles.toggle}>
                {!darkmode && <HiMoon />}
                {darkmode && <HiSun />}
            </button>
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

function updateDarkMode(darkmode: boolean) {
    if (darkmode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}
