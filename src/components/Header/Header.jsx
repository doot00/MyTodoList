import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
    return (
        <>
        <h2 className={styles.h2}>To Do List</h2>
        <header className={styles.header}>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index}>
                        <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={() => onFilterChange(value)}>
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
        </>
    );
}

// 
