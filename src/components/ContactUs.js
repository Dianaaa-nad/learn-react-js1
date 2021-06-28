import React, {useState} from 'react';
import styled from 'styled-components';
import {IoLogoWhatsapp} from 'react-icons/io';
import {AiFillInstagram}  from 'react-icons/ai';
import {FaTelegram}  from 'react-icons/fa';
// import { ContactModal } from './ContactModal';
import {ContactModal} from './ContactModal';

const LogoTele = styled(FaTelegram)`
display: block;
    bacground-size: contain;
    width: 40px;
    height: 40px;
    color: white;
`;
const LogoWA = styled(IoLogoWhatsapp)`
display: block;
    bacground-size: contain;
    width: 40px;
    height: 40px;
    color: white;
`;
const LogoIg = styled(AiFillInstagram)`
display: block;
    bacground-size: contain;
    width: 40px;
    height: 40px;
    color: white;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #FFA900;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const ContactContrainer = styled.div`
height: 400px;
display: flex;
align-items: center;
background : #231E43;
justify-content: center;
flex-direction: column;
`
const ContactH1 = styled.h1`
font-size: 2.5 rem;
color: #fff;
margin-top: 50px;
margin-bottom: 50px;

@media screen and (max-width: 480px){
    font-size: 2 rem;
}
`
const ContactH2 = styled.h2`
font-size: 1rem;
margin-bottom: 1rem;
color: #fff;
`

const Sosmed = styled.div`
display: flex;
flex-direction: flex-start;
`

function ContactUs() {
    const [showModal, setShowModal] = useState(false)
    
    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return (
        <ContactContrainer>
            <ContactH1>Perlu Bantuan?</ContactH1>
        <Button onClick={openModal}>Hubungi Kami Via Email!</Button>
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      <ContactH2>Atau</ContactH2>
       <Sosmed>
       <LogoWA/>
       <LogoIg/>
        <LogoTele/>
        </Sosmed>
         </ContactContrainer>
    )
}

export default ContactUs
