import React, { Component } from 'react';
import {Grid, Text, Card, Link, Progress, Row, Spacer} from '@nextui-org/react';

class ChallengeProgress extends Component {
    render() {
        return (
            <>
            <Grid xs={12} sm={0}>
                <Card css={{ mw: "100%" }} color='white'>
                    <Text h4 color="primary" weight={'bold'}>
                        Nombre del Reto
                    </Text>
                    <Text color='primary'>Mi avance</Text>
                    <Row >
                        
                    </Row>
                    <Row justify='flex-end'>
                        <Text color="primary" justify='flex-start'>🚀</Text>
                        <Spacer x={11}/>
                        <Text color="primary">🏆</Text>
                    </Row>
                    <Progress color="primary" value={30} /> 
                    <Card.Footer>
                        <Link
                        target="_blank"
                        css={{ color: 'primary' }}
                        href="https://github.com/nextui-org/nextui"
                        >
                        #categoria
                        </Link>
                    </Card.Footer>
                </Card>
            </Grid>
            </>
        );
    }
}

export default ChallengeProgress;