import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';



const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='menu' element={<Menu/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;