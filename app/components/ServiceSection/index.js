'use client';

import React from 'react';
import Services from '../../data/service';
import Link from 'next/link';
// import Slider from 'react-slick';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  var settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`wpo-service-area-s2 ${props.svClass}`}>
      <div className="wpo-service-wrap">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-12 col-12">
              <div className="wpo-service-items wpo-service-active">
                <Slider {...settings}>
                  {Services.slice(0, 7).map((service, sitem) => (
                    <div className="wpo-service-item" key={sitem}>
                      <div className="wpo-service-img">
                        <Image
                          src={service.simg1}
                          alt=""
                          width={54}
                          height={38}
                        />
                      </div>
                      <div className="wpo-service-text">
                        <i className={`fi ${service.fIcon}`}></i>
                        {/* <Link
                          onClick={ClickHandler}
                          href="/service/[slug]"
                          as={`/service/${service.slug}`}
                        >
                          {service.title}
                        </Link> */}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
