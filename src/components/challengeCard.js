import React from 'react';
import {Card, Text, Col, Row, Avatar, User, Button, Divider, Grid, Spacer} from '@nextui-org/react';
import profile from '../assets/profile.png';
import {FaAward, FaClock, FaUserShield, FaLaptopCode} from 'react-icons/fa';
import {RiVoiceprintFill} from 'react-icons/ri';
import {BsInfoCircle, BsEyeglasses} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import talent from "../assets/profile.png"


const ChallengeCard = (props) => (
          <>
          <Card  css={{mw:"300px", h:"390px", borderRadius:"18px", mb:"1rem"}} color="primary" >
              <Card.Header css={{  h:"80px", zIndex: 1, top: 5, bgBlur:'#fffff'}} justify="center">
                <Grid xs={12} css={{pt:"1rem"}}>             
                  <User
                      color='white'
                      src={talent}
                      name={<Text weight={'medium'} size={16} color="white">{props.company}</Text>}
                      description={<Text weight={'light'} size={14} color='white'>📍 Ciudad de Mexico"</Text>}
                      size='md'
                    />                     
                </Grid>
                
              </Card.Header>
              <Divider></Divider>
              <Card.Body css={{ h:"290px",overflowX:"hidden", overflowY:"none"}}>
                <Row justify="center" css={{p:"1rem"}} >
                  <FaLaptopCode size={80}/>
                </Row>
                <Row justify='center'>
                  <Text h3 color={'$white'} weight="bold" size={18} css={{textAlign:"center"}}> Titulo completo del reto y con mucho texto</Text>
                </Row>
              
              </Card.Body>
              <Card.Footer css={{h:"90px", position: 'absolute', bgBlur:'#fffff', borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", bottom: 0, zIndex: 1}}>
              <Row css={{ta:"center", a:"center", mt:"1rem", mb:"1rem"}}>
                  <Col css={{ta:"center", m:".2rem"}}>
                    <Text color="$white" size={16}>🎖️ 40 pts</Text>
                    <Text color="$white" size={16}> 💻 Digital</Text>
                  </Col>
                  <Col >
                    <Row justify='flex-end'>
                     <Link to="/description"><Button rounded auto  css={{color: 'white', m:"1rem"}} bordered color={'$white'} size="md" >Información</Button></Link>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
          </Card>
          </>
      )

export default ChallengeCard;