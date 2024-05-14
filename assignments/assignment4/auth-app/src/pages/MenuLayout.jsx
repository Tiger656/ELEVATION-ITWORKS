import { useContext } from 'react';
import { AuthContext } from '../context';
import React from 'react';
import RouteGuard from '../components/RouteGuard';
import { Link } from 'react-router-dom';

export default function MenuLayout({ children }) { 
    const { logout, user } = useContext(AuthContext);
    
    return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/view-users">View Users</Link></li>
                        <li><Link to="/create-user">Create User</Link></li>
                        <li><Link to="/edit-user">Edit User</Link></li>
                        <li><button onClick={logout}>logout</button></li>
                    </ul>
                </nav>
                <div>
                    {children}
                </div>
            </div>
    );
};

