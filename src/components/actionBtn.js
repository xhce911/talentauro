import React, { Component } from "react";
import { Button, Grid } from '@nextui-org/react';
import {FaCheck, FaTimes} from 'react-icons/fa'


class ActionBtn extends Component {
    render(){
        return(
            <>
             <Grid.Container  justify="center"  css={{pt:"2rem"}}> 
                 <Grid sm={0}>
                    <Button  auto responsive="true" color="error" rounded="true" css={{w:"80px", h:"80px",mx:"2rem"}}  icon={<FaTimes  size={30} />}></Button>
                 </Grid>
                 <Grid sm={0}>
                    <Button   auto color="success" rounded="true"  css={{w:"80px", h:"80px",mx:"2rem"}}icon={<FaCheck size={30}/>}></Button>
                 </Grid>
             </Grid.Container>
            </>
        )
    }
}

export default ActionBtn;