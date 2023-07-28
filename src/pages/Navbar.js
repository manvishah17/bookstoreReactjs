// nav.js
import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Category from "./category";
function Nav() {
  const [ searchtext, setSearchinput ] = useState("");
  function sendvalue(e){
    setSearchinput(e.target.value);}
  return (
    <div className="header">
      <Link to="/"><h1>BOOKWORLD</h1></Link>
      <form className="search">
        <input  className="mainsearch" placeholder="What's on your mind" type="search" name="search" value={searchtext} onChange={sendvalue}/>
       
        {/* <Link to={`/Search/${searchtext}`}><button type="submit">What's on your mind</button></Link> */}
      
      </form>
      <nav>
          <ul className="nav_links">
            {/* <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">books</Link>
            </li> */}
            <li>
              <Link to="/category">category</Link>
            </li>
             <li>
             <select name="book" id="category">
                        <option value=""> All</option>
                        <option value="horror"> Horror</option>
                        <option value="thriller"> Thriller</option>
                        <option value="history">History </option>
                        <option value="inspirational">Inspirational </option>
                    
                    </select> 


            </li> 

            
          </ul>
          

        </nav>
     
    </div>
  );
}

export default Nav;