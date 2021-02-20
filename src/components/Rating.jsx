import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Rate,Space,message } from 'antd';


export default function Rating() {  
            
    let [rating,setRating] = useState(0);   
    
    const desc = [
        'Terrible',
        'Malo',
        'Normal',
        'Bueno',
        'Increible'
    ];
   
    const saveRating = (data) => {        
        setRating(data)       
    }

    const success = (rate) => {
        message.success(`Eres genial, diste un ${rate} a nuestro comic`);
        setTimeout(() => {
            message.info('Ten un feliz dia');
        }, 3000);
    };

    return(                           
        <Space direction="vertical">
            <Rate className="rating" tooltips={desc} onChange={(i) => saveRating(i)} value={rating} />
            {rating ? <h2 >{desc[rating - 1]}</h2> : ''}
            <Button className='my-5' variant="outline-light" size="lg" onClick={ () => success(rating ? desc[rating - 1] : '') }>Votar por esta opcion </Button>
        </Space>                                                 
    )
}
