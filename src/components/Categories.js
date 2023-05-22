import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Categories = () => {
  const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Meat" },
    { id: 4, name: "Juice" },
    { id: 5, name: "Dairy" },
    { id: 6, name: "Fish" },
  ];
  return (
    <div className="absolute top-0 w-full">
      <div className="flex justify-center">
        <HorizontalScroll className="overflow-scroll absolute">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-center w-32 h-16 bg-gray-800 text-white text-lg font-bold"
            >
              {category.name}
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Categories;
