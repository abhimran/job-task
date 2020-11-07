import React, { useContext} from 'react';
import { GqlContext } from '../../context/GqlProvider';

const UserName = () => {
  const [gqlData] = useContext(GqlContext)
  return (
      <table className="table mx-auto mt-5" style={{width: '60%'}}>
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
                gqlData.map(item=> (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
  );
};

export default UserName;


