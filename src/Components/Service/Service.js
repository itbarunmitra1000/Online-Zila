import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Service.css';
const Service = ({ service }) => {
    const { name, image, color, price } = service;
    return (
        <div className='product-container d-flex flex-column justify-content-center bg-white my-5'>

            <img className='mt-4' src={image} alt="" />
            <div className='mx-5  m-0 m-auto'>
                <h2 className=''>{name}</h2>
                <p className='' >{color}</p>
                <p className='' >${price}</p>
                <h4><FaShoppingCart /></h4>
            </div>
        </div>

    );
};

export default Service;