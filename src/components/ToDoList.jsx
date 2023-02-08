import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from './Animations.jsx';
import ToDo from './ToDo.jsx';
import ToDoForm from './ToDoForm.jsx';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <m.div
      className='toDoList'
      variants={fadeIn('down', 'tween', 0.75, 1)}
      initial='hidden'
      animate='show'
    >
      <div className='toDoListTitle'>
        <h1>What's the Plan for Today?</h1>
      </div>
      <div className='toDoListContainer'>
        <ToDoForm onSubmit={addTodo} />
        <ToDo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </m.div>
  );
};

export default ToDoList;
