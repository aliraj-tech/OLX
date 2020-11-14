import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom";
import React from 'react';
import HomePage from './comps/home'  
import Header from './comps/Header'
import Content from './comps/OlxCont'

import Footer from './comps/Footer'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Content />
    <Footer />
    <Route path="" component="HomePage" />  </BrowserRouter>
    
  );
}

export default App;
