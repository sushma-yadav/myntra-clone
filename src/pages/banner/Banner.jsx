import React from 'react'
import './Banner.css'
import banner01 from '../../assets/images/banner01.png'
import banner02 from '../../assets/images/banner02.jpg'
import banner03 from '../../assets/images/banner03.jpg'
import banner04 from '../../assets/images/banner04.jpg'
import banner05 from '../../assets/images/banner05.jpg'
import banner06 from '../../assets/images/banner06.webp'
import banner07 from '../../assets/images/banner07.webp'

function Banner() {
    return (
        <div className='banner-section'>
            <div className="swiffy-slider slider-nav-page data-slider-nav-autoplay-interval">
                <ul className="slider-container">
                    <li><img src={banner01} alt="" /></li>
                    <li><img src={banner02} alt="" /></li>
                    <li><img src={banner03} alt="" /></li>
                    <li><img src={banner04} alt="" /></li>
                    <li><img src={banner05} alt="" /></li>
                    <li><img src={banner06} alt="" /></li>
                    <li><img src={banner07} alt="" /></li>
                </ul>
            </div>

        </div>
    )
}

export default Banner