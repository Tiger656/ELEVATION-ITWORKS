import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a UserProvider component
export default function UserProvider ({ children }) {
    // Define the state for storing new users
    const [users, setUsers] = useState([]);

    // Function to add a new user
    const addUser = (user) => {
        setUsers([...users, user]);
    };

    

    const editUser = (user) => {
        const index = users.findIndex((u) => u.login === user.login);
        const newUsers = [...users];
        newUsers[index] = user;
        setUsers(newUsers);
    };

    // Create the context value
    const contextValue = {
        users,
        addUser,
        editUser
    };

    // Return the UserProvider component with the context value
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};