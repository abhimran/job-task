import React, { createContext, useEffect, useState } from 'react';
export const CsvContext = createContext();

const CsvProvider = ({children}) => {
    const [csvData, setCsvData] = useState([])
    //Get Data
    useEffect(()=>{
        const csvStore = JSON.parse(localStorage.getItem('csvStore'));
        if(csvStore){
            setCsvData(csvStore)
        }
    }, [])
    // Set Data
    useEffect(()=>{
        localStorage.setItem('csvStore', JSON.stringify(csvData))
    }, [csvData])
    return (
        <CsvContext.Provider value={[csvData, setCsvData]}>
            {children}
        </CsvContext.Provider>
    );
};

export default CsvProvider;