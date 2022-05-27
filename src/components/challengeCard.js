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
          <Card  css={{mw:"330px", h:"390px", mb:"1rem"}} color='secondary' bordered shadow={true} >
              <Card.Header css={{  h:"80px", zIndex: 1, top: 5, bgBlur:'#fffff'}} justify="center">
                <Grid xs={12} css={{pt:"1rem"}}>
                  <Col xs={8}>
                  <User
                      color='white'
                      src={talent}
                      name={<Text weight={'medium'} size={16} color="black">{props.company}</Text>}
                      description={<Text weight={'light'} size={14} color='black'>Ciudad de Mexico"</Text>}
                      size='md'
                    />
                  </Col>
                  <Col xs={4}>
                    <Text color="$black" size={16} css={{mx:"1.5rem", pt:".5rem"}}> 💻 Digital</Text>
                  </Col>         
                 
                    
                </Grid>
                
              </Card.Header>
              <Divider></Divider>
              <Card.Body css={{ h:"290px",overflowX:"hidden", overflowY:"none"}}>
                <Row justify="center" css={{p:"1rem"}} >
                  <FaLaptopCode size={80} color="black"/>
                </Row>
                <Row justify='center'>
                  <Text h3 color={'$black'} weight="bold" size={18} css={{textAlign:"center"}}> Titulo completo del reto y con mucho texto</Text>
                </Row>
              
              </Card.Body>
              <Card.Footer css={{h:"90px", position: 'absolute', bgBlur:'#fffff', borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", bottom: 0, zIndex: 1}}>
              <Row css={{ta:"center", a:"center", mt:"1rem", mb:"1rem"}}>
                  <Col css={{ta:"center", m:".5rem"}}>
                  <Text color="$black" css={{mx:"1rem", my:"0rem"}}size={20} weight="medium">🎖️ 40 pts</Text>                 
                    
                  </Col>
                  <Col >
                    <Row justify='flex-end'>
                     <Link to="/description"><Button rounded auto  css={{color: 'primary', m:".6rem"}} bordered color={'primary'} size="md" >Información</Button></Link>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
          </Card>
          </>
      )

export default ChallengeCard;