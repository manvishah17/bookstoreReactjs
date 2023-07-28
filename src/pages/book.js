import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Book() {
    const [clothesdata,setCothesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/data?s=books")
        .then((response)=>{
            setCothesdata(response.data);
        })
    },[])
    if(!clothesdata){
        return <h1>Loading....</h1>
    }

    return(
        <div className="App2">
        {clothesdata.map((clothes)=>(
            <div className="card" key={clothes.product_id}>
                <img src={clothes.image} alt={clothes.product_name} height="300px" width="400px"/>
                <h3 style={{textAlign:"left"}}>{clothes.product_name}</h3>
                <h3 style={{textAlign:"left"}}>₹{clothes.price}</h3>
                <div className="btn"><Link to={`Details/${clothes.product_id}`}><button type="submit">More details</button></Link></div>
            </div>
        ))}

        </div>
    );
    
}
export default Book;