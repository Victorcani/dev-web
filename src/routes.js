import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Login from './Login';
import Main from "./Main";
import Register from "./Register";
import App from "./App";
import ValidateLogin from "./ValidateLogin";

export const router = createBrowserRouter([

{


    path:'/',
    element: <App />

},

{
    path:'/login',
    element: <Login />
},

{
    path:'/register',
    element: <Register />
},

{
    path:'/main',
    element: <Main />,
    loader: () => {
        if (localStorage.getItem('authenticated') !== 'true') {
            throw new Error('Logue, por favor')
        }
    },
    errorElement: <ValidateLogin />
}

])

