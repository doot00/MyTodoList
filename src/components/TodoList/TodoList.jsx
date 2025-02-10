import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(() => todosLocalStorage());
    // Add, Update, Delete 써놧네 ㅋㅋㅋㅋㅋㅋㅋ  

    const handleAdd = (todo) => setTodos([...todos, todo]);
    const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id) === updated.id ? updated : t));
    const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id)); // 삭제
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filtered = allFilteredItems(todos, filter);
    
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/> 
                ))}
            </ul>
            <div className='none'>
            <AddTodo onAdd={handleAdd}/>
            </div>
        </section>
    );
}

function todosLocalStorage(){
    console.log('readTodosFromLocalStorage');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}


function allFilteredItems(todos, filter){
    if(filter === 'all') {
        return todos; // 기존의 모든 todos
    }
    return todos.filter((todo) => todo.status === filter);
}