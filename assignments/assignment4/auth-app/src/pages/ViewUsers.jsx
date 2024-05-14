import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import MenuLayout from './MenuLayout';

export default function ViewUsers() {
    const { users } = useContext(UserContext);

    return (
        <MenuLayout>
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.login}>
                    <h3>{user.login}</h3>
                    <p>login: {user.login}</p>
                    <p>password: {user.password}</p>
                </div>
            ))}
        </div>
        </MenuLayout>
    );
};