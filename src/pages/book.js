import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { CartContext } from './CartContext' ;
import axios from 'axios';


function Book() {
  const [clothesdata, setClothesdata] = useState([]);
  const { setCart } = useContext(CartContext);
  const [details, setDetails] = useState([]);
  const addToCartHandler = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/data?s=books').then((response) => {
      setClothesdata(response.data);
    });
  }, []);

  if (!clothesdata) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="CONTAINER"> 
      <Carousel 
      className='carousel'
        interval={1500}
        pause="hover"
        wrap={true}
        onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
      >
        {clothesdata.map((item) => (
          <Carousel.Item key={item.product_id}>
            <Link to={`/Details/${item.product_id}`}>
              <img
                className="d-block w-100 caro" 
                src={item.image}
                alt={item.product_name}
                height="500px"
                width="500px"
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="App2">
        {clothesdata.map((clothes) => (
          <div className="card" key={clothes.product_id}>
            <img src={clothes.image} alt={clothes.product_name} />
            <h3 style={{ textAlign: 'left' }}>{clothes.product_name}</h3>
            <h3 style={{ textAlign: 'left' }}>₹{clothes.price}</h3>
             <h3 style={{textAlign:"left"}}> Old Price:    ₹ <strike> {clothes.old_price}</strike> </h3>
            <div className="btn">
              <Link to={`Details/${clothes.product_id}`}>
                <button type="submit">More details</button>
              </Link>
            </div>
            <button onClick={() => addToCartHandler(clothes)}>Add to cart</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Book;
