/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Foo from '../components/Foo';
import { AuthContext } from '../context';
import MenuLayout from '../pages/MenuLayout';

export default function Home() {
  const { logout, user } = useContext(AuthContext);

  return (
    <MenuLayout>
      <div>
        <h1>Welcome, {user.name}</h1>
      </div>
    </MenuLayout>
  );
}
