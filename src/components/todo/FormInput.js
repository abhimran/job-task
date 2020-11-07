import React, { useContext,  useState } from 'react';
import { DataContext } from '../../context/DataProvider';

const FormInput = () => {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    // Add A todo
    const addTodo = (e) =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName}])
        setTodoName('')
    }
    return (
        <form className="row align-items-center justify-content-center" onSubmit={addTodo}>
            {/* Todo input form */}
            <div className="col-sm-6">
                <label className="visually-hidden">Name</label>
                <input type="text" className="form-control" placeholder="Add new task" value={todoName} onChange={e=> setTodoName(e.target.value.toLocaleLowerCase())} required/>
            </div>
  
            <div className="col-auto">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default FormInput;