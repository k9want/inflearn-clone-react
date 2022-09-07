import React from 'react'
import swiperImg from '../../assets/images/main1.gif'

function Swiper() {
  return (
    <section class="swiper">
      <h1 class="visually-hidden">swiper section</h1>
      <div class="swiper-img">
        <a href="/">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="swiper-img-wrapper">
                  <div class="swiper-img-left">
                    <div class="swiper-img-left-box1">
                      <div>
                        <span>함께해요</span>
                      </div>
                      <h1>
                        함께 성장할 <br />
                        동료를 찾아요 🌿
                      </h1>
                      <p>우리 #함께성장해요</p>
                      <p>#동료여어디계신가요?</p>
                    </div>
                  </div>
                  <div class="swiper-img-right">
                    <div class="swiper-img-right-box1">
                      <img src={swiperImg} alt="인프런과 함께해요" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="swiper-pagination">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="swiper-pagination-wrapper">
                <div class="swiper-pagination-controller">
                  <span>6/7</span>
                  <div>
                    <i class="ic-previous"></i>
                    <i class="ic-pause"></i>
                    <i class="ic-next"></i>
                  </div>
                </div>
                <div class="divider"></div>
                <ul class="swiper-pagination-list">
                  <li>
                    <button class="swiper-pagination-btn" type="button">
                      Top 50 👑
                    </button>
                  </li>
                  <li>
                    <button class="swiper-pagination-btn" type="button">
                      입문 로드맵
                    </button>
                  </li>
                  <li>
                    <button class="swiper-pagination-btn" type="button">
                      신규 강의 🎁
                    </button>
                  </li>
                  <li>
                    <button class="swiper-pagination-btn" type="button">
                      왕초보 모여라 😎
                    </button>
                  </li>
                  <li>
                    <button class="swiper-pagination-btn" type="button">
                      지식공유신청
                    </button>
                  </li>
                  <li>
                    <button
                      class="swiper-pagination-btn is-focus"
                      type="button"
                    >
                      인프런 동료찾기
                    </button>
                  </li>
                  <li class="is-focus">
                    <button class="swiper-pagination-btn" type="button">
                      인프런은 🌱
                    </button>
                  </li>
                </ul>
                <button class="swiper-pagination-dropdown" type="button">
                  <i class="ic-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Swiper
