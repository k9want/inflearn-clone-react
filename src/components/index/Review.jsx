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
              인프런은 강의의 수강생수, 평점을 투명하게 공개합니다.
              <br />
              실제로 많은 온오프라인 학원들은 단기적 성과를 높이기 위해 잘나온
              특정 후기만 노출 하거나, 아예 숨겨버리는 경우가 많습니다.
              <br />
              반면 인프런은 강의에 대한 후기, 학생수 등 정보를 투명하게
              공개합니다. 신뢰성을 바탕으로 학습자들이 더 좋은 컨텐츠를 선택하고
              교육의 질을 높입니다.
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
