import { useState, useRef, useCallback } from 'react';
import './style.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react';

export const Discover = () => {
    const [list, setList] = useState([
        { id: 1, img: "/imgDiscover/img1.png", text: "Paradise Beach, Bantayan Island", title: "Rome, Italy", salary: 550.16, rating: 4.5 },
        { id: 2, img: "/imgDiscover/img2.png", text: "Ocean with full of Colors", title: "Maldives", salary: 20.99, rating: 4.8 },
        { id: 3, img: "/imgDiscover/img3.png", text: "Mountain View, Above the cloud", title: "United Arab Emeries ", salary: 150.99, rating: 5.1 },
        { id: 4, img: "/imgDiscover/img1.png", text: "Paradise Beach, Bantayan Island", title: "Rome, Italy", salary: 550.16, rating: 4.5 },
        { id: 5, img: "/imgDiscover/img2.png", text: "Ocean with full of Colors", title: "Maldives", salary: 20.99, rating: 4.8 },
        { id: 6, img: "/imgDiscover/img3.png", text: "Mountain View, Above the cloud", title: "United Arab Emeries ", salary: 550.16, rating: 5.1 }
    ])
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className='Discover'>
            <div className='DiscoverTop' id="Discover">
                <div>
                    <h3>Top Destination</h3>
                    <h2>Explore top destination</h2>
                </div>
                <div className='DiscoverButton'>
                    <button onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6.41431 11H20.0001C20.5524 11 21.0001 11.4477 21.0001 12C21.0001 12.5523 20.5524 13 20.0001 13H6.41431L9.65695 16.2426C10.0475 16.6331 10.0475 17.2663 9.65695 17.6568C9.26642 18.0474 8.63326 18.0474 8.24273 17.6568L4.00009 13.4142C3.21904 12.6331 3.21904 11.3668 4.00009 10.5858L8.24273 6.34313C8.63326 5.9526 9.26642 5.9526 9.65695 6.34313C10.0475 6.73365 10.0475 7.36681 9.65695 7.75734L6.41431 11Z" fill="#191825" />
                        </svg>
                    </button>
                    <button onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.5857 11H3.99991C3.44762 11 2.99991 11.4477 2.99991 12C2.99991 12.5523 3.44762 13 3.99991 13H17.5857L14.3431 16.2426C13.9525 16.6331 13.9525 17.2663 14.3431 17.6568C14.7336 18.0474 15.3667 18.0474 15.7573 17.6568L19.9999 13.4142C20.781 12.6331 20.781 11.3668 19.9999 10.5858L15.7573 6.34313C15.3667 5.9526 14.7336 5.9526 14.3431 6.34313C13.9525 6.73365 13.9525 7.36681 14.3431 7.75734L17.5857 11Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    650: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    }

                }}
                ref={sliderRef}
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={70}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="SwiperDiscover"

            >
                {
                    list.map((e) => {
                        return (
                            <SwiperSlide key={e.id}>
                                <div className='DiscoverSlider'>
                                    <img src={e.img} />
                                    <div className='DiscoverListData'>
                                        <div><h2>{e.text}</h2><h3>${e.salary}</h3></div>
                                        <p>{e.title}</p>
                                        <span>
                                            {e.rating}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z" fill="#FF5722" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}