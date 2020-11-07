import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import ListItem from './ListItem';

const List = () => {
    const [todos, setTodos] = useContext(DataContext);
    // New todo
    const handleComplete = (id) =>{
        const newTodos = [...todos]
        newTodos.forEach((item, i)=>{
            if(i === id){
                item.complete = !item.complete;
            }
        })
        setTodos(newTodos);
    }
    return (
        <ul className="list-group d-flex justify-content-center mt-5 m-auto" style={{width: "80%"}}>
            {
                todos.map((item, i)=> <ListItem key={i} todo={item} id={i} handleComplete={handleComplete}></ListItem>)
            }
        </ul>
    );
};

export default List;