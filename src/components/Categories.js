import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
// import CategoryProduct from "../pages/CategoryProduct";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, [category]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
    // redirect to category product page with product id
  };

  return (
    <div className="relative p-2 top-0 left-0 w-full h-full cursor-pointer">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={6}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            width: 640,
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {category.map((category) => (
          <SwiperSlide
            key={category.id}
            className={`flex justify-center items-center text-center gap-2 bg-white lg:left-32 ${
              selectedCategory && selectedCategory.id === category.id
                ? "selected"
                : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <Link to={`/category/${category.id}`}>
              <div className="flex justify-evenly items-center text-center gap-1 h-10 w-20 ">
                <img
                  className=" w-full object-cover "
                  src={category.category_image}
                  alt={category.category_name}
                />
                <p className="text-2xl font-bold">{category.category_name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
