import React from 'react';
import styles from './Todo.module.css';
import { IoMdTrash } from 'react-icons/io';

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;
    const handleChange = (e) => {
        const updatestatus = e.target.checked ? 'complete' : 'active';
        onUpdate({ ...todo, status: updatestatus});
    }; // status 값을 가져온다.
    const handleDelete = () => onDelete(todo);

    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type='checkbox'
                id={id}
                checked={status === 'complete'}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>
                {text} 
            </label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
                    <IoMdTrash />
                </button>
            </span>
        </li>
    );
}

