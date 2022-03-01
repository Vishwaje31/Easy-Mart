import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';

function App() {
    
    return ( 
    <Router>
    <Header/>
    <main className='py-3'>
        <Routes>
            <Route path='/' element={<Container><HomeScreen /></Container>} exact />
            <Route path='/product/:id' element={<Container><ProductScreen /></Container>} />
        </Routes>
    </main>
    <Footer/>
    </Router>
    );
}

export default App;