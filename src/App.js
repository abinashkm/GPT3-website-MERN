import React from 'react';


import {Header, Footer, Blog, Features, Possibilities, WhatGPT3} from './containers';
import {Brand,Cta,Navbar} from './components';
import './App.css';



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibilities/>
      <Cta/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App;

