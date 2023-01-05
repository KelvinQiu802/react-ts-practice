import './App.css';
import React, { FC, useState } from 'react';
import { Input } from './components/Input';
import { Todo } from './model';
import { TodoList } from './components/TodoList';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className='App'>
      <h1>Tasksify</h1>
      <Input setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
