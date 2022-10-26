import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { useRef } from 'react'
import { Navigation } from 'swiper'
import { useNavigate } from 'react-router-dom'

function RoadMapCourse({ roadMapCourse }) {
  const navigate = useNavigate()

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const onClickRoadMapCourseTitle = () => {
    navigate('/roadmaps')
  }

  const onClickRoadMapCard = () => {
    navigate('/')
  }

  return (
    <section className="roadmap-course">
      <div className="container">
        <div className="course-list">
          <header className="course-header">
            <h1
              className="course-title"
              onClick={() => onClickRoadMapCourseTitle()}
            >
              기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️ <span>RoadMap!!</span>
              <i className="ic-next"></i>
            </h1>
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
              slidesPerView={2}
              slidesPerGroup={2}
              spaceBetween={6}
              breakpoints={{
                1042: { slidesPerGroup: 4, slidesPerView: 4 },
                600: { slidesPerGroup: 3, slidesPerView: 3 },
              }}
            >
              {roadMapCourse.map((data, i) => {
                return (
                  <SwiperSlide key={`RoadMap-${i}`}>
                    <div
                      className="roadmap-card"
                      onClick={() => onClickRoadMapCard()}
                    >
                      <div className="roadmap-card-img">
                        <img
                          src={require('../../assets/images/index/' +
                            data.imgUrl)}
                          alt={data.title}
                        />
                        <div className="card-content">
                          <h3>{data.title}</h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div
              className="course-swiper-btn prev sm-hidden"
              ref={navigationPrevRef}
            >
              <i className="ic-previous course-swiper-btn-inner"></i>
            </div>

            <div
              className="course-swiper-btn next sm-hidden"
              ref={navigationNextRef}
            >
              <i className="ic-next course-swiper-btn-inner"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapCourse
