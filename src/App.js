import React, { useEffect, useState } from "react";
import { Container,Row,Col,Button } from 'react-bootstrap';
import { Rate,Space,message } from 'antd';
import Axios from 'axios';
import cors from 'cors';


function App() {    
    const rat = localStorage.getItem('rating');
    const [imgData,setImgData] = useState([]);
    let [rating,setRating] = useState(0);   
   
  
    const desc = ['Terrible', 'Malo', 'Normal', 'Bueno', 'Increible'];

    useEffect(() => {
        
        Axios.get('https://xkcd.com/566/info.0.json',cors())
        .then(response => response)
        .then((data) => {                
            setImgData(data.data)
        })                   
    },[setImgData]);

    const saveRating = (data) => {        
        setRating(data)       
    }

    const success = (rate) => {
        message.success(`Eres genial, diste un ${rate} a nuestro comic`);
        setTimeout(() => {
            message.info('Ten un feliz dia');
        }, 2000);
    };

   
    return(
       
        <Container fluid>             
            <Row className='mt-5 text-center'>
                <Col sm={5} >
                <img className="comic" src={imgData.img} alt={imgData.alt} />
                </Col>
                <Col sm={7}>
                    <h1>{imgData.title}</h1>
                    <h4 className='my-5'>Hey! Dale un voto al comic del dia</h4>
                    <Space direction="vertical">
                        <Rate className="rating" tooltips={desc} onChange={(i) => saveRating(i)} value={rating} />
                        {rating ? <h2 >{desc[rating - 1]}</h2> : ''}
                        <Button className='my-5' variant="outline-light" size="lg" onClick={ () => success(rating ? desc[rating - 1] : '') }>Votar por esta opcion </Button>
                    </Space>
                </Col>
            </Row>           
        </Container>                                   
    )
}

export default App;