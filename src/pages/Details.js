import axios from "axios";
import { useEffect, useState, useContext} from "react";
import { CartContext } from './CartContext' ;
import { useParams } from "react-router";
import  { Link } from 'react-router-dom';
import '../App.css';
function Details() {

    const { productid } = useParams();
    const { setCart } = useContext(CartContext);
    const [details, setDetails] = useState([]);
    const addToCartHandler = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };

    useEffect(()=>{
        axios
        .get(`http://localhost:3000/api/data?id=${productid}`)
        .then((response)=>{
            setDetails(response.data);
        })
    }, [productid] );
    if (!details) {
        return <h1>Please wait for a while..</h1>
    }
    
    return (
        <>
         <div className="detailcard">
            <div className="dproductimage">
             <img src={details.image} alt={details.product_name} height="200px" width="300px" /></div>
               <div className="dproductdetails">
               <h3 style={{textAlign:"left"}}>{details.product_name}</h3>
               <p> {details.description}</p>
                <h3 style={{textAlign:"left"}}>₹{details.price}</h3>
              <strike><h3 style={{textAlign:"left"}}>₹{details.old_price}</h3></strike>
              <h3 style={{textAlign:"left"}}>{details.company_name}</h3>
              <h3 style={{textAlign:"left"}}>{details.stock}</h3>
              

             </div>
            </div>
        </>

    );
}
export default Details;