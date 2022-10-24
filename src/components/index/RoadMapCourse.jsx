import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { useRef } from 'react'
import { Navigation } from 'swiper'

function RoadMapCourse({ roadMapCourse }) {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="roadmap-course">
      <div className="container">
        <header className="course-header">
          <a href="/">
            <h1 className="course-title">
              기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️ <span>RoadMap!!</span>
              <i className="ic-next"></i>
            </h1>
          </a>
          <span className="course-text">
            아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!
          </span>
        </header>

        <div className="card-list">
          <Swiper
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
            tag="div"
            slidesPerView={4}
            slidesPerGroup={4}
          >
            {roadMapCourse.map((data, i) => {
              return (
                <SwiperSlide key={`RoadMap-${i}`}>
                  <div className="roadmap-card">
                    <a href="/">
                      <div>
                        <img
                          src={require('../../assets/images/index/' +
                            data.imgUrl)}
                          alt={data.title}
                        />
                      </div>
                      <div className="card-content">
                        <h3>{data.title}</h3>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="course-swiper-btn prev" ref={navigationPrevRef}>
            <i className="ic-previous course-swiper-btn-inner"></i>
          </div>

          <div className="course-swiper-btn next" ref={navigationNextRef}>
            <i className="ic-next course-swiper-btn-inner"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapCourse
