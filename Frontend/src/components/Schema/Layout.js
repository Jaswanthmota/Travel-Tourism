import React from 'react';

import Header from './../header/Header';
import Router from '../../router/Router';
import Footer from './../footer/Footer';

function Layout() {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>  
  )
}

export default Layout;
