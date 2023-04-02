import React from 'react';
import {Logo} from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../cssWrapper/LangingPage';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
        <Logo/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Productivity <span> & Remote office </span> App
                </h1>
                <p>
                Introducing Odes, an AI-powered productivity & remote office management app designed to help individuals and teams optimize their workflows, stay organized, and achieve their goals more efficiently. With features such as intelligent task prioritization, collaboration tools, smart reminders, and personalized insights, Odes is the ultimate productivity & remote office collaboration tool for modern professionals.
                </p>
                <Link to='/register' className='btn btn-hero'>Login / Register</Link>
            </div>
            <img src={main} alt='' className="img main-img"/>
        </div>
    </Wrapper>
  )
}

export default Landing