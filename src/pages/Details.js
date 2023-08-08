import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../App.css';
function Details() {

    const { productid } = useParams();
    const [details, setDetails] = useState([]);

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
              <h3 style={{textAlign:"left"}}>₹{details.company_name}</h3>
              <h3 style={{textAlign:"left"}}>₹{details.stock}</h3>

             </div>
            </div>
        </>

    );
}
export default Details;