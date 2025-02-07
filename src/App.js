import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters = ['모든 할일', '해야할 일', '완료된 일'];
function App() {
  const [filter, setFilter] = useState(filters[0]); // 변경된 filter를 header에 전달 
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}
export default App;

// 