import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { menuData } from '../Data/MenuData';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
// const [navbar, setnavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src ='img/domore2.png' width= "50%"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {menuData.map((item, index)=>(
            <li className='nav-item'>
              <Link to={item.link} key={index} className='nav-links' onClick={closeMobileMenu}>
              {item.title}
              </Link>
            </li>
             ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
