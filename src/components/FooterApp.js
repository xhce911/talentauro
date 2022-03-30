import React, {Component} from "react";
import {Grid, Row, Button} from '@nextui-org/react';
import{FaHome, FaUserAlt, FaList, FaQrcode} from 'react-icons/fa';
import ActionBtn from "./actionBtn";

class FooterApp extends Component{
    render(){
        return(
            <>
                <Grid sm={0} css={{bottom:0, position: "fixed",paddingLeft:"2rem"}} justify="center"  >
                    <Row css={{mt:"2rem"}}>
                        <ActionBtn />
                    </Row>
                    <Grid xs={12}>
                        <Row justify="center" align="center">
                            <Button.Group size="xl" light>
                                <Button icon={<FaHome    />} ></Button>
                                <Button icon={<FaList     />} ></Button>
                                <Button icon={<FaQrcode     />} ></Button>
                                <Button icon={<FaUserAlt />} ></Button>
                            </Button.Group>
                        </Row>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default FooterApp;