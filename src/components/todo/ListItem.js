import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ListItem = ({todo,id, handleComplete}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <label htmlFor={id} className={todo.complete ? 'active' : ''}>
                <input className="form-check-input mr-1" type="checkbox" id={id} checked={todo.complete} onChange={()=> handleComplete(id)}/>
                {todo.name}
            </label>
            {/* Datetime */}
                <span className={todo.complete ? 'active' : ''}>
                {new Date().getFullYear() + '.'}
                {new Date().getMonth() + '.'}
                {new Date().getDate()}
                </span>  
            {/* Logo */}
            <span className="badge bg-primary rounded-pill" >
                <FontAwesomeIcon icon={faStar} className={todo.complete ? 'active' : ''}/>
            </span>
        </li>
    );
};

export default ListItem;