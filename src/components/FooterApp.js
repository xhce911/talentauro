import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Grid, Row, Button} from '@nextui-org/react';
import{FaHome, FaUserAlt, FaList, FaQrcode} from 'react-icons/fa';



class FooterApp extends Component{
    constructor(props){
        super(props);
        this.state = {TabName: ''}
    }




    render(){
        return(
            <>
                <Grid.Container css={{bottom:0, position: "fixed",}} justify="center"  xs={12} md={12} lg={12} >
                    <Grid  sm={0}  >
                        <Row justify="center" align="center">
                            <Button.Group size='xl' light rounded>
                                <Link to="/dashboard"  ><Button icon={<FaHome size={20}    />} ></Button></Link>
                                <Link to="/challenges" ><Button icon={<FaList  size={20}   />} ></Button></Link>
                                <Link to="">            <Button icon={<FaQrcode size={20}  />} ></Button></Link>
                                <Link to="/profile"    ><Button icon={<FaUserAlt size={20} />} ></Button></Link>
                            </Button.Group>
                        </Row>
                    </Grid>
                </Grid.Container>
            </>
        )
    }
}
export default FooterApp;