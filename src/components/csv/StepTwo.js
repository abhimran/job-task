import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import { useForm } from "react-hook-form";
import * as d3 from 'd3';
import { CsvContext } from '../../context/CsvProvider';
import { Link } from 'react-router-dom';

const StepTwo = () => {
    const [csvData, setCsvData] = useContext(CsvContext)
    const [user] = useContext(UserContext)
    const [parsed, setParsed ] = useState({});
    const uploadFile = useRef(null);
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = data => {
        if(data){
            setCsvData(data);
            reset();
        }
    };

    const handleFiles = () => {
        // Load csv File
        (async ()=>{
            const text = await uploadFile.current.files[0].text();
            const data = await d3.csvParse(text);
            setParsed(data);
        })();
    }
 
    // Get Data for x, y, z
    function getValue(value){
        if(Object.keys(parsed).length !== 0){
            if(value === "X"){
                return parsed.map(d => d.X);
            }
            if(value === "Y"){
            return parsed.map(d => d.Y);
            }
            if(value === "Z"){
            return parsed.map(d => d.Z);
            }
        } else{
            return {}
        }
    }
     // Max value   
    function getMin(value){
        if(Object.keys(parsed).length !== 0){
        return Math.min(...getValue(value));
        }else{
            return {}
        }
    }
    //Min Value
    function getMax(value){
        if(Object.keys(parsed).length !== 0){
            return Math.max(...getValue(value));
        }else{
            return {}
        }
    }

    return (
        <div className="csv_task_one">
            <h5>User Information</h5>
            {/* Auto upload from csv */}
           <form>
                <fieldset disabled aria-label="Disabled fieldset example">
                    <div className="mb-3">
                    <input type="text" id="disabledTextInput" className="form-control" defaultValue={user.name} />
                    </div>
                    <div className="mb-3">
                    <input type="email" id="disabledTextInput" className="form-control" defaultValue={user.email} />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" name="msg"  rows="3" defaultValue={user.msg}></textarea>
                    </div>
                </fieldset>
        </form>

        {/* Import CSV */}

        <h5>Import CSV file: </h5>

        <div>
             <input ref={uploadFile} onChange={handleFiles} type="file" id="input" multiple/>
       </div>

        <h5>File Data:</h5> 

    <form className="row gx-3 gy-2 align-items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-sm-3">
            <label>Max X: </label>
            <input type="text" name="max_x" ref={register({ required: true })} className="form-control" defaultValue={(Object.keys(parsed).length !== 0) ? getMax('X'): ''}/>
            {errors.max_x && <span className="text-danger">Required</span>}
        </div>
        <div className="col-sm-3">
            <label>Min X: </label>
            <input type="number" name="min_x" ref={register({ required: true })} className="form-control" defaultValue={(Object.keys(parsed).length !== 0) ? getMin('X'): ''}/>
            {errors.min_x && <span className="text-danger">Required</span>}
        </div>
        <div className="col-sm-3">
            <label>Max Y: </label>
            <input type="number" name="max_y" ref={register({ required: true })} className="form-control" defaultValue={(Object.keys(parsed).length !== 0) ? getMax('Y'): ''}/>
            {errors.max_y && <span className="text-danger">Required</span>}
        </div>
        <div className="col-sm-3">
            <label>Min Y: </label>
            <input type="number" name="min_y" ref={register({ required: true })} className="form-control" defaultValue={(Object.keys(parsed).length !== 0) ? getMin('Y'): ''}/>
            {errors.min_y && <span className="text-danger">Required</span>}
        </div>
        <div className="col-sm-3">
            <label>Max Z: </label>
            <input type="number" name="max_z" ref={register({ required: true })} className="form-control" defaultValue={(Object.keys(parsed).length !== 0) ? getMax('Z'): ''}/>
            {errors.max_z && <span className="text-danger">Required</span>}
        </div>
        <div className="col-sm-3">
            <label>Min Z: </label>
            <input type="number" name="min_z" ref={register({ required: true })} className="form-control" defaultValue={(Object.keys(parsed).length !== 0) ? getMin('Z'): ''}/>
            {errors.min_z && <span className="text-danger">Required</span>}
        </div>
         <input type="submit" className="btn btn-primary"/>
    </form>
    {
        ((Object.keys(csvData).length !== 0) ? <Link to="/csvTable" className="btn btn-success mt-3">Go to Step Three</Link>: '')
    }

</div>
    );
};

export default StepTwo;