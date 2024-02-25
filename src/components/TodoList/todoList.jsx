import React from 'react';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div className='text-center pt-6'>
    <ul>
      {todos.map((todo) => (
        <li className='text-center pt-2' key={todo.id}>
          {todo.text}
          <button 
          className="px-4 py-2 font-montserrat border border-grey-300 ml-2
           hover:bg-green-500 hover:text-white" 
           onClick={() => onUpdate(todo.id)}>Update</button>

          <button
          className="px-4 py-2 font-montserrat border border-grey-300 ml-2 
          hover:bg-red-500 hover:text-white" 
          onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
