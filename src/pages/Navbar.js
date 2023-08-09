import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Nav({ products = [] }) {


  const { setUserInfo, userInfo } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const username = userInfo?.username;

  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="header">
      <h1>BOOKWORLD</h1>
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

        <Link className="links" to="/login">Login</Link>
        <Link className="links" to="/signup">Signup</Link>
        <Link to="/category" className="links">Category</Link>
        <Link className="links" to="/Cart">Cart</Link>
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
