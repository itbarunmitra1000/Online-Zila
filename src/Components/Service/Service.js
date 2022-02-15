import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './Service.css';


const Service = ({ service }) => {
    const { name, image, color, price } = service;
    return (

        <div className='my-5 '  >
            <div className="col ">
            <div className="card border border-0" >
                <div className="p-3 d-flex justify-content-center">
                    <a href="/"><img src={image} class="card-img-top  " alt="..." /></a>
                </div>
                <div className="card-body">
                    <h5 className="text-center mb-3 fw-bolder ">{name}</h5>
                    <p className="card-text text-center text-secondary fw-bold mb-4">{color}</p>
                    <p className="card-text text-center fw-bold mb-4">${price}</p>
                    <h4  className=" d-flex justify-content-end text-secondary mb-4"><FaShoppingCart /></h4>
                </div>
            </div>
        </div>

        </div>

        // <div className='my-5 ' >
        // {/* card create dynamic  */}
        //     <Col>
        //         <Card className='shadow'  >
        //             <Card.Img variant="top image-size" src={image} />
        //             <Card.Body>
        //                 <Card.Title className='text-center mb-3 fw-bolder  '>{name}</Card.Title>
        //                 <Card.Title className="card-text text-center text-secondary fw-bold mb-4">{color}</Card.Title>
        //                 <Card.Text className='text-success fs-4 fw-bolder'>{price}</Card.Text>
        //                 <Card.Text className=" d-flex justify-content-end text-secondary mb-4" ></Card.Text>
        //             </Card.Body>
        //         </Card>
        //     </Col>
        // </div>
    );
};

export default Service;