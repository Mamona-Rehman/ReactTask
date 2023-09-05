import logo from './logo.svg';
import React from 'react';
import { createRoot } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './Pages/Lgoin';
import Task from './Pages/Task';
import Location from './Pages/Location';



import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task",
    element: <Task />,
  },
{
    path:"/location",
    element:<Location/>,
},

 
]);

function App() {
  return (
    <>
    <RouterProvider router={router} /></>
  );
}

export default App;
