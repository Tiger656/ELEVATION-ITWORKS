import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import MenuLayout from './MenuLayout';

export default function CreateUser(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { addUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add user to the UserContext
        addUser({ login, password });
        // Reset form fields
        setLogin('');
        setPassword('');
    };

    return (
        <MenuLayout>
            <div>
                <h2>Create User</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Login:
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Create</button>
                </form>
            </div>
        </MenuLayout>
    );
};