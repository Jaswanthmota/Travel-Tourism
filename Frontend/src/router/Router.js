import React from 'react';
import {Routes,Navigate,Route} from 'react-router-dom';

import Home from './../pages/Home'
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import SearchResult from './../pages/SearchResult';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Thank from './../pages/Thank';
function Router() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/tours/search" element={<SearchResult />} />
        <Route path="/thank" element={<Thank />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Router;
