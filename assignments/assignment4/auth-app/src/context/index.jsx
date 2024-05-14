/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const initialUserState = { name: 'Guest' };

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(initialUserState);

  console.log(0)
  useEffect(() => {
    console.log(1)
    if (!isAuthenticated) {
      console.log(1.1)
      navigate('/login');
    }
  }, [isAuthenticated]);

  const loginHandler = (user) => {
    console.log(2)
    setIsAuthenticated(true);
    setUser(user);
  };

  const logoutHandler = () => {
    console.log(3)
    setIsAuthenticated(false);
    setUser(initialUserState);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
// export default function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(initialUserState);

//   const loginHandler = (user) => {
//     setIsAuthenticated(true);
//     setUser(user);
//   };

//   const logoutHandler = () => {
//     setIsAuthenticated(false);
//     setUser(initialUserState);
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login: loginHandler, logout: logoutHandler }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
