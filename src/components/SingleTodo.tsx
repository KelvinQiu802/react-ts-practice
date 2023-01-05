import React, { useRef } from 'react';
import { Todo } from '../model';

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.describe);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
    }
  };

  const handleFinishEdit = (id: number) => {
    setEdit(false);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, describe: editText } : todo
      )
    );
  };

  return (
    <div className='todo'>
      {edit ? (
        <input
          type='text'
          value={editText}
          onBlur={() => handleFinishEdit(todo.id)}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus={true}
        />
      ) : todo.isDone ? (
        <s>{todo.describe} </s>
      ) : (
        <span>{todo.describe} </span>
      )}
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
        <button onClick={() => handleDone(todo.id)}>Done</button>
      </div>
    </div>
  );
};
