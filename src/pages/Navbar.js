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
        {username ? (
          <> </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        <ul className="nav_links">
          <li>
            <Link to="/category" className="category-link">
              Category
            </Link>
            <Link  className=" cart"to="/Cart">Cart</Link>
          </li>
        </ul>
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
