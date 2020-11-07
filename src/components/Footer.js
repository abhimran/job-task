import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
const Footer = () => {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);
    const handleCheckAll = () =>{
        const newTodos = [...todos]
         newTodos.forEach(item=>{
            item.complete = !checkAll;
        })
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }
    
    const handleDelete = () =>{
        const newTodos = todos.filter(item=>{
            return item.complete === false;
        })
        setTodos(newTodos);
        setCheckAll(false);
    }
    return (
        <>
            {todos.length === 0 ? (
                <h5 className="text-center text-danger">No Todo Found! </h5>
            ):(
            <ul className="list-group d-flex justify-content-center mt-5 m-auto" style={{width: "80%"}}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label htmlFor="all">
                        <input className="form-check-input mr-1" type="checkbox" name="all" onChange={handleCheckAll} checked={checkAll}/> All
                    </label>
                        <span>You have {todos.length} todo</span>    
                    <span>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete All</button>
                    </span>
                </li>
            </ul>
            )}
        </>
    );
};

export default Footer;