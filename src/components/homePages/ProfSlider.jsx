import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../css/Slider.css";
// import { Pagination } from "swiper";

import { useFirebase } from "../../hooks/useFirebase";

export const ProfSlider = () => {
  const navigate = useNavigate();
  const WhatCategory = (e) => {
    const categoryName = e.target.innerText;
    const categoryId = e.target.id;
    navigate("/profsamples", {
      state: { categoryName: categoryName, categoryId: categoryId },
    });
  };
  const { data } = useFirebase("profCategory");

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {Object.entries(data).map(([key, item]) => (
          <SwiperSlide key={key} className="category_box">
            <button onClick={WhatCategory}>
              <div className="category_name" id={key}>
                {String(item.content)}
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
