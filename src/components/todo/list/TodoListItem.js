import React from 'react';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {

  const Toggle = (e) => {
    e.preventDefault();
    handleToggle(index);
    e.currentTarget.style.textDecoration = todo.done ? "line-through" : "none"
  }

  const Delete = (e) => {
    e.preventDefault();
    handleDelete(index);
  }

  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={Toggle}>
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={Delete}
      >
        Borrar
      </button>
    </li>
  );
};
