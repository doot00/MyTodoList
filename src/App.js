import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'active', 'complete'];
function App() {
  const [filter, setFilter] = useState(filters[0]); // 변경된 filter를 header에 전달 
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}
export default App;

