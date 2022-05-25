import React from 'react';
import './css/App.css';
import 'react-icons/bi'
import { Grid } from '@nextui-org/react';

//import ChallengeCard from './components/challengeCard';

function App() {
  return (
    <>
   
      <Grid.Container css={{overflowX:"hidden", overflowY:"hidden"}}>
        <Grid xs={12} md={6} lg={6} style={{marginTop:"3rem",}} sm={0}  >
         
        </Grid>
      </Grid.Container>
   
    </>
  );
}

export default App;
