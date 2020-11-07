import React, { createContext, useEffect, useState } from 'react';
import gql from 'graphql-tag';
import {useQuery } from 'react-apollo-hooks';


export const GqlContext = createContext();


const GET_USERS = gql(`
 query (
  $options: PageQueryOptions
) {
  users(options: $options) {
    data {
      id
      username
      email
    }
  }
}
`);
const GqlProvider = ({children}) => {
     const { data } = useQuery(GET_USERS);
        const [gqlData, setGqlData] = useState([])

        useEffect(()=>{
        if(data){
            setGqlData(data.users.data)
        }
        },[data])
       
        // Get Data from local Storage
        useEffect(()=>{
            const csvStore = JSON.parse(localStorage.getItem('gqlStore'));
            if(csvStore){
                setGqlData(csvStore)
            }
        }, [])
        // Save Data on LocalStorage
        useEffect(()=>{
            localStorage.setItem('gqlStore', JSON.stringify(gqlData))
        }, [gqlData])
    return (
        <GqlContext.Provider value={[gqlData, setGqlData]}>
            {children}
        </GqlContext.Provider>
    );
};

export default GqlProvider;