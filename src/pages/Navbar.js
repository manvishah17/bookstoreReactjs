
import React, { useContext, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Category from "./category";
import Cart from "./Cart";
import { UserContext } from "./UserContext";
function Nav() { 
  const { setUserInfo , userInfo } = useContext (UserContext)
  const [searchtext, setSearchinput] = useState("");
  const username = userInfo?.username
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }
return (
  <div className="header">
    <h1>BOOKWORLD</h1>
    {/* <form className="search">
      <input className="mainsearch" placeholder="  What's on your mind" type="search" name="search" value={searchtext} onChange={sendvalue} />

    </form> */}
    <nav>
      {username && (
        <>
          <Link to='/create'>Create new post</Link>
          <a onClick={logout}>Logout</a>
        </>
      )}
      {!username && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register" >Register</Link>
        </>
      )}
      <ul className="nav_links">

        <li>
          <Link to="/category" className="category-link">Category</Link>
          <Link to="/Cart">Cart</Link>
          <button type="submit" onClick={logout}>Logout</button>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </nav>
  </div>
);
      }
export default Nav;
