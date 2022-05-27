import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {Grid, Text, Card, Link, Progress, Row, Spacer, Divider} from '@nextui-org/react';

import '../css/description.css';


function Descriptions(props) {
   
    return (
       <>
       <Swiper
            
            pagination={{
                type: "bullets",
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="swiper-2"
        >
            <SwiperSlide className='swiper-slide-2'> 
                <Card css={{ mw: "100%", m:"1.5rem", h:"320px"}} color='white'>
                        <Text h4 color="primary" weight={'bold'} css={{p:".5rem"}}>
                            Instrucciones
                        </Text>
                    
                        <Divider/>
                    
                        <Card.Footer>
                            <Link
                            target="_blank"
                            css={{ color: 'primary' }}
                            href="https://github.com/nextui-org/nextui"
                            >
                            #categoria
                            </Link>
                        </Card.Footer>
                </Card>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-2'>
            <Card css={{ mw: "100%", m:"1.5rem", h:"320px"}} color='white'>
                        <Text h4 color="primary" weight={'bold'} css={{p:".5rem"}}>
                            Fases del reto 
                        </Text>
                    
                        <Divider/>
                    
                        <Card.Footer>
                            <Link
                            target="_blank"
                            css={{ color: 'primary' }}
                            href="https://github.com/nextui-org/nextui"
                            >
                            #notas citas etc...
                            </Link>
                        </Card.Footer>
                </Card>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-2'>
            <Card css={{ mw: "100%", m:"1.5rem", h:"320px"}} color='white'>
                        <Text h4 color="primary" weight={'bold'} css={{p:".5rem"}}>
                            Preparate para el reto
                        </Text>
                    
                        <Divider/>
                    
                        <Card.Footer>
                            <Link
                            target="_blank"
                            css={{ color: 'primary' }}
                            href="https://github.com/nextui-org/nextui"
                            >
                            #ligas a temas
                            </Link>
                        </Card.Footer>
                </Card>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-2'>
            <Card css={{ mw: "100%", m:"1.5rem", h:"320px"}} color='white'>
                        <Text h4 color="primary" weight={'bold'} css={{p:".5rem"}}>
                            Recompensas
                        </Text>
                    
                        <Divider/>
                    
                        <Card.Footer>
                            <Link
                            target="_blank"
                            css={{ color: 'primary' }}
                            href="https://github.com/nextui-org/nextui"
                            >
                            #categoria
                            </Link>
                        </Card.Footer>
                </Card>
            </SwiperSlide>
            
        </Swiper>
       </>
    );
}

export default Descriptions;