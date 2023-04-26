import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';

function HeaderSocials() {
  return (
    <div className='header_social'>
      <a><BsLinkedin /></a>
      <a><AiTwotoneMail /></a>
      <a><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials
