import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'
import { useState } from 'react'

function MainSwiper({ mainBanner }) {
  return (
    <section className="swiper-section">
      <h1 className="visually-hidden">swiper section</h1>
      <Swiper
        className="swiper"
        tag="section"
        slidesPerView={1}
        onInit={(swiper) => console.log('swiper init')}
        onSlideChange={(swiper) => console.log('slide change')}
        onReachEnd={() => console.log('swiper end reached')}
        loop="true"
        loopedSlides={SwiperSlide.length}
      >
        {mainBanner.map((data, i) => {
          return (
            <SwiperSlide
              key={`slide-${i}`}
              tag="div"
              className="swiper-img"
              style={data.backgroundColor}
            >
              <a href="/">
                <div className="container">
                  <div className="swiper-img-wrapper">
                    <div className="swiper-img-left">
                      <div className="swiper-img-left-box1">
                        <div style={data.spanColor}>
                          <span>{data.span}</span>
                        </div>
                        <h1 style={data.textColor}>
                          {data.title1}
                          <br />
                          {data.title2}
                        </h1>
                        <p style={data.textColor}>{data.description1}</p>
                        <p style={data.textColor}>{data.description2}</p>
                      </div>
                    </div>
                    <div className="swiper-img-right">
                      <div className="swiper-img-right-box1">
                        <img
                          src={require('../../assets/images/index/' +
                            data.imgUrl)}
                          alt="{data.bullet}"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="swiper-pagination-group">
        <div className="container">
          <div className="swiper-pagination-wrapper">
            <div className="swiper-pagination-controller">
              <span>6/7</span>
              <div>
                <i className="ic-previous"></i>
                <i className="ic-pause"></i>
                <i className="ic-next"></i>
              </div>
            </div>
            <div className="divider"></div>
            <ul className="swiper-pagination-list">
              {mainBanner.map((data, i) => {
                return (
                  <li key={`pagination-${i}`}>
                    <span className="swiper-pagination-btn" type="button">
                      {data.bullet}
                    </span>
                  </li>
                )
              })}
            </ul>
            <button className="swiper-pagination-dropdown" type="button">
              <i className="ic-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSwiper
