import React from 'react'

function RoadMap() {
  return (
    <section class="roadmap-course">
      <div class="container">
        <header class="course-header">
          <a href="/">
            <h1 class="course-title">
              기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️ <span>RoadMap!!</span>
              <i class="ic-next"></i>
            </h1>
          </a>
          <span class="course-text">
            아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!
          </span>
        </header>

        <div class="card-list">
          <div class="roadmap-card">
            <a href="/">
              <div>
                <img src="./assets/images/roadmap-1.jpeg" alt="로드맵 이미지" />
              </div>
              <div class="card-content">
                <h3>
                  코딩 해볼래요? - 하루 11분, 60일 완성 코딩 왕초보 탈출부터
                  활용까지!
                </h3>
              </div>
            </a>
          </div>

          <div class="roadmap-card">
            <a href="/">
              <div>
                <img src="./assets/images/roadmap-2.jpeg" alt="로드맵 이미지" />
              </div>
              <div class="card-content">
                <h3>코딩테스트 최적화 로드맵 🕵</h3>
              </div>
            </a>
          </div>

          <div class="roadmap-card">
            <a href="/">
              <div>
                <img src="./assets/images/roadmap-3.jpeg" alt="로드맵 이미지" />
              </div>
              <div class="card-content">
                <h3>자바 개발자 Level Up! - 더 나은 자바 개발자 되기</h3>
              </div>
            </a>
          </div>

          <div class="roadmap-card">
            <a href="/">
              <div>
                <img src="./assets/images/roadmap-4.jpeg" alt="로드맵 이미지" />
              </div>
              <div class="card-content">
                <h3>
                  프로그래밍 시작하기 - 파이썬 입문부터 인공지능, 머신러닝까지
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
