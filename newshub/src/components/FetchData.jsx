import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const FetchData =()=>{
     const [Data,setData]=useState("");
    const fetchData=async ()=>{
        await axios.get(
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=02e184cb98094d4caecf3eecfd7c7cc2"
        ).then((res) =>  setData(res.data.articles));
    };
    useEffect(() => {
        fetchData(); 
    },[]); 
    return (
        <div className="container my-4">
          <h3>
            <u>
                TOP HEADLINES
            </u>
          </h3>
          <div className=" container d-flex justify-content-center align-items-center flex-column my-3">
            {Data
             ? Data.map((items,index)=> (
                 <> 
                  <div className="container my-3">
                    <h5>{items.title}</h5>
                    <img
                       src={items.urlToImage}
                       alt="/"
                       className="img-fluid"
                       style={{
                        width: "auto",
                        height: "300px",
                        objectFit: "cover",
                       }}
                       />
                       <p>{items.description}</p>
                       <a href={items.url} target="blank">View More</a>
                       </div>
                       </>
             ))
             :"Loading..."}</div>
        </div>
    );
};
export default FetchData;