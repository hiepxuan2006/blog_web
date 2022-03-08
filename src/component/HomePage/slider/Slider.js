import React from "react";
import "./Slider.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Slider(props) {
  SwiperCore.use([Autoplay]);
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
    },
  };
  const imgslide = [
    "https://designer.com.vn/wp-content/uploads/2017/10/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi4.jpg",
    "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-quang-cao-du-lich-ky-nghi_113659754.jpg",
    "https://quynhongrouptour.com.vn/wp-content/uploads/2020/04/hoang-giang-banner-800x330-1.jpg"]
  return (
    <div className="grid wide">
      <div className="slider">

        <div className="slider__baner">
          <Swiper {...params}>
            {imgslide.map((item, i) => (
              <SwiperSlide key={i}>
                <img className="slider__banner-img" src={`${item}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
