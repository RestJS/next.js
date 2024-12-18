'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={true}
            navigation={true}
            pagination={{
                clickable: true,
                el: `.swiper-pagination.bannerSlider`,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="bannerSlider"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>

            <div className="swiper-pagination bannerSlider"></div>
        </Swiper>
    );
};