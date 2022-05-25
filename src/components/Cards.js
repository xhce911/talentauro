import { EffectCards } from "swiper";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import ChallengeCard from "./challengeCard";
import "../css/swiper.min.css";
import "../css/styles.css";
import challenges from '../challenges.json'

function Cards() { 
  return (
    <>
       <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        
      >
        {challenges.map((challenge, index)=>(
          <SwiperSlide>
            <ChallengeCard 
              id={challenge.id}
              tag={challenge.tag}
              title={challenge.title}
              company={challenge.company}
              location={challenge.location}
              description={challenge.description} 
              color={challenge.background}           
            />
          </SwiperSlide>
        ))}  
      </Swiper>
    </>
  );
}

export default Cards;
