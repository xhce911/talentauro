import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NextUIProvider, createTheme } from '@nextui-org/react';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './routes/Client/dashboard';
import Register from './routes/Client/register';
import Profile from './routes/Client/profile';
import Challenges from './routes/Client/challenges';
import ChallengeDescription from './components/ChallengeDescription';

const talentauro = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#AF1A18',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',
      white:'$white',
      secondary:'#E7E7E7'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

ReactDOM.render(
  <BrowserRouter>
    <NextUIProvider theme={talentauro}>
      <React.StrictMode>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='/challenges' element={<Challenges />} />
            <Route path='/description' element={<ChallengeDescription />} />

          </Routes>
      </React.StrictMode>
    </NextUIProvider>
  </BrowserRouter>
,
  document.getElementById('root')
);


