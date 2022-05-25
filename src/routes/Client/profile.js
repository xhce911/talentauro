import React, { Component } from 'react';
import {Grid, Text, Avatar, Card, Link, Button} from '@nextui-org/react'
import FooterApp from '../../components/FooterApp';
import HeaderApp from '../../components/Header';



class profile extends Component {
    render() {
        return (
            <>
            <HeaderApp/>
            <Grid.Container >
                <Card css={{mt:"6rem", mx:"1rem", zIndex: 0}} >
                   <Grid xs={12}  justify='center'>
                       
                   <Avatar
                        src='https://actualidadjoven.es/wp-content/uploads/2016/10/simp1.jpg'
                        css={{size:"100px"}}>

                    </Avatar>
                   </Grid>
                   <Grid xs={12} justify="center" css={{mt: "$5"}}>
                         <Text h5 weight='bold'>Homero Simpson</Text>                         
                   </Grid>
                   <Grid xs={12} justify="center">
                         <Text>Jefe de seguridad</Text>                         
                   </Grid>
                   <Grid xs={12} justify="center" >
                        <Text css={{pt:"$4"}} size={14}>📍 Springfield, USA</Text>                       
                   </Grid>
                   <Grid xs={12} justify="center" css={{my:"2rem"}}>
                       <Button.Group light >
                           <Button>Acerca</Button>
                           <Button>Resumen</Button>
                           <Button>NetworK</Button>
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