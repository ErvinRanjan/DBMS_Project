import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) 
{ 
    const [user, setUser] = useState(null);
    const [info,setInfo]=useState({});
    const [org,setOrg]=useState(null);

    const login = (data) => {
        setUser(data);
    };
   const logino=(data)=>{
    setOrg(data);
   };
    const logout = () => {
        setUser(null);
        setInfo(null);
        setOrg(null);
    };
    const addInfo = (key, value) => 
        {
        setInfo((prevInfo) =>
            ({
           ...prevInfo, [key]: value 
            }));
      };
     
    return (
        <UserContext.Provider value={{ user,info,org, login, logino, logout , addInfo}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
