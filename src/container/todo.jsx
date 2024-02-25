import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteTodos, updateTodos } from '../todoRedux/actions/todo';
import Input from '../components/Input';
import TodoList from '../components/TodoList/todoList';

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodos(text));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodos(id));
  };

  const handleUpdateTodo = (id) => {
    const newText = prompt('Enter new todo text:');
    if (newText !== null) {
      dispatch(updateTodos(id, newText));
    }
  };

  return (
    <div>
      <Input onSubmit={handleAddTodo} />
      <TodoList todos={todos} onCreate={handleAddTodo} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
    </div>
  );
};

export default Todo;
