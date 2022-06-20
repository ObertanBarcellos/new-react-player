import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import Player from './pages/player/index';

const Page = (props) => {

  return (
    <div className='main'>
      <BrowserRouter>
    
        <Player />

        <div className='bar'></div>

        <Player />

      </BrowserRouter>
    </div>
  )
}

export default Page;  
