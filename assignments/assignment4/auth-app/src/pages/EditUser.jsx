import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import MenuLayout from './MenuLayout';

export default function EditUser() {
  const { login } = useParams();
  const { users, setUsers, editUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userIndex = users.findIndex(user => user.login === login);
    if (userIndex !== -1) {
      const editedUser = { ...users[userIndex], login };
      setName(editedUser.login);
      setPassword(editedUser.password);
    }
  }, [login, users, setUsers]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editUser({login: name, password: password})
  };

  return (
    <MenuLayout>
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={login} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </MenuLayout>
  );
};