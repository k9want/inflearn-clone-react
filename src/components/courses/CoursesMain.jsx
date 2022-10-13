import React from 'react'
import CoursesCard from './CoursesCard'
import CoursesMainFilter from './CoursesMainFilter'
import CoursesPanelLeft from './CoursesPanelLeft'
import CoursesMainSkill from './CoursesMainSkill'
import { coursesPageDummy } from './coursesPageDummy'

function CoursesMain() {
  return (
    <main class="courses">
      <div class="container">
        <CoursesPanelLeft />
        <div class="courses-panel-right">
          <header class="courses-header">
            <h1 class="visually-hidden">전체 카테고리</h1>
            <div class="courses-search">
              <input type="text" placeholder="강의 검색하기" />
              <button>검색</button>
            </div>
          </header>
          <main class="courses-main">
            <div class="breadcrumb">
              <a href="/courses" class="category-total">
                전체
              </a>
            </div>

            <CoursesMainSkill />
            <CoursesMainFilter />
            <div class="courses-card-list">
              {coursesPageDummy.result.courses.map((data, i) => {
                return <CoursesCard data={data} />
              })}
            </div>

            <nav class="courses-pagination">
              <ul class="courses-pagination-list">
                <li class="pagination-list-previous courses-pagination-list-item">
                  <a href="/"> 이전 페이지 </a>
                </li>
                <li class="courses-pagination-list-item is-current sm-hidden">
                  <a href="/">1</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">2</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">3</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">4</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">5</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">6</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">7</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">...</a>
                </li>
                <li class="courses-pagination-list-item sm-hidden">
                  <a href="/">86</a>
                </li>
                <li class="pagination-list-next courses-pagination-list-item">
                  <a href="/"> 다음 페이지 </a>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </main>
  )
}

export default CoursesMain
