import './App.css';
import MainPage from './compo/MainPage';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Page2 from './compo/Page2';



function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/page2' element={<Page2/>} />

  </Routes>
     
  
  </BrowserRouter>
   </>
  );
}

export default App;
