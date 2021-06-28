import React from 'react'
import styled, {css} from 'styled-components/macro';
import { serviceData } from '../Data/ServiceData';

const ServiceContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background : #231E43;
`
const AboutWrapper = styled.div`
max-width: 1000px
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width 768px){
    grid-template-columns: 1fr;
}
`

const AboutIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
const AboutH1 = styled.h1`
font-size: 2.5 rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2 rem;
}
`
const AboutH11 = styled.h1`
font-size: 2.5 rem;
color: #fff;
margin-top: -60px;
@media screen and (max-width: 480px){
    font-size: 2 rem;
}
`

const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 1rem;
`
const AboutH2 = styled.h2`
font-size: 1rem;
margin-bottom: 1rem;
`
const AboutP = styled.p`
font-size: 1rem;
text-align: center;
`
const ServicesWrapper = styled.div`
max-width: 1000px
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width 768px){
    grid-template-columns: 1fr;
}
`
const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
const CardItem = styled.div`
flex-direction : column;
align-items: center;
justify-content: center;
`
const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`

function About() {
    return (
        <ServiceContainer id="about">
        <AboutH1> Halo Perkenalkan, Do More! </AboutH1>
        <AboutH11> Aplikasi yang akan mempermudah kamu untuk </AboutH11>
        <ServicesWrapper>
        {serviceData.map((item, index)=>(
        <ServicesCard>
            <CardItem>
            <ServicesIcon src={item.images}/>
            <ServicesH2>{item.title}</ServicesH2>
            <ServicesP>{item.desc}</ServicesP>
            </CardItem>
        </ServicesCard>
        ))}
        </ServicesWrapper>
        </ServiceContainer>
    )
}

export default About
