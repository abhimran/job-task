import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faRibbon } from '@fortawesome/free-solid-svg-icons'

import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import carousel3 from '../images/carousel3.jpg'
import Slider from 'react-slick';

const Card = () => {
  // Slider config
     const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [settings] = useState(config);

    // Slider Image
     const slides = [
    {
      img: carousel1,
    },
    {
      img: carousel2,
    },
    {
      img: carousel3,
    }
  ]
    return (
        <div className="card" style={{width: "35%", margin: "20px auto"}}>
          {/* Card Slider */}
            <Slider {...settings}>
            {
                slides.map((item,i)=> <img src={item.img} key={i} className="card-img-top" alt=""/>)
            }
            </Slider>
            {/* card heading */}
            <div className="card__info">
                <div className="card__price">
                    <h3>NOK 4500/per month</h3>
                </div>
                <div className="card__ribbon">
                    <FontAwesomeIcon icon={faRibbon}/>
                </div>
            </div>
            {/* Card Body */}
            <div className="card-body">
                <h4 className="card-title">Pen nyoppusset hybel</h4>
                <p className="card-text">Enter a place in Apartment</p>
                 <p><FontAwesomeIcon icon={faCalendar}/> 01.10-2020 - Undetermind</p>
                 <p><FontAwesomeIcon icon={faCalendar}/> Minimum stay: 0 month</p>
            </div>
        </div>
    );
};

export default Card;