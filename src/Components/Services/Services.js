import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <h1 className='my-5 d-flex justify-content-center fw-bolder'>BEST PRODUCTS</h1>
            <div className='bg-color '>
                <div className='container overflow-hidden '>

                    <Row xs={1} md={2} lg={3} className='g-3 '>
                            {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            >

                            </Service>)
                        }

                    </Row>
                </div>

            </div>
        </>
    );
};

export default Services;