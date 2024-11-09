import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserRegister from './Pages/UserRegister';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Box} from '@mui/material';
import UserLogin from './Pages/UserLogin';
import OrgLogin from './Pages/OrgLogin';
import OrgRegister from './Pages/OrgRegister';
import UserEdit from './Pages/UserEdit';
import UserPage from './Pages/Userpage';
import { UserProvider } from './UserContext';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
 {
  path: 'UserReg/',
  element: <UserRegister />
  
 },
 {
  path:'UserLogin/',
  element: <UserLogin />
 },
 {
  path:'OrgLogin/',
  element:<OrgLogin/>
 },
 {
  path:'OrgRegister/',
  element:<OrgRegister />
 },
 {
  path:'UserEdit/',
  element:<UserEdit />
 },
 {
  path:'UserPage/',
  element:<UserPage />

 }
  // you can add client-side-routes here, note that as we may be 
  // editing the same file there may be merge conflicts
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
        <RouterProvider router={router} />
        </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
