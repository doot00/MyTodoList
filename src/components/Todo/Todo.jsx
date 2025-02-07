import React from 'react';
import styles from './Todo.module.css';
import { IoTrashBin } from 'react-icons/fa';

export default function Todo({ todo, todoUpdate, todoDelete}) {
    const { id, text, status } = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? '완료된 일' : '해야할 일';
        todoUpdate({ ...todo, status});
    }; // status 값을 가져온다.
    const handleDelete = () => todoDelete(todo);

    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type='checkbox'
                id={id}
                checked={status === '완료된 일'}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>
                {text} 
            </label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
        
                </button>
            </span>
        </li>
    );
}

