import React from 'react'
import { useRef } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function Banner2({ banner2 }) {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="banner2-section">
      <h1 className="visually-hidden">banner2 section</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        className="banner2"
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: false,
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
      >
        {banner2.map((data, i) => {
          return (
            <SwiperSlide
              key={`banner2-${i}`}
              tag="div"
              className="banner2-wrapper"
              style={{
                backgroundImage: `url(${data.imgUrl})`,
              }}
            >
              <div className="container">
                <h1 style={{ color: data.fontColor }}>
                  {data.title1} <br />
                  {data.title2}
                </h1>

                <a href="/">
                  <span> {data.subtext} </span>
                </a>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="banner2-btn-container sm-hidden">
        <div className="banner2-swiper-btn-group">
          <div className="banner2-swiper-btn prev" ref={navigationPrevRef}>
            <i className="ic-previous banner2-swiper-btn-inner"></i>
          </div>

          <div className="banner2-swiper-btn next" ref={navigationNextRef}>
            <i className="ic-next banner2-swiper-btn-inner"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner2
