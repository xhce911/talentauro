import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './routes/Client/dashboard';
import Register from './routes/Client/register';
import Profile from './routes/Client/profile';
import Challenges from './routes/Client/challenges';


ReactDOM.render(
  <BrowserRouter>
    <NextUIProvider>
      <React.StrictMode>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='/challenges' element={<Challenges />} />

          </Routes>
      </React.StrictMode>
    </NextUIProvider>
  </BrowserRouter>
,
  document.getElementById('root')
);


