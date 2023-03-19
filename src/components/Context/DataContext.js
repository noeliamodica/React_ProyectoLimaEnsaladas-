import { createContext, useState, useEffect } from "react";
import axios from "axios"
export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data,setData] = useState([]);
 
    useEffect(() => {
        fetch("json/data.json").then((response) => response.json())
        .then((data) => setData(data));
  }, []);
  
    console.log(setData)

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider;