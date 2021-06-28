import React from 'react';
import styled from 'styled-components';
import './Hero.css';
import video from '../video/Bg1.mp4';
import foto from '../Images/phone1.png'

const HeroContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
object-fit: contain;
`

const Content = styled.div`
display: flex;
flex-direction: flex-start;
`
const Heroh1 = styled.h1`

color: #fff;
margin-bottom: -20px;

@media screen and (max-width: 480px){
    font-size: 2 rem;
}
`
const Text = styled.div`
flex-direction: column;
margin-left : -5  00px;
align-items : center;
text-align : center;
`
const Pic = styled.img`
Width: 15%;
`
function Hero() {
    return (
   <HeroContainer>
      <video src={video} autoPlay loop muted />
      {/* <Pic src={foto}/> */}
      <Content>
        <Text>
      <Heroh1>Do More</Heroh1>
      <Heroh1>Do Your Skill</Heroh1>
      <Heroh1>Build More</Heroh1>
      </Text>
      </Content>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </HeroContainer>
    )
}

export default Hero
