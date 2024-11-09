import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) 
{ 
    const [user, setUser] = useState(null);

    const login = (data) => {
        setUser(data);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
