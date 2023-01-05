import React, { FC, useRef, useState } from 'react';
import { Todo } from '../model';

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Input: FC<Props> = ({ setTodos }) => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, { id: Date.now(), describe: todo, isDone: false }];
    });
    setTodo('');
    inputRef.current?.blur();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Task:'
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type='submit'>Go</button>
    </form>
  );
};
