import React from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../Data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
height : 60px;
background : #000;
display: flex;
justify-content : space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
background-color: rgba(0,0,0,0);
`;

const NavLink = css`
color : #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
color : #fff;
align-items: center;
cursor: pointer;
padding: 0 1rem;
`;

const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    bacground-size: contain;
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 100px;

@media screen and (max-width: 768px){
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
color: #fff;
${NavLink}
`;

const NavBtn = styled.div`
display: flex;
aign-items: center;
margin-right: 24px;
@media screen and (max-width: 768px){
    display: none;
}
`; 
const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">
                <img src = 'img/domore2.png' width = '40%'></img>
            </Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item, index)=>(
                    <NavMenuLinks to= {item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>

        </Nav>
    )
}

export default Navbar
