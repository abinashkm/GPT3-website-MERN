import React,{useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg';

// we will create a function for the menu that have same shortcuts as home etc which will be used again and again.
 const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wgpt3'>What is GPT3?</a></p>
  <p><a href='#possibilities'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
 )

// so we are using BEM naming convection bellow - Block Element Modifier -- gpt3__navbar etc
// so we have created container to show all the home what is gp3 etc on navbar
const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false); //this is for mobile version. toggleMenu is the variable that tells if the mobile menu is open or not and settogglemenu is function that is used to change the variable.
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>

          <img src={logo} alt='logo'/>

        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/> 
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>:
        < RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>}
        {toggleMenu &&
         <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'>
           <Menu/>
          </div>
          <div className='gpt3__navbar-menu_container-links-sign'>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
          </div>

        </div>}

      </div>

    </div>
  )
}

export default Navbar