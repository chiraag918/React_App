import React from 'react';
import './todo.component.scss';
import TodoList from './components/TodoList';

function ToDo() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default ToDo;