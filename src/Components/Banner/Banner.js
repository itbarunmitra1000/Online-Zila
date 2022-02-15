import React from 'react';
import './banner.css';
import { FaShoppingCart } from 'react-icons/fa';


const Banner = () => {
    return (
        <div >
            <div class="container py-5">
                <div class="d-lg-flex justify-content-lg-between align-items-lg-center">
                    <div class=" px-3 w-75">
                        <h1 class="text-dark fw-bold mb-4">iPhone 632GB Black</h1>
                        <p class="text_banner_clr  mb-4 fs-5  ">At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.
                        </p>
                        <button class="purchase_btn btn px-4 py-2 text-white d-flex" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"><h6><FaShoppingCart /> &nbsp;</h6> Purchase</button>
                    </div>
                    <div class="w-100 ms-lg-5 mt-5 mt-lg-0 ps-lg-4">
                        <img class="img-fluid" src="https://p.turbosquid.com/ts-thumb/hm/cv7UYl/n3/lll/png/1619511981/600x600/fit_q87/9e3ea316bf9ceae149f86fdb0d6d08e93472759f/lll.jpg" alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Banner;

