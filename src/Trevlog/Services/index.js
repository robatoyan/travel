import './style.css';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { useState } from 'react';

export const Services = () => {
    const [arr, setArr] = useState([
        { id: 1, img: "/imgHome/BestTour.png", title: "Best Tour Guide", text: "What looked like a small patch of purple grass, above five feet." },
        { id: 2, img: "/imgHome/EasyBooking.png", title: "Easy Booking", text: "Square, was moving across the sand in their direction." },
        { id: 3, img: "/imgHome/BestTour.png", title: "Best Tour Guide", text: "What looked like a small patch of purple grass, above five feet." },
        { id: 4, img: "/imgHome/EasyBooking.png", title: "Easy Booking", text: "Square, was moving across the sand in their direction." },
        { id: 5, img: "/imgHome/BestTour.png", title: "Best Tour Guide", text: "What looked like a small patch of purple grass, above five feet." },
        { id: 6, img: "/imgHome/EasyBooking.png", title: "Easy Booking", text: "Square, was moving across the sand in their direction." },
        { id: 7, img: "/imgHome/BestTour.png", title: "Best Tour Guide", text: "What looked like a small patch of purple grass, above five feet." },
        { id: 8, img: "/imgHome/EasyBooking.png", title: "Easy Booking", text: "Square, was moving across the sand in their direction." },
        { id: 9, img: "/imgHome/BestTour.png", title: "Best Tour Guide", text: "What looked like a small patch of purple grass, above five feet." },
        { id: 10, img: "/imgHome/EasyBooking.png", title: "Easy Booking", text: "Square, was moving across the sand in their direction." },
    ])
    return (
        <div className='Services'>
            <div className='OutTopValue'>
                <h3>Services</h3>
                <h2>
                    Our top value<br />
                    categories for you
                </h2>
            </div>

            <div className='SwiperHome'>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        650: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        }

                    }}
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    // slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="SwiperSliders"
                >
                    {
                        arr.map((e => {
                            return (
                                <SwiperSlide key={e.id} className='Slider_H'>
                                    <div>
                                        <img src={e.img} />
                                        <h2>{e.title}</h2>
                                        <p>{e.text}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        }))
                    }
                </Swiper>
            </div>
        </div>
    )
}