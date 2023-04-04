import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../cssWrapper/ErrorPage';


const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found'/>
        <h3>Are you sure that you are in right place???</h3>
        <p>We can't find what you are lokking for... </p>
        <Link to='/'>Go To Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error