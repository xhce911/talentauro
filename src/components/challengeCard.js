import React from 'react';
import {Card, Text, Col, Row, Avatar} from '@nextui-org/react';
import profile from '../assets/profile.png';
import {FaAward, FaClock, FaUserShield } from 'react-icons/fa';


const ChallengeCard = (props) => (
          <>
          <Card  css={{width:"300px", height:"39xt0px", borderRadius:"18px", mb:"1rem"}}>
              <Card.Header css={{bg:"#B90504",  height:"70px", pt:"1rem", px:"1.5rem"}} >
                <Row>
                  <Col xs={10}>
                  <Text b css={ {color:"#FFFFFF"}} weight="bold" size={18} >{props.title}</Text>
                  </Col>
                  <Col xs={2} css={{textAlign:"right"}}>
                    <Text css={ {color:"#FFFFFF"}}  size={14}>{props.id}</Text>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body css={{ py: '$2', overflowX:"hidden", overflowY:"visible"}}>
                <Row css={{py:"1rem", px:"2rem"}} justify="center">
                    <Col xs={2} justify="left" css={{px:".5rem"}}>
                        <Avatar src={profile}  size="xl" />
                    </Col>
                    <Col xs={10} justify="left" >
                        <Text h4>{props.company}</Text>
                        <Text >{props.location}</Text>
                        <Text css={{border:"2px solid", width:"75%", paddingLeft:"1rem", paddingRight:"1rem", borderRadius:"8px", margin:".3rem",textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap", fontSize:"10pt", fontWeight:"$semibold"}}>{props.tag}</Text>
                    </Col>
                </Row>
                <Row>
                  <div>
                    <Text b>¡Saludo!s</Text>
                    <Text>{props.description}</Text>
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer>
              <Row css={{ta:"center", a:"center", mt:"1rem", mb:"1rem"}}>
                  <Col css={{ai:"center", ta:"center"}}>
                    <FaUserShield size={20} color="black"/>

                  </Col>
                  <Col>
                    <FaClock size={20} color="black" />

                  </Col>
                  <Col>
                    <FaAward  size={20} color="black"/>

                  </Col>
                </Row>
              </Card.Footer>
          </Card>
          </>
      )

export default ChallengeCard;