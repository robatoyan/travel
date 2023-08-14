
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import './style.css';
import { useState } from 'react';
import { TestimonialsSwiper } from './TestimonialsSwiper';

export const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([
        { id: 1, img: "/imgHome/BestTour.png", name: "Mark Smith", title: " Travel Enthusiast", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC." },
        { id: 2, img: "/imgHome/EasyBooking.png", name: "Mark Smith", title: " Travel Enthusiast", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC." },
        { id: 3, img: "/imgHome/BestTour.png", name: "Mark Smith", title: " Travel Enthusiast", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC." },
        { id: 4, img: "/imgHome/EasyBooking.png", name: "Mark Smith", title: " Travel Enthusiast", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC." }
    ])
    return (
        <div className='Testimonials' id='SpecialDelas'>
      
            <h2>Testimonials</h2>
            <h3>Trust our clients</h3>
            <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={70}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="SwiperTestimonials"
                pagination={true}
            >
                {
                    testimonial.map((e) => {
                        return (
                            <SwiperSlide key={e.id}>
                                <div className='SwiperSliderTestimonial'>
                                    <img src={e.img} />
                                    <div className='TestimonialData'>
                                        <h4>{e.name}</h4>
                                        /
                                        <h4>{e.title}</h4>
                                    </div>
                                    <div className='iconstStareTestimonials'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M23.8912 19.0935C23.5459 19.4281 23.3872 19.9121 23.4659 20.3868L24.6512 26.9468C24.7512 27.5028 24.5165 28.0655 24.0512 28.3868C23.5952 28.7201 22.9885 28.7601 22.4912 28.4935L16.5859 25.4135C16.3805 25.3041 16.1525 25.2455 15.9192 25.2388H15.5579C15.4325 25.2575 15.3099 25.2975 15.1979 25.3588L9.29118 28.4535C8.99918 28.6001 8.66852 28.6521 8.34452 28.6001C7.55518 28.4508 7.02852 27.6988 7.15785 26.9055L8.34452 20.3455C8.42318 19.8668 8.26452 19.3801 7.91918 19.0401L3.10452 14.3735C2.70185 13.9828 2.56185 13.3961 2.74585 12.8668C2.92452 12.3388 3.38052 11.9535 3.93118 11.8668L10.5578 10.9055C11.0619 10.8535 11.5045 10.5468 11.7312 10.0935L14.6512 4.10683C14.7205 3.9735 14.8099 3.85083 14.9179 3.74683L15.0379 3.6535C15.1005 3.58416 15.1725 3.52683 15.2525 3.48016L15.3979 3.42683L15.6245 3.3335H16.1859C16.6872 3.3855 17.1285 3.6855 17.3592 4.1335L20.3179 10.0935C20.5312 10.5295 20.9459 10.8322 21.4245 10.9055L28.0512 11.8668C28.6112 11.9468 29.0792 12.3335 29.2645 12.8668C29.4392 13.4015 29.2885 13.9881 28.8779 14.3735L23.8912 19.0935Z" fill="#FACD49" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M23.8912 19.0935C23.5459 19.4281 23.3872 19.9121 23.4659 20.3868L24.6512 26.9468C24.7512 27.5028 24.5165 28.0655 24.0512 28.3868C23.5952 28.7201 22.9885 28.7601 22.4912 28.4935L16.5859 25.4135C16.3805 25.3041 16.1525 25.2455 15.9192 25.2388H15.5579C15.4325 25.2575 15.3099 25.2975 15.1979 25.3588L9.29118 28.4535C8.99918 28.6001 8.66852 28.6521 8.34452 28.6001C7.55518 28.4508 7.02852 27.6988 7.15785 26.9055L8.34452 20.3455C8.42318 19.8668 8.26452 19.3801 7.91918 19.0401L3.10452 14.3735C2.70185 13.9828 2.56185 13.3961 2.74585 12.8668C2.92452 12.3388 3.38052 11.9535 3.93118 11.8668L10.5578 10.9055C11.0619 10.8535 11.5045 10.5468 11.7312 10.0935L14.6512 4.10683C14.7205 3.9735 14.8099 3.85083 14.9179 3.74683L15.0379 3.6535C15.1005 3.58416 15.1725 3.52683 15.2525 3.48016L15.3979 3.42683L15.6245 3.3335H16.1859C16.6872 3.3855 17.1285 3.6855 17.3592 4.1335L20.3179 10.0935C20.5312 10.5295 20.9459 10.8322 21.4245 10.9055L28.0512 11.8668C28.6112 11.9468 29.0792 12.3335 29.2645 12.8668C29.4392 13.4015 29.2885 13.9881 28.8779 14.3735L23.8912 19.0935Z" fill="#FACD49" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M23.8912 19.0935C23.5459 19.4281 23.3872 19.9121 23.4659 20.3868L24.6512 26.9468C24.7512 27.5028 24.5165 28.0655 24.0512 28.3868C23.5952 28.7201 22.9885 28.7601 22.4912 28.4935L16.5859 25.4135C16.3805 25.3041 16.1525 25.2455 15.9192 25.2388H15.5579C15.4325 25.2575 15.3099 25.2975 15.1979 25.3588L9.29118 28.4535C8.99918 28.6001 8.66852 28.6521 8.34452 28.6001C7.55518 28.4508 7.02852 27.6988 7.15785 26.9055L8.34452 20.3455C8.42318 19.8668 8.26452 19.3801 7.91918 19.0401L3.10452 14.3735C2.70185 13.9828 2.56185 13.3961 2.74585 12.8668C2.92452 12.3388 3.38052 11.9535 3.93118 11.8668L10.5578 10.9055C11.0619 10.8535 11.5045 10.5468 11.7312 10.0935L14.6512 4.10683C14.7205 3.9735 14.8099 3.85083 14.9179 3.74683L15.0379 3.6535C15.1005 3.58416 15.1725 3.52683 15.2525 3.48016L15.3979 3.42683L15.6245 3.3335H16.1859C16.6872 3.3855 17.1285 3.6855 17.3592 4.1335L20.3179 10.0935C20.5312 10.5295 20.9459 10.8322 21.4245 10.9055L28.0512 11.8668C28.6112 11.9468 29.0792 12.3335 29.2645 12.8668C29.4392 13.4015 29.2885 13.9881 28.8779 14.3735L23.8912 19.0935Z" fill="#FACD49" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M23.8912 19.0935C23.5459 19.4281 23.3872 19.9121 23.4659 20.3868L24.6512 26.9468C24.7512 27.5028 24.5165 28.0655 24.0512 28.3868C23.5952 28.7201 22.9885 28.7601 22.4912 28.4935L16.5859 25.4135C16.3805 25.3041 16.1525 25.2455 15.9192 25.2388H15.5579C15.4325 25.2575 15.3099 25.2975 15.1979 25.3588L9.29118 28.4535C8.99918 28.6001 8.66852 28.6521 8.34452 28.6001C7.55518 28.4508 7.02852 27.6988 7.15785 26.9055L8.34452 20.3455C8.42318 19.8668 8.26452 19.3801 7.91918 19.0401L3.10452 14.3735C2.70185 13.9828 2.56185 13.3961 2.74585 12.8668C2.92452 12.3388 3.38052 11.9535 3.93118 11.8668L10.5578 10.9055C11.0619 10.8535 11.5045 10.5468 11.7312 10.0935L14.6512 4.10683C14.7205 3.9735 14.8099 3.85083 14.9179 3.74683L15.0379 3.6535C15.1005 3.58416 15.1725 3.52683 15.2525 3.48016L15.3979 3.42683L15.6245 3.3335H16.1859C16.6872 3.3855 17.1285 3.6855 17.3592 4.1335L20.3179 10.0935C20.5312 10.5295 20.9459 10.8322 21.4245 10.9055L28.0512 11.8668C28.6112 11.9468 29.0792 12.3335 29.2645 12.8668C29.4392 13.4015 29.2885 13.9881 28.8779 14.3735L23.8912 19.0935Z" fill="#FACD49" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M23.8912 19.0935C23.5459 19.4281 23.3872 19.9121 23.4659 20.3868L24.6512 26.9468C24.7512 27.5028 24.5165 28.0655 24.0512 28.3868C23.5952 28.7201 22.9885 28.7601 22.4912 28.4935L16.5859 25.4135C16.3805 25.3041 16.1525 25.2455 15.9192 25.2388H15.5579C15.4325 25.2575 15.3099 25.2975 15.1979 25.3588L9.29118 28.4535C8.99918 28.6001 8.66852 28.6521 8.34452 28.6001C7.55518 28.4508 7.02852 27.6988 7.15785 26.9055L8.34452 20.3455C8.42318 19.8668 8.26452 19.3801 7.91918 19.0401L3.10452 14.3735C2.70185 13.9828 2.56185 13.3961 2.74585 12.8668C2.92452 12.3388 3.38052 11.9535 3.93118 11.8668L10.5578 10.9055C11.0619 10.8535 11.5045 10.5468 11.7312 10.0935L14.6512 4.10683C14.7205 3.9735 14.8099 3.85083 14.9179 3.74683L15.0379 3.6535C15.1005 3.58416 15.1725 3.52683 15.2525 3.48016L15.3979 3.42683L15.6245 3.3335H16.1859C16.6872 3.3855 17.1285 3.6855 17.3592 4.1335L20.3179 10.0935C20.5312 10.5295 20.9459 10.8322 21.4245 10.9055L28.0512 11.8668C28.6112 11.9468 29.0792 12.3335 29.2645 12.8668C29.4392 13.4015 29.2885 13.9881 28.8779 14.3735L23.8912 19.0935Z" fill="#FACD49" />
                                        </svg>
                                    </div>
                                    <p>
                                        {e.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <TestimonialsSwiper />
            </Swiper>
        </div>
    )
}