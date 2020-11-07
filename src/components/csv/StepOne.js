import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

const StepOne = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const [user, setUser] = useContext(UserContext)
    const onSubmit = data => {
        setUser(data);
        reset();
    };
    return (
        <div className="csv_task_one">
            {/* User Input Form */}
             <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="mb-3">
                    <input type="text" name="name" ref={register({ required: true })} className="form-control" placeholder="Name*"/>
                    {errors.name && <span className="text-danger">Name is required</span>}
                 </div>
                 <div className="mb-3">
                    <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="Email*"/>
                    {errors.email && <span className="text-danger">Email is required</span>}
                 </div>
                 <div className="mb-3">
                    <textarea className="form-control" name="msg" ref={register({ required: true })} rows="3" placeholder="Your Description*"></textarea>
                    {errors.msg && <span className="text-danger">Description is required</span>}
                 </div>
            
               <input type="submit" className="btn btn-primary"/>
            </form>
            {/* Step two--> Csv File Input */}
            {
                (user.email ? <Link to="/csvInput" className="btn btn-success mt-3">Go to Step To</Link>:'')
            }
        </div>
    );
};

export default StepOne;