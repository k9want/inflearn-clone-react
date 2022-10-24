import React from 'react'

function Review() {
  return (
    <section className="review-section">
      <div className="container">
        <div className="review-wrapper">
          <div className="review-left">
            <h1>
              <span>946,167</span> 명이
              <br />
              인프런과 함께합니다.
            </h1>
            <p>
              학교에서 배우기 어렵거나 큰 비용을
              <br />
              지불해야만 배울 수 있는 전문적인 지식들을 제공합니다.
              <br />
              오픈 플랫폼의 이점을 통해 다양성과 경제성을 모두 높입니다.
            </p>

            <div className="buttons">
              <a href="/">
                <span>수강평 더보기</span> <i className="ic-next"></i>
              </a>
              <a href="/">
                <span>기능/강좌 요청하기 </span> <i className="ic-next"></i>
              </a>
            </div>
          </div>

          <div className="review-right">
            <div className="review-card-list">
              <div className="review-card">
                <div className="review-card-header">
                  <span className="student">최준호 님(수강생)</span>
                  <span className="date">36분 전</span>
                </div>
                <div className="review-card-content">
                  <a href="/">
                    <h1>
                      스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근
                      기술{' '}
                      <span>
                        <i className="ic-next"></i>
                      </span>
                    </h1>
                  </a>
                  <p>스프링 처음 배우기 좋다.</p>
                </div>
              </div>

              <div className="review-card">
                <div className="review-card-header">
                  <span className="student">정경호 님(수강생)</span>
                  <span className="date">2시간 전</span>
                </div>

                <div className="review-card-content">
                  <a href="/">
                    <h1>
                      스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술
                      <span>
                        <i className="ic-next"></i>
                      </span>
                    </h1>
                  </a>
                  <p>다음 강의도 기대 됩니다.</p>
                </div>
              </div>

              <div className="review-card">
                <div className="review-card-header">
                  <span className="student">Grrr 님(수강생)</span>
                  <span className="date">3시간 전</span>
                </div>

                <div className="review-card-content">
                  <a href="/">
                    <h1>
                      Vue.js 3 완벽 마스터: 기초부터 실전까지 - "기본편"
                      <span>
                        <i className="ic-next"></i>
                      </span>
                    </h1>
                  </a>
                  <p>
                    파이팅 넘치는 강의였고, 길이 좀 보이는거 같아서 다음 강의도
                    수강갑니다.
                  </p>
                </div>
              </div>

              <div className="review-card">
                <div className="review-card-header">
                  <span className="student">GoodCoding 님(수강생)</span>
                  <span className="date">3시간 전</span>
                </div>

                <div className="review-card-content">
                  <a href="/">
                    <h1>
                      Vue.js 3 완벽 마스터: 기초부터 실전까지 - "기본편"
                      <span>
                        <i className="ic-next"></i>
                      </span>
                    </h1>
                  </a>
                  <p>다음 강의도 수강갑니다.</p>
                </div>
              </div>
              <div className="review-blur"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
