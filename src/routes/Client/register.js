
import {Link} from 'react-router-dom';
import { Image, Grid, Button,  Card, Input, Text, Row } from '@nextui-org/react';
import logo from "../../assets/logo.png";
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaLinkedinIn} from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';
import '../../css/register.css'
import React, { Component } from 'react';

class register extends Component {
    constructor(props){
        super(props);
        this.state ={isLogginOn: false, isRegisterOn: true}
        this.logForm = this.logForm.bind(this);
        this.regForm = this.regForm.bind(this);

    }

    logForm(){
        this.setState(prevState=>({
            isRegisterOn: false,
            isLogginOn: true
        }));
    }
    
    regForm(){
        this.setState(prevState=>({
            isLogginOn: false,
            isRegisterOn: true
        }));
    }



    render() {
       
        return (
           <>
            
             <Grid justify="center" sm={0} >
                <Grid css={{my: '$10'}}>
                    <Button  css={{ m: '1.2rem' }} auto icon={<HiMenu size={30} />} light />
                </Grid>
                <Grid justify='center' css={{pb:'2rem'}}>
                    <Image 
                        width={270}
                        height={60}
                        src={logo}
                        objectFit="contain"
                    />
                </Grid>
                <Grid  >
                    <Card justify="center"  >
                        <Grid xs={12}>
                            <Grid xs={6}  justify="center"  >
                                <Button light auto onClick={this.regForm} >Registrarme</Button>
                            </Grid>
                            <Grid xs={6}  justify="center">
                                <Button light auto onClick={this.logForm} >Iniciar sesión</Button>
                            </Grid>
                        </Grid>
                       <Grid.Container css={{mt:'$10'}}  xs={12} className={this.state.isLogginOn ? "active" : "unactive"} >
                        <Grid xs={12} justify="center"  css={{my:'$5'}} >
                                <Input placeholder='Correo electronico' rounded contentLeft={<FaEnvelope />}/>
                            </Grid>
                            <Grid xs={12} justify="center" css={{my:'$2'}}>
                                <Input placeholder='Contraseña' rounded contentLeft={<FaLock />}/>
                            </Grid>
                            <Grid xs={12} css={{my:'$10'}} justify="center">
                                <Link to="/dashboard"><Button rounded bordered color='error'>Iniciar Sesion</Button></Link>
                            </Grid>
                            <Grid.Container css={{my:'$8'}} xs={12} justify='center'>
                                <Row  justify='center'>
                                    <Text h6>Inicia con:</Text>
                                </Row>
                                <Button.Group>
                                    <Button auto  icon={<FaFacebookF   size='1.2rem'/>} light />
                                    <Button auto  icon={<FaGoogle      size='1.2rem'/>} light />
                                    <Button auto  icon={<FaLinkedinIn  size='1.2rem'/>} light />
                                </Button.Group>
                            </Grid.Container>
                       </Grid.Container>
                       <Grid.Container xs={12} css={{my:'$10'}} className={this.state.isRegisterOn ? "active" : "unactive"}>
                        <Grid xs={12} justify="center" css={{my:'$5'}}>
                                <Input placeholder='Correo electronico' rounded contentLeft={<FaEnvelope />}/>
                            </Grid>
                            <Grid xs={12} justify="center" css={{my:'$2'}}>
                                <Input placeholder='Confirma tu correo' rounded contentLeft={<FaEnvelope />}/>
                            </Grid>
                            <Grid xs={12} justify="center" css={{my:'$10'}}>
                                <Link to="/dashboard"><Button rounded bordered color='error'>Registrarme</Button></Link>
                            </Grid>
                            <Grid.Container css={{my:'$8'}} xs={12} justify='center'>
                                <Row  justify='center'>
                                    <Text h6>Registrarme con:</Text>
                                </Row>
                                <Button.Group>
                                    <Button auto  icon={<FaFacebookF   size='1.2rem'/>} light />
                                    <Button auto  icon={<FaGoogle      size='1.2rem'/>} light />
                                    <Button auto  icon={<FaLinkedinIn  size='1.2rem'/>} light />
                                </Button.Group>
                            </Grid.Container>
                       </Grid.Container>
                    </Card>
                   
                </Grid>
            </Grid>
           </>
        );
    }
}

export default register;