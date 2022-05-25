import React, { Component } from "react";
import { Button, Grid } from '@nextui-org/react';
import {FaCheck, FaTimes} from 'react-icons/fa'


class ActionBtn extends Component {
    render(){
        return(
            <>
             <Grid.Container  justify="center"  css={{}}> 
                 <Grid sm={0} xs={6} justify="center">
                    <Button  auto responsive="true" color="error" rounded="true" css={{w:"80px", h:"80px"}}  icon={<FaTimes  size={30} />}></Button>
                 </Grid>
                 <Grid sm={0} xs={6} justify="center">
                    <Button   auto color="success" rounded="true"  css={{w:"80px", h:"80px"}}icon={<FaCheck size={30}/>}></Button>
                 </Grid>
             </Grid.Container>
            </>
        )
    }
}

export default ActionBtn;