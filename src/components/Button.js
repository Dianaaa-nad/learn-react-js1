// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const Button = styled(Link)`
// background: ${({primary}) => (primary ? '#000d1a' : 'CD853F')};
// white-space: nowrap;
// outline: none;
// border: none;
// min-width: 100px;
// max-width: 200px;
// cursor: pointer;
// text-decoration: none;
// transtition: 0.3s;
// display: flex;
// justify-content: center;
// align-items: center;
// padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
// color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
// font-size: ${({big})=> (big ? '20px' : '14px')};

// &:hover{
// transform: translateY() (-2px);
// }
// `;
// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--color'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    
  );
};
