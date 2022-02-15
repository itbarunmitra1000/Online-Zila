import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Service.css';


const Service = ({ service }) => {
    const { name, image, color, price } = service;
    return (

        <div className='  my-5 '  >
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

 
    );
};

export default Service;