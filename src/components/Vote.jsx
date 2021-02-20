import React, { useState } from "react";
import Rating from './Rating'

export default function Vote({imgData}) {  

    return(
            
        <React.Fragment>           
            <h1>{imgData.title}</h1>
            <h4 className='my-5'>Hey! Dale un voto al comic del dia</h4>
            <Rating />            
        </React.Fragment>                                           
    )
}
