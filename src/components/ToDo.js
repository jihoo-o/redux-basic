import React from 'react';

const ToDo = ({ id, text, onDelete }) => (
    <li id={id}>
        {text}
        <button onClick={(e) => onDelete(e.target.closest('li').id)}>X</button>
    </li>
);

export default ToDo;
