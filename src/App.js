import React from 'react';
import { BrowserRouter, Routes, Route,Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route
  element={
    <div>
      <NavBar/>
      <Outlet />
    </div>
  }
>
    <Route path='/' element ={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
