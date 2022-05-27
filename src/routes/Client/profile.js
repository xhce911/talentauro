import React, { Component } from 'react';
import {Grid, Text, Avatar, Card, Link, Button, Spacer} from '@nextui-org/react'
import FooterApp from '../../components/FooterApp';
import HeaderApp from '../../components/Header';
import talent from "../../assets/profile.png"


class profile extends Component {
    render() {
        return (
            <>
            <HeaderApp/>
            <Grid.Container >
                <Card css={{mt:"6rem", mx:"1rem", zIndex: 0}} >
                   <Grid xs={12}  justify='center' css={{py:"1rem"}}>
                   
                   <Avatar
                        src={talent}
                        css={{size:"90px"}}>

                    </Avatar>
                    
                   </Grid>
                   <Grid xs={12} justify="center" css={{mt: "$2"}}>
                         <Text h4 weight='bold'>Nombre de Usuario</Text>                         
                   </Grid>
                   <Grid xs={12} justify="center">
                         <Text>Puesto Actual</Text>                         
                   </Grid>
                   <Grid xs={12} justify="center">
                         <Text size={12} weight="light">750 puntos</Text>                         
                   </Grid>
                  
                   <Grid xs={12} justify="center" css={{my:"1rem"}}>
                       <Button.Group light >
                           <Button>Resumen</Button>
                           <Button>Historial</Button>
                           <Button>Habilidades</Button>
                       </Button.Group>
                   </Grid>
                   <Grid xa={12}>
                       
                   </Grid>
                </Card>
            </Grid.Container>
            <FooterApp />
            </>
        );
    }
}

export default profile;