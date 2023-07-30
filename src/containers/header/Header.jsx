import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 Open-AI</h1>
        <p>GPT-3: OpenAI's powerful language model with 175 billion parameters. It excels in text generation across diverse topics, transforming AI-driven communication. Its applications include chatbots, virtual assistants, content creation, and language translation, revolutionizing natural language processing.</p>
        
        <div className='gpt3__header-content__input'>
        <input type='email' placeholder='Your email address'></input>
        <button type='button'>Let's Begin</button>
        </div>
        
        <div className='gpt3__header-content__people'>
        <img src={people} alt='users'></img>
        <p>1,600 people requested access to visit this site</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'></img>;
      </div>
    </div>
  )
}

export default Header;