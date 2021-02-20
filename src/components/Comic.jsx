import React from "react";

export default function Comic({imgData}) {       
   
 
    return(
        <img
            className="comic"
            src={imgData.img}
            alt={imgData.alt}
        />
    )
}
