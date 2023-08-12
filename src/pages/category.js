import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext' ;
import { Carousel } from "react-bootstrap";
import './category.css'
function Category() {
  const { setCart } = useContext(CartContext);
  const [clothesdata, setCothesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const addToCartHandler = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
    useEffect(() => {
    axios.get(`http://localhost:3000/api/data?s=books&sub=${searchtext}`)
      .then((response) => {
      setCothesdata(response.data);
      }) }, [searchtext])
  function changedvalue(e) {
    setSearchtext(e.target.value);
  }
  if (!clothesdata) {
    return <h1>Loading....</h1>
  }

  return (
    <>
      <div className="filter">
        <h2>Filter</h2>
        <select name="book" id="category" value={searchtext} onChange={changedvalue}>
          <option value=""> All</option>
          <option value="horror"> Horror</option>
          <option value="thriller"> Thriller</option>
          <option value="history">History </option>
          <option value="inspirational">Inspirational </option>
        </select>  </div>

      <Carousel
        interval={1500}
        pause="hover"
        wrap={true}
        onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
      >
        {clothesdata.map((items) => (
          <Carousel.Item key={items.product_id}>
            <Link to={`/Details/${items.product_id}`}>
              <img
                className="d-block w-100"
                src={items.image}
                alt={items.product_name} height="500px" width="500px"
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="App2">

        {clothesdata.map((clothes) => (
          <div className="card" key={clothes.product_id}>
            <img src={clothes.image} alt={clothes.product_name} />
            <h3 style={{ textAlign: "left" }}>{clothes.product_name}</h3>
            <h3 style={{ textAlign: "left" }}>₹{clothes.price}</h3>
           
            <div className="btn"><Link to={`/Details/${clothes.product_id}`}><button type="submit">More details</button></Link></div>
            <button onClick={() => addToCartHandler(clothes)}>Add to cart</button>
          </div>
        ))}

      </div></>

  );

}
export default Category;