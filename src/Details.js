import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";

function Details() {
    const [photos, setphotos] = useState([]) //array usestate pass 

    useEffect(() => {
        // fetch("https://api.tvmaze.com/shows/1/episodes")
        // .then((res)=>{
        //   return res.json()
        // })
        // .then((data)=>setphotos(data))

        //AXIOES
        axios.get("https://api.tvmaze.com/shows/1/episodes")
            .then((res) =>
                setphotos(res.data)
            )

    }, [])
    const params = useParams()
    const item = photos.find((e) => e.id === parseInt(params.id))
    console.log(item);
    return (

        <div className="div hole-card">
            <h1 className="head">Movie Details</h1>
            <div className="cards-div">
                <img src={item?.image.medium} className="img"/>
                <h3 className="movie-name">Movie Name:  {item?.name}</h3>
                <div className="card-inner">
                    <h5 className="star-icon"><i class="bi bi-star"></i>{item?.rating.average}</h5>
                    <h5 className="season">season:{item?.season}</h5>
                </div>
                
            </div>
        </div>
    )
}
export default Details