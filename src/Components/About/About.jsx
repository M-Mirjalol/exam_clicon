import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./About.css";

const about = [
  { id: 1, name: "Womens Watches" },
  { id: 2, name: "Beauty" },
  { id: 3, name: "Fragrances" },
  { id: 4, name: "Furniture" },
  { id: 5, name: "Groceries" },
  { id: 6, name: "Home Decoration"},
  { id: 7, name: "Laptops"},
  { id: 8, name: "Motorcycle"},
  { id: 9, name: "Mens Shoes"},
  { id: 10, name: "Mobiles"},
  { id: 11, name: "Mens Wears"},
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">Shop with Categories</h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="about-swiper"
        >
          {about.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="about-card">
                <div className="about-overlay"></div>
                
                <div className="about-content">
                  <span className="about-name">{item.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;