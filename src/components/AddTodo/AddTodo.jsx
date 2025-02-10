import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault(); // 이벤트의 기본 동작을 막는 역할을 한다.
        if (text.trim().length === 0) { // 공백을 제거하기 위해
            return;
        }
        onAdd({ id: uuidv4(), text, status: 'active'});
        setText('');
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                type='text'
                placeholder='할 일을 입력해주세요'
                value={text}
                onChange={handleChange}
            />
            <button className={styles.button}>입력</button>
        </form>
    );
}

