import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterValue, onFilterChange } from '../../app/slice/filterSlice';
import { RootState } from '../../app/store/store';

export default function Header() {
    const dispatch = useDispatch();
    const filters = ['all', 'active', 'competed'];
    const filter = useSelector((state: RootState) => state.filter.value);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selectedfilter = e.currentTarget.textContent as FilterValue;
        if (selectedfilter !== null) {
            dispatch(onFilterChange(selectedfilter));
        }
    };

    return (
        <header>
            {filters.map((filter, i) => (
                <li key={i}>
                    <button onClick={handleClick}>{filter}</button>
                </li>
            ))}
        </header>
    );
}
