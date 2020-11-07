import React, { createContext, useEffect, useState } from 'react';
export const UserContext = createContext();
const UserProvider = ({children}) => {
     const [user, setUser] = useState([])

     //get data
     useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('userData'));
        if(userData){
            setUser(userData)
        }
    }, [])

    //set Data
    useEffect(()=>{
        localStorage.setItem('userData', JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;