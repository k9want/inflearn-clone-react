import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'
import { useRef } from 'react'
import { useState } from 'react'

function MainSwiper({ mainBanner }) {
  const [currentNum, setCurrentNum] = useState(1)

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="swiper-section">
      <h1 className="visually-hidden">swiper section</h1>
      <Swiper
        className="swiper"
        tag="section"
        slidesPerView={1}
        onInit={(swiper) => setCurrentNum(swiper.realIndex + 1)}
        onSlideChange={(swiper) => {
          setCurrentNum(swiper.realIndex + 1)
        }}
        onReachEnd={() => console.log('reach')}
        loop="true"
        loopedSlides={SwiperSlide.length}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        modules={[Navigation]}
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
              <span>
                {currentNum}/{mainBanner.length}
              </span>
              <div className="swiper-controller-group">
                <span className="swiper-controller-btn" ref={navigationPrevRef}>
                  <i className="ic-previous"></i>
                </span>
                <span className="swiper-controller-btn ">
                  <i className="ic-pause"></i>
                </span>
                <span className="swiper-controller-btn" ref={navigationNextRef}>
                  <i className="ic-next"></i>
                </span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="swiper-pagination-list">
              {mainBanner.map((data, i) => {
                return (
                  <span
                    key={`pagination-${i}`}
                    className="swiper-pagination-btn"
                    type="button"
                  >
                    {data.bullet}
                  </span>
                )
              })}
            </div>
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
