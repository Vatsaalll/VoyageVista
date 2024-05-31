import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import image4 from '../../assets/images/image4.jpeg'

const Testimonials = () => {
    const settings={
        dots:true,
        infinte:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
               breakpoint: 992,
               settinfs: {
                slidesToShow:2,
                slidesToScroll:1,
                infinte: true,
                dots: true,
               } ,
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return (
  <Slider { ...settings}>
    <div className='testimonial py-4 px-3'>
        <p>"Wow, just booked my dream vacation through Voyage Vista! Can't wait to embark on this adventure!"</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Steve Harrington</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>"Thanks to Voyage Vista, I discovered the most breathtaking hidden gem on my recent trip. Truly unforgettable!"</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>"Every trip I've booked through Voyage Vista has been nothing short of amazing. Their recommendations always exceed my expectations!"</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div> 

    <div className='testimonial py-4 px-3'>
        <p>"Booking through Voyage Vista was the best decision I made for my vacation. Their attention to detail and personalized service made all the difference!"</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={image4} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Amara </h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
  )
}

export default Testimonials