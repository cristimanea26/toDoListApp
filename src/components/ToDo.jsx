import React, { useState } from 'react';
import ToDoForm from './ToDoForm.jsx';
import * as FaIcons from 'react-icons/fa';

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? 'toDoRow complete' : 'toDoRow'}
    >
      <div
        key={todo.id}
        className='toDoTitle'
        onClick={() => completeTodo(todo.id)}
      >
        <h2>{todo.text}</h2>
      </div>
      <div className='toDo'>
        <FaIcons.FaRegWindowClose
          className='toDoDelete'
          onClick={() => removeTodo(todo.id)}
        />
        <FaIcons.FaEdit
          className='toDoEdit'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
};

export default ToDo;
