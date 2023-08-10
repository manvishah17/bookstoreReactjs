import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Nav({ products = [] }) {


  const { setUserInfo, userInfo } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const username = userInfo?.username;
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/book');
    alert("you are logout")
  };
  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="header">
      <div className="bw">
        <Link to="/">
          <h1>BOOKWORLD</h1>
          </Link>
      </div>
      <form className="search">
        <input
          className="mainsearch"
          placeholder="  What's on your mind"
          type="search"
          name="search"
          value={searchText}
          onChange={handleSearchInput}
        />
      </form>
      <nav className="nav_links">

        {/* <Link className="links" to="/login">Login</Link> */}
        {/* <Link className="links" to="/signup">Signup</Link> */}
        <Link to="/category" className="links">Category</Link>
        <Link className="links" to="/Cart">Cart</Link>
        {/* <Link className="links" to="/SignOut"> SignOut</Link> */}
        {isAuthenticated ? (

          // <button type="submit" onClick={handleLogout}>Logout</button>
          <Link to="/book" className="links" onClick={handleLogout}>Logout</Link>

        ) : (
          <>
            <Link to="/signup" className="links">Sign Up</Link>
            <Link to="/login" className="links">Sign In</Link>
          </>
        )}


      </nav>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.product_id}>
            <Link to={`/product/${product.product_id}`}>
              {product.product_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Nav;
