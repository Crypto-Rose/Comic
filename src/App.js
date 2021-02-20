import React, { useEffect, useState } from "react";
import { Container,Row,Col, } from 'react-bootstrap';
import Axios from 'axios';
import cors from 'cors';
import Comic from './components/Comic'
import Vote from './components/Vote'


function App() {      

    const [imgData,setImgData] = useState([]);

    useEffect(() => {
        Axios.get('https://xkcd.com/566/info.0.json',cors())
        .then(response => response)                   
        .then(data => setImgData(data.data))
                      
    },[setImgData]); 
   
    return(
       
        <Container fluid>             
            <Row className='mt-5 text-center'>
                <Col sm={5} >
                    <Comic imgData={imgData}/>                                   
                </Col>
                <Col sm={7}>
                    <Vote imgData={imgData}/>                   
                </Col>
            </Row>           
        </Container>                                   
    )
}

export default App;