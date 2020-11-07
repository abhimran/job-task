import React, { useContext } from 'react';
import { CsvContext } from '../../context/CsvProvider';
import { UserContext } from '../../context/UserProvider';

const CsvTable = () => {
     const [csvData] = useContext(CsvContext)
      const [user] = useContext(UserContext)
    return (
        <div style={{width: "90%", margin: "20px auto"}}>
        <h5>User Information: </h5>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
           <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.msg}</td>
        </tr>
        </tbody>
        </table>
        
        <h5>Csv Data Info: </h5>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Max X</th>
            <th scope="col">Min X</th>
            <th scope="col">Max Y</th>
            <th scope="col">Min Y</th>
            <th scope="col">Max Z</th>
            <th scope="col">Min Z</th>
            </tr>
        </thead>
        <tbody>
           <tr>
            <td>{csvData.max_x}</td>
            <td>{csvData.min_x}</td>
            <td>{csvData.max_y}</td>
            <td>{csvData.min_y}</td>
            <td>{csvData.max_z}</td>
            <td>{csvData.min_z}</td>
        </tr>
        </tbody>
        </table>
        </div>
    );
};

export default CsvTable;

 