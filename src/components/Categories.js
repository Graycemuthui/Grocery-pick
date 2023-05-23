import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [category]);

  return (
    <div className="relative p-2 top-0 left-0 w-full h-full cursor-pointer">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={6}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            width: 374,
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
          },
          640: {
            width: 640,
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            width: 768,
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {category.map((category) => (
          <SwiperSlide
            key={category.id}
            className="flex justify-center items-center text-center h-full w-full gap-2 bg-white rounded-full lg:left-32"
          >
            <div className="flex justify-center items-center gap-1 h-10 w-20 rounded-full ">
              <img
                className=" w-full object-cover "
                src={category.category_image}
                alt={category.category_name}
              />
              <p className="text-2xl font-bold">{category.category_name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
