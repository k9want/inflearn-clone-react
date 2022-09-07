import React from 'react'

function CurationCourse() {
  return (
    <section class="curation-course">
      <div class="container">
        <header class="course-header">
          <a href="/">
            <h1 class="course-title">
              읽어보기
              <i class="ic-next"></i>
            </h1>
          </a>
        </header>

        <div class="card-list">
          <div class="curation-card">
            <a href="/">
              <div>
                <img
                  src="./assets/images/curation-1.png"
                  alt="[큐레이션] INFCON 2022 기념 릴레이 할인 통합편!"
                />
              </div>
              <div class="card-content">
                <h3>[큐레이션] INFCON 2022 기념 릴레이 할인 통합편!</h3>
                <p>
                  🌱 🏃 🎫 인프런의 첫 번째 오프라인 콘퍼런스,INFCON 2022!
                  인프콘 발표자분들 중엔 인프런 지식공유자가 많다는 사실,
                  아시나요?오늘은 인프콘을 기다리는 여러분들께몇몇 지식공유자를
                  소개해드리려고 찾아왔어요.
                </p>
              </div>
            </a>
          </div>

          <div class="curation-card">
            <a href="/">
              <div>
                <img
                  src="./assets/images/curation-2.png"
                  alt="[INFCON Tech Series] FE 개발자도 할 수 있다! RESTful API 개발"
                />
              </div>
              <div class="card-content">
                <h3>
                  [INFCON Tech Series] FE 개발자도 할 수 있다! RESTful API 개발
                </h3>
                <p>
                  FE 개발자도 할 수 있다! RESTful API 개발#REST #RESTful_API
                  #API #Firebase #인프콘 ⓒMedium 개발자들이 함께 모여 서로의
                  경험과 인사이트를 나누는 축제, 인프콘! 8월 26일, 드디어
                  인프런의 첫 번째 오프라인 개발 콘퍼런스인
                </p>
              </div>
            </a>
          </div>

          <div class="curation-card">
            <a href="/">
              <div>
                <img
                  src="./assets/images/curation-3.png"
                  alt="[큐레이션] INFCON 2022 기념 릴레이 할인 통합편!"
                />
              </div>
              <div class="card-content">
                <h3>[INFCON Tech Series] 지금 당장 DevOps를 해야 하는 이유</h3>
                <p>
                  DevOps가 왜 필요할까? #DevOps #데브옵스 #INFCON #인프콘
                  개발자들이 함께 모여 서로의 경험과 인사이트를 나누는 축제,
                  인프콘! 8월 26일, 드디어 인프런의 첫 번째 오프라인 개발
                  콘퍼런스인 인프콘이 개최됩니다. 인프콘을 기다리는 인프러너
                  여러분을 위해 인프런이 준비한
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurationCourse
