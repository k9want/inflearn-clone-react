import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { useRef } from 'react'
import { useState } from 'react'
import { debounce } from 'lodash'

function MainSwiper({ mainBanner, mainBullets }) {
  const [windowSize, setwindowSize] = React.useState(window.innerWidth)

  const [currentNum, setCurrentNum] = useState(1)

  const [isAuto, setIsAuto] = useState(true)
  const swiperRef = useRef(null)

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const [paginationTransform, setPaginationTransform] = useState(0)

  const handleIsAuto = () => {
    if (isAuto) {
      swiperRef.current.swiper.autoplay.stop()
      setIsAuto(false)
    } else {
      swiperRef.current.swiper.autoplay.start()
      setIsAuto(true)
    }
  }

  const onClickPaginationList = (e) => {
    const listWidth = e.currentTarget.scrollWidth
    const boxHarf = e.currentTarget.parentElement.offsetWidth / 2
    const selectTargetPos = e.target.offsetLeft + e.target.offsetWidth / 2
    if (selectTargetPos <= boxHarf) {
      setPaginationTransform(0)
    } else if (listWidth - selectTargetPos <= boxHarf) {
      setPaginationTransform(
        listWidth - e.currentTarget.parentElement.offsetWidth
      )
    } else {
      setPaginationTransform(selectTargetPos - boxHarf)
    }
  }

  const handleResize = debounce(() => {
    setwindowSize(window.innerWidth)
    document.getElementsByClassName('swiper-pagination-btn-active')[0].click()
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="swiper-section">
      <h1 className="visually-hidden">swiper section</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        ref={swiperRef}
        className="swiper"
        tag="section"
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => setCurrentNum(swiper.realIndex + 1)}
        onSlideChange={(swiper) => {
          setCurrentNum(swiper.realIndex + 1)
          if (swiper.realIndex === 0) {
            setPaginationTransform(0)
          } else if (swiper.realIndex === 10 && swiper.activeIndex === 0) {
            setPaginationTransform(
              swiper.pagination.el.offsetParent.scrollWidth -
                swiper.pagination.el.offsetWidth
            )
          } else {
            swiper.pagination.bullets[swiper.realIndex].click()
          }
        }}
        loop="true"
        loopedSlides={SwiperSlide.length - 1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-list',
          bulletClass: 'swiper-pagination-btn',
          bulletActiveClass: 'swiper-pagination-btn-active',
          renderBullet: (index, className) => {
            return (
              '<span class="' +
              className +
              '"' +
              'index=' +
              index +
              '>' +
              mainBullets[index] +
              '</span>'
            )
          },
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
                        <p className="sm-hidden" style={data.textColor}>
                          {data.description1}
                        </p>
                        <p className="sm-hidden" style={data.textColor}>
                          {data.description2}
                        </p>
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
      <div className="swiper-pagination-group sm-hidden">
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
                <span className="swiper-controller-btn">
                  <i
                    className={isAuto ? 'ic-pause' : 'ic-play'}
                    onClick={() => {
                      handleIsAuto()
                    }}
                  ></i>
                </span>
                <span className="swiper-controller-btn" ref={navigationNextRef}>
                  <i className="ic-next"></i>
                </span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="pagination-container">
              <div
                className="swiper-pagination-list"
                style={{
                  transform: `translate(${paginationTransform * -1}px, 0)`,
                }}
                onClickCapture={(e) => onClickPaginationList(e)}
              ></div>
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
