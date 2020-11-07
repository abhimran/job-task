import React, { createContext, useEffect, useState } from 'react';
export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    //Get todo from localstorage
    useEffect(()=>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'));
        if(todoStore){
            setTodos(todoStore)
        }
    }, [])
    //Set todo on localstorage
    useEffect(()=>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])
    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;