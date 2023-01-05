import React from 'react';
import { Todo } from '../model';
import { SingleTodo } from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};
