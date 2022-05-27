import {Grid, Text, Card,  Progress, Row, Spacer, Col} from '@nextui-org/react';
import React, { Component } from 'react';
import FooterApp from './FooterApp';
import { FaArrowLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Descriptions from './Descriptions';

class ChallengeDescription extends Component {
    render() {
        return (
           <>
            <Grid.Container sm={0} xs={12} >
                <Row >
                    <Col xs={1} css={{pt:"1rem", pl:"1rem"}}>
                      <Link to="/dashboard"><FaArrowLeft size={25} /></Link>
                    </Col>
                    <Col xs={10} justify="center" css={{ta:'center'}}>
                        
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
                <Row xs={12} justify='center' css={{pb:".5rem"}}>
                    <Text h4 weight={'bold'} >Información de este Reto</Text>
                </Row>
                <Row>
                    <Descriptions />
                </Row>
            </Grid.Container>
            <FooterApp />
           </>
        );
    }
}

export default ChallengeDescription;