import React, {Component} from "react";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import {Button, Grid, Row} from '@nextui-org/react';
import logo from "../assets/logo.png"
import talent from "../assets/profile.png"
import '../css/Header.css';
import { FaRegBell, FaBriefcase, FaTimes, FaInfoCircle, FaSitemap, FaQuestionCircle, FaRssSquare, FaArrowLeft } from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';
import { Link } from "react-router-dom";





class HeaderApp extends Component{
    constructor(props){
        super(props);
        this.state={isSidenavOn: false}
        this.sideBar = this.sideBar.bind(this);
    }
    
    sideBar(){
        this.setState(prevState=>({
            isSidenavOn: !prevState.isSidenavOn
        }))
        console.log(this.state.isSidenavOn)
        
    }

    render(){
        return(
            <> 
                 <Grid.Container sm={0} css={{top:0, position: "fixed", zIndex:2}} >
                    <Grid xs={12} >
                        <Grid xs={2} css={{m:"1.5rem"}} >
                            <HiMenu size={30}  onClick={this.sideBar} color="#AF1A18" />
                        </Grid>
                        <Grid xs={8} justify="center" alignContent="center" direction="row" css={{mx:"1rem"}}>
                            <img src={logo} className="logo" alt="logotipo" />
                        </Grid>
                        <Grid xs={2} css={{m:"1.5rem"}}  >
                           <Link to='/register'> <FaRegBell size={30} color="#AF1A18"/></Link>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={0}>
                        <Sidebar bgColor='light' classes={this.state.isSidenavOn ? "on":"off" } isCollapsed={this.state.isSidenavOn ? false: true}>
                            <Row justify="flex-end">
                                <FaTimes  size={25}  onClick={this.sideBar} className='close-btn' color="#AF1A18" />
                            </Row>
                           
                            <Logo
                                image={talent}
                                imageName='react logo'
                                classes="sidelogo"
                                /> 
                            
                            <DropdownItem
                                classes="nav-list"
                                values={['Equipo', 'Productos', 'Contacto']}
                                bgColor={'light'}>
                                    
                                Talentauro
                            </DropdownItem>
                            <Item bgColor='light'>
                            <FaInfoCircle  className="side-icon" color="#AF1A18"/>
                                Acerca
                            </Item>
                            <Item bgColor='light'>
                            <FaBriefcase  className="side-icon" color="#AF1A18"/>
                                Empresas
                            </Item>
                            <Item bgColor='light'>
                            <FaRssSquare  className="side-icon" color="#AF1A18"/>
                                 Blog
                            </Item>
                            <Item bgColor='light'>
                            <FaQuestionCircle  className="side-icon" color="#AF1A18"/>
                                Ayuda
                            </Item>
                            
                        </Sidebar>
                    </Grid>
                </Grid.Container>
            </>
        )
    }
}


export default HeaderApp;