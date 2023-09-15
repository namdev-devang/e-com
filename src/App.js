import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DigiGold from './Component/DigiGold';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import OnlineStore from './Component/OnlineStore';
import Service from './Component/Service';
import Shopping from './Component/Shopping';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
     
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/shopping' Component={Shopping} />
          <Route path='/service' Component={Service} />
          <Route path='/online-store' Component={OnlineStore} />
          <Route path='/digi-gold' Component={DigiGold} />
          {/* <Route path='/become-a' Component={Become} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
