import React from 'react';
import {Card, Text, Col, Row, Avatar, Button, Divider, Grid} from '@nextui-org/react';
import profile from '../assets/profile.png';
import {FaAward, FaClock, FaUserShield, FaLaptopCode} from 'react-icons/fa';
import {RiVoiceprintFill} from 'react-icons/ri';
import {BsInfoCircle, BsEyeglasses} from 'react-icons/bs';
import { Link } from 'react-router-dom';


const ChallengeCard = (props) => (
          <>
          <Card  css={{mw:"300px", h:"390px", borderRadius:"18px", mb:"1rem",}}  color="secondary" >
              <Card.Header css={{  h:"80px", zIndex: 1, top: 5}} justify="center">
                <Row justify='center'>             
                  <Text h3 color="$white" weight="bold">{props.company}</Text>                    
                </Row>

              </Card.Header>
              <Divider></Divider>
              <Card.Body css={{ h:"290px",overflowX:"hidden", overflowY:"none"}}>
                <Row justify="center" css={{p:"1rem"}}>
                  <FaLaptopCode size={80}/>
                </Row>
                <Row justify='center'>
                  <Text h4 color={'$white'} weight="bold" size={16} css={{textAlign:"center"}}> Titulo completo del reto y con mucho texto</Text>
                </Row>
                
              </Card.Body>
              <Card.Footer css={{h:"90px", position: 'absolute', bgBlur:'#fffff', borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", bottom: 0, zIndex: 1}}>
              <Row css={{ta:"center", a:"center", mt:"1rem", mb:"1rem"}}>
                  <Col css={{ta:"left"}}>
                  <Text color="$white" size={14}> 📍 Ciudad de Mexico</Text>
                  <Text color="$white" size={12}> 💻 En línea</Text>
                  </Col>
                  <Col >
                    <Row justify='flex-end'>
                     <Link to="/register"><Button rounded auto  css={{color: '$white'}} bordered color={'$white'} >Información</Button></Link>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
          </Card>
          </>
      )

export default ChallengeCard;