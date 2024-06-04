import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import img1 from "../../public/images/d1.png"
import img2 from "../../public/images/d2.png"
import img3 from "../../public/images/d3.png"
import img4 from "../../public/images/d4.png"
import img5 from "../../public/images/d5.png"
import img6 from "../../public/images/d6.png"
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 5,
        slideToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1300, min: 764 },
        items: 3,
        slideToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slideToSlide: 1
    }
};
const DestinationSlider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
        >
            <div>
                <Image
                    src={img1}
                    alt="destionation"
                    width={200}
                    height={200}
                    className='rounded-full mx-auto'
                />
                <h1 className='destination__h1'>New York</h1>
                <p className='destination__p'>7 Hotels</p>
            </div>

            <div>
                <Image
                    src={img2}
                    alt="destionation"
                    width={200}
                    height={200}
                    className='rounded-full mx-auto'
                />
                <h1 className='destination__h1'>Japan</h1>
                <p className='destination__p'>17 Hotels</p>
            </div>

            <div>
                <Image
                    src={img3}
                    alt="destionation"
                    width={200}
                    height={200}
                    className='rounded-full mx-auto'
                />
                <h1 className='destination__h1'>Bangladesh</h1>
                <p className='destination__p'>3 Hotels</p>
            </div>

            <div>
                <Image
                    src={img4}
                    alt="destionation"
                    width={200}
                    height={200}
                    className='rounded-full mx-auto'
                />
                <h1 className='destination__h1'>India</h1>
                <p className='destination__p'>27 Hotels</p>
            </div>

            <div>
                <Image
                    src={img5}
                    alt="destionation"
                    width={200}
                    height={200}
                    className='rounded-full mx-auto'
                />
                <h1 className='destination__h1'>England</h1>
                <p className='destination__p'>37 Hotels</p>
            </div>

            <div>
                <Image
                    src={img6}
                    alt="destionation"
                    width={200}
                    height={200}
                    className='rounded-full mx-auto'
                />
                <h1 className='destination__h1'>Australia</h1>
                <p className='destination__p'>23 Hotels</p>
            </div>
        </Carousel>
    )
}

export default DestinationSlider