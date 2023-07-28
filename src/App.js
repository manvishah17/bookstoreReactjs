// import './App.css';
// import Book from './pages/book';

// function App() {
//   return (
//    <Book/>

//   );
// }

// export default App;
// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Details from './pages/Details';
import Book from './pages/book';
import Category from './pages/category';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Router>

        <Navbar/>
         
        
        <hr></hr>
        <Routes>
          <Route path="/" element={<Book/>} />
      
        <Route path="/book" element={<Book/>}/>
        <Route path="/category" element={<Category />}/>
          <Route path="/*" element={<h1>error</h1>} />
          <Route path="/Details/:productid" element={<Details/>}/>

        </Routes></Router>
        <Footer/>
    </div>
  );
}

export default App;