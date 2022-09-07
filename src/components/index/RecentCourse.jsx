import React from 'react'

function RecentCourse() {
  return (
    <section class="recent-course">
      <div class="container">
        <div class="course-list">
          <header class="course-header">
            <a href="/">
              <h1 class="course-title">
                따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️
                <span>NEW!! </span>
                <i class="ic-next"></i>
              </h1>
            </a>
          </header>

          <div class="card-list">
            <div class="card">
              <div class="card-front">
                <a href="/">
                  <div class="card-img">
                    <img
                      src="./assets/images/recent-1.jpeg"
                      alt="고객의 친구가 되기 위한 'UX Writing'"
                    />
                    <div>
                      <i class="ic-badge-discount"></i>
                      24% 할인
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      고객의 친구가 되기 위한 'UX Writing'
                    </div>
                    <div class="instructor">켈리폴리</div>
                    <div class="price">
                      <span class="del">44,000</span>
                      <span> ₩30,800 </span>
                    </div>
                    <div class="tags">
                      <span class="tag-new"> 새강의 </span>
                      <span class="tag-discount">할인중</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    고객의 친구가 되기 위한 'UX Writing'
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
                      <span> UX/UI, 기획 · 전략 · PM</span>
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
                      <span> 카피라이팅, 서비스 기획</span>
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
                      src="./assets/images/recent-2.jpeg"
                      alt="모두의 깃 & 깃허브"
                    />
                    <div>
                      <i class="ic-badge-discount"></i>
                      30% 할인
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">모두의 깃 & 깃허브</div>
                    <div class="instructor">강민철</div>
                    <div class="price">
                      <span class="del">24,200</span>
                      <span> ₩16,940 </span>
                    </div>
                    <div class="tags">
                      <span class="tag-new"> 새강의 </span>
                      <span class="tag-discount">할인중</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">모두의 깃 & 깃허브</p>
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
                      <span> 개발도구</span>
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
                      <span> Github, Git</span>
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
                      src="./assets/images/recent-3.jpeg"
                      alt="퍼블리셔 개인 포트폴리오 홈페이지 제작 완벽 가이드(PDF)"
                    />
                    <div>
                      <i class="ic-badge-discount"></i>
                      20% 할인
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      퍼블리셔 개인 포트폴리오 홈페이지 제작 완벽 가이드(PDF)
                    </div>
                    <div class="instructor">코딩웍스(Coding Works)</div>
                    <div class="price">
                      <span class="del">38,500</span>
                      <span> ₩30,800 </span>
                    </div>
                    <div class="tags">
                      <span class="tag-new"> 새강의 </span>
                      <span class="tag-discount">할인중</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    퍼블리셔 개인 포트폴리오 홈페이지 제작 완벽 가이드(PDF)
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
                      <span> 웹 퍼블리싱, 취업 · 이직</span>
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
                      <span> 포트폴리오, 웹 디자인, HTML/CSS</span>
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
                      src="./assets/images/recent-4.jpeg"
                      alt="따라하며 배우는 노드, 리액트 시리즈 - 레딧 사이트 만들기(NextJS)"
                    />
                    <div>
                      <i class="ic-badge-discount"></i>
                      20% 할인
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">
                      따라하며 배우는 노드, 리액트 시리즈 - 레딧 사이트
                      만들기(NextJS)
                    </div>
                    <div class="instructor">John Ahn</div>
                    <div class="price">
                      <span class="del">44,000</span>
                      <span> ₩35,200 </span>
                    </div>
                    <div class="tags">
                      <span class="tag-new"> 새강의 </span>
                      <span class="tag-discount">할인중</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">
                    따라하며 배우는 노드, 리액트 시리즈 - 레딧 사이트
                    만들기(NextJS)
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
                      <span> 클론코딩, Node.js, React</span>
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
                      <span> 카피라이팅, 서비스 기획</span>
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
                      src="./assets/images/recent-5.jpeg"
                      alt="엑셀 분석작업의 모든것"
                    />
                    <div>
                      <i class="ic-badge-discount"></i>
                      10% 할인
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="lecture-title">엑셀 분석작업의 모든것</div>
                    <div class="instructor">은희쌤</div>
                    <div class="price">
                      <span class="del">11,000</span>
                      <span> ₩9,900 </span>
                    </div>
                    <div class="tags">
                      <span class="tag-new"> 새강의 </span>
                      <span class="tag-discount">할인중</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="card-back">
                <a href="/">
                  <p class="lecture-title">엑셀 분석작업의 모든것</p>
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
                      <span> 오피스</span>
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
                      <span> Excel, MS-Office</span>
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

export default RecentCourse
