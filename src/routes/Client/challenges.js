import React, { Component } from 'react';
import Settings from '../../components/settings';
import {Grid, Spacer, Text, Row } from '@nextui-org/react'
import FooterApp from '../../components/FooterApp';
import HeaderApp from '../../components/Header';
import ChallengeProgress from '../../components/ChallengeProgress';

class challenges extends Component {
    render() {
        return (
            <>
            <HeaderApp />        
                <Grid.Container xs={12} sm={0} justify='center' >
                    <Spacer y={5} />
                    <Grid xs={12} sm={0} css={{px:"2rem"}}>
                        <Text h4>Mis retos</Text>
                    </Grid>
                    <Row xs={12} css={{p:"2rem"}}>
                        <ChallengeProgress />
                    </Row>
                </Grid.Container>
            <FooterApp />
            </>

        );
    }
}

export default challenges;