import React from 'react';
import CTA from './CTA';
import './header.css';
import me from '../../assets/shraddha.jpg';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Shraddha Aparadh</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt=""/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
