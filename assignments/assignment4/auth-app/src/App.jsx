/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
// import RouteGuard from './components/RouteGuard';
import AuthProvider from './context';
import UserProvider from './context/UserContext';
import CreateUser from './pages/CreateUser';
import ViewUsers from './pages/ViewUsers';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/view-users" element={<ViewUsers />} />
            <Route path="/edit-user" element={<EditUser />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
/*
<ContextProviderA>
  <Foo /> can use context A not B,C 
  <ContextProviderB>
    <Bar />  can use context A,B not C
    <ContextProviderC>
      <App /> can use all 
    </ContextProviderC>
  </ContextProviderB>
</ContextProviderA>
*/
