import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import Player from './pages/player/index';
import Router from './pages/routers/index';

const Page = () => {

  return (
    <div className='main'>
      <BrowserRouter>
        
        <Player />
 
        <div className='bar'></div>

        <Router />

      </BrowserRouter>
    </div>
  )
}

export default Page;  
