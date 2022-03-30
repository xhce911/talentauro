import React, {Component} from "react";
import {Grid,  Link} from '@nextui-org/react';
import logo from "../assets/logo.png"
import '../css/Header.css';
import { FaWhmcs} from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';

class HeaderApp extends Component{
    render(){
        return(
            <> 
                 <Grid.Container sm={0} css={{top:0, position: "fixed" }} >
                    <Grid xs={12} >
                        <Grid xs={2} css={{m:"2rem"}} >
                            <Link href="#" className="menu-btn" color="error"><HiMenu size={30}/></Link>
                        </Grid>
                        <Grid xs={8} justify="center" alignContent="center" direction="row" css={{mr:"2rem"}}>
                            <img src={logo} className="logo" alt="logotipo" />
                        </Grid>
                        <Grid xs={2} css={{mx:"2rem", my:"2rem"}}  >
                            <Link color="warning"><FaWhmcs size={30}/></Link>
                        </Grid>
                    </Grid>
                </Grid.Container>
            </>
        )
    }
}

export default HeaderApp;