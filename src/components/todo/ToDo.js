import React from 'react';
import Footer from '../Footer';
import FormInput from './FormInput';
import List from './List';

const ToDo = () => {
    return (
    <div className="todo-list">
        <h1>To do List</h1>
        <FormInput></FormInput>
        <List></List>
        <Footer></Footer>
    </div>
    );
};

export default ToDo;