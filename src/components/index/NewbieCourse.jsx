import React from 'react'

function NewbieCourse() {
  return (
    <section class="newbie-course">
      <div class="container">
        <div class="course-list">
          <header class="course-header">
            <a href="/">
              <h1 class="course-title">
                왕초보도 할 수 있어요 💪 <i class="ic-next"></i>
              </h1>
            </a>
            <span class="course-text">이미 검증된 쉽고 친절한 입문 강의!!</span>
          </header>

          <div class="card-list">
            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/newbie-course-1.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      입문자를 위한 게임 프로그래머 개론
                    </div>
                    <div class="instructor">Rookiss</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(8)</span>
                    </div>
                    <div class="price">
                      <span> ₩11,000 </span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +700명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    입문자를 위한 게임 프로그래머 개론
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
                      <span>기타, 게임개발, 기타</span>
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
                      <span></span>
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
                      src="./assets/images/newbie-course-2.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      실제 이력서 사례로 알아보는 [합격하는 이력서] 작성 가이드
                    </div>
                    <div class="instructor">워니</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(116)</span>
                    </div>
                    <div class="price">
                      <span>₩49,500</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +600명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    실제 이력서 사례로 알아보는 [합격하는 이력서] 작성 가이드
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
                      <span>취업 · 이직, 교양 · 기타</span>
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
                      <span>이력서, 면접</span>
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
                      src="./assets/images/newbie-course-3.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      프로그래밍 시작하기:파이썬 입문(Inflearn Original)
                    </div>
                    <div class="instructor">인프런</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(687)</span>
                    </div>
                    <div class="price">
                      <span>₩55,000</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +13100명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    프로그래밍 시작하기:파이썬 입문(Inflearn Original)
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
                      <span>프로그래밍 언어</span>
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
                      <span>Python, 딥러닝</span>
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
                      src="./assets/images/newbie-course-4.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      [C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part1: C#
                      기초: 프로그래밍 입문
                    </div>
                    <div class="instructor">Rookiss</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(687)</span>
                    </div>
                    <div class="price">
                      <span>₩44,000</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +13100명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    [C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part1: C#
                    기초: 프로그래밍 입문
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
                      <span>게임 개발, 프로그래밍 언어</span>
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
                      <span>C#</span>
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
                      src="./assets/images/newbie-course-5.jpeg"
                      alt="강의 이미지"
                    />
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">Flutter 앱 개발 완성</div>
                    <div class="instructor">DevStory</div>
                    <div class="review">
                      <div class="review-avg">
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                        <i class="ic-star-filled"></i>
                      </div>
                      <span class="review-cnt">(18)</span>
                    </div>
                    <div class="price">
                      <span>₩64,900</span>
                    </div>
                    <div class="tags">
                      <span class="tag-students"> +200명 </span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">Flutter 앱 개발 완성</p>
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
                      <span>모바일 앱 개발</span>
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
                      <span>Flutter</span>
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

export default NewbieCourse
