import React from 'react'

function FreeCourse() {
  return (
    <section class="free-course">
      <div class="container">
        <div class="course-list">
          <header class="course-header">
            <a href="/">
              <h1 class="course-title">
                무료강의? 오히려 좋아 ✨ <i class="ic-next"></i>
              </h1>
            </a>
            <span class="course-text">무료 강의부터 가볍게 시작해 보세요.</span>
          </header>

          <div class="card-list">
            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/free-course-1.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      웹 게임을 만들며 배우는 React
                    </div>
                    <div class="instructor">조현영</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(237)</span>
                    </div>
                    <div class="price">
                      <span>무료</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +8700명 </span>
                      <span class="tag-new"> 새강의 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">웹 게임을 만들며 배우는 React</p>
                  <div class="lecture-metas">
                    <div class="level">
                      <svg
                        width="16"
                        aria-hidden="true"
                        data-prefix="fal"
                        data-icon="signal-alt"
                        class="svg-inline--fa fa-signal-alt fa-w-20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                      <span>초급</span>
                    </div>

                    <div class="category">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="folder-tree"
                        class="svg-inline--fa fa-folder-tree fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z"
                        />
                      </svg>
                      <span>프론트엔드, 웹 개발</span>
                    </div>

                    <div class="skill">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="cubes"
                        class="svg-inline--fa fa-cubes fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                        />
                      </svg>
                      <span>React</span>
                    </div>
                  </div>
                </a>
                <div class="lecture-active">
                  <i class="ic-heart"></i>
                  <i class="ic-plus"></i>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/free-course-2.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      [백문이불여일타] 데이터 분석을 위한 SQL 실전표 (무료 미니
                      코스)
                    </div>
                    <div class="instructor">데이터리안</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(32)</span>
                    </div>
                    <div class="price">
                      <span>무료</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +3100명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    [백문이불여일타] 데이터 분석을 위한 SQL 실전표 (무료 미니
                    코스)
                  </p>
                  <div class="lecture-metas">
                    <div class="level">
                      <svg
                        width="16"
                        aria-hidden="true"
                        data-prefix="fal"
                        data-icon="signal-alt"
                        class="svg-inline--fa fa-signal-alt fa-w-20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                      <span>중급이상</span>
                    </div>

                    <div class="category">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="folder-tree"
                        class="svg-inline--fa fa-folder-tree fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z"
                        />
                      </svg>
                      <span>데이터 분석, 기타</span>
                    </div>

                    <div class="skill">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="cubes"
                        class="svg-inline--fa fa-cubes fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                        />
                      </svg>
                      <span>SQL</span>
                    </div>
                  </div>
                </a>
                <div class="lecture-active">
                  <i class="ic-heart"></i>
                  <i class="ic-plus"></i>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/free-course-3.jpeg"
                      alt="강의이미지 "
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      [코드팩토리] [입문] Dart 언어 4시간만에 완전정복
                    </div>
                    <div class="instructor">코드팩토리</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(108)</span>
                    </div>
                    <div class="price">
                      <span>무료</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +1600명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    [코드팩토리] [입문] Dart 언어 4시간만에 완전정복
                  </p>
                  <div class="lecture-metas">
                    <div class="level">
                      <svg
                        width="16"
                        aria-hidden="true"
                        data-prefix="fal"
                        data-icon="signal-alt"
                        class="svg-inline--fa fa-signal-alt fa-w-20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                      <span>입문</span>
                    </div>

                    <div class="category">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="folder-tree"
                        class="svg-inline--fa fa-folder-tree fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z"
                        />
                      </svg>
                      <span>프로그래밍 언어, 모바일 앱 개발</span>
                    </div>

                    <div class="skill">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="cubes"
                        class="svg-inline--fa fa-cubes fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                        />
                      </svg>
                      <span>Flutter, 객체지향, 함수형 프로그래밍</span>
                    </div>
                  </div>
                </a>
                <div class="lecture-active">
                  <i class="ic-heart"></i>
                  <i class="ic-plus"></i>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/free-course-4.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">생활코딩 - SQLite</div>
                    <div class="instructor">Egoing Lee</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(3)</span>
                    </div>
                    <div class="price">
                      <span>무료</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +100명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">생활코딩 - SQLite</p>
                  <div class="lecture-metas">
                    <div class="level">
                      <svg
                        width="16"
                        aria-hidden="true"
                        data-prefix="fal"
                        data-icon="signal-alt"
                        class="svg-inline--fa fa-signal-alt fa-w-20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                      <span>초급</span>
                    </div>

                    <div class="category">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="folder-tree"
                        class="svg-inline--fa fa-folder-tree fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z"
                        />
                      </svg>
                      <span>데이터베이스</span>
                    </div>

                    <div class="skill">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="cubes"
                        class="svg-inline--fa fa-cubes fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                        />
                      </svg>
                      <span>DBMS/RDBMS, SQLite</span>
                    </div>
                  </div>
                </a>
                <div class="lecture-active">
                  <i class="ic-heart"></i>
                  <i class="ic-plus"></i>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/free-course-5.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">클라우드 서비스 AWS</div>
                    <div class="instructor">Egoing Lee</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(174)</span>
                    </div>
                    <div class="price">
                      <span>무료</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +6100명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">클라우드 서비스 AWS</p>
                  <div class="lecture-metas">
                    <div class="level">
                      <svg
                        width="16"
                        aria-hidden="true"
                        data-prefix="fal"
                        data-icon="signal-alt"
                        class="svg-inline--fa fa-signal-alt fa-w-20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                        />
                      </svg>
                      <span>초급</span>
                    </div>

                    <div class="category">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="folder-tree"
                        class="svg-inline--fa fa-folder-tree fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 224h224a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H400L368 0h-80a32 32 0 0 0-32 32v64H64V8a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v392a16 16 0 0 0 16 16h208v64a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H400l-32-32h-80a32 32 0 0 0-32 32v64H64V128h192v64a32 32 0 0 0 32 32zm0 96h66.74l32 32H512v128H288zm0-288h66.74l32 32H512v128H288z"
                        />
                      </svg>
                      <span>데브옵스 · 인프라, 클라우드</span>
                    </div>

                    <div class="skill">
                      <svg
                        width="16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="cubes"
                        class="svg-inline--fa fa-cubes fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                        />
                      </svg>
                      <span>AWS</span>
                    </div>
                  </div>
                </a>
                <div class="lecture-active">
                  <i class="ic-heart"></i>
                  <i class="ic-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeCourse
