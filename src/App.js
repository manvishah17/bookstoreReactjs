import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Details from './pages/Details';
import Book from './pages/book';
import Category from './pages/category';
import Footer from './pages/Footer';
import Signup from './pages/signup';
import SignIn from './pages/login';
import { CartProvider } from './pages/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
// import  SignOut from "./pages/SignOut"
function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
      
          <Routes>
          <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Book />} />
            <Route path="/book" element={<Book />} />
            <Route path="/category" element={<Category />} />
            <Route path="/Details/:productid" element={<Details />} />
            <Route path="/login" element={<SignIn />} />
            <Route path='/cart' element={<Cart/>} />
            {/* < Route path='/Signout' element={<SignOut/>}/> */}
            <Route path ="/payment" element={<Checkout/>}/>
            <Route path="/*" element={<h1>error</h1>} />
          </Routes>
          <Footer />

        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
