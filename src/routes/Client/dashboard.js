import React from 'react';
import '../../css/App.css';
import 'react-icons/bi'
import { Grid, Row } from '@nextui-org/react';
import Cards from '../../components/Cards';
import FooterApp from '../../components/FooterApp';
import HeaderApp from '../../components/Header';
import ActionBtn from '../../components/actionBtn';
//import ChallengeCard from './components/challengeCard';

function Dashboard() {
  return (
    <>
     
      <Grid.Container css={{overflowX:"hidden", overflowY:"hidden" }} sm={0} justify="center" className='content'>
        <Grid xs={12} sm={0} css={{zIndex:1}}>
          <HeaderApp />
        </Grid>
          <Grid xs={12} md={12} lg={12} css={{mt:"2rem", zIndex:0}}>
            <Cards />
          </Grid>
          <Grid xs={12} md={12} lg={12} css={{mt:"2rem", zIndex:0}}>
            <FooterApp />
          </Grid>
     
      </Grid.Container>
      
    </>
  );
}

export default Dashboard;
