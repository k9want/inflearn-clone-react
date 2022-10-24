import React from 'react'
import CoursesCard from './CoursesCard'
import CoursesMainFilter from './CoursesMainFilter'
import CoursesPanelLeft from './CoursesPanelLeft'
import CoursesMainSkill from './CoursesMainSkill'
import { coursesPageDummy } from './coursesPageDummy'

function CoursesMain() {
  return (
    <main className="courses">
      <div className="container">
        <CoursesPanelLeft />
        <div className="courses-panel-right">
          <header className="courses-header">
            <h1 className="visually-hidden">전체 카테고리</h1>
            <div className="courses-search">
              <input type="text" placeholder="강의 검색하기" />
              <button>검색</button>
            </div>
          </header>
          <main className="courses-main">
            <div className="breadcrumb">
              <a href="/courses" className="category-total">
                전체
              </a>
            </div>

            <CoursesMainSkill />
            <CoursesMainFilter />
            <div className="courses-card-list">
              {coursesPageDummy.result.courses.map((data, i) => {
                return <CoursesCard data={data} key={`coursesCard-${i}`} />
              })}
            </div>

            <nav className="courses-pagination">
              <ul className="courses-pagination-list">
                <li className="pagination-list-previous courses-pagination-list-item">
                  <a href="/"> 이전 페이지 </a>
                </li>
                <li className="courses-pagination-list-item is-current sm-hidden">
                  <a href="/">1</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">2</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">3</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">4</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">5</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">6</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">7</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">...</a>
                </li>
                <li className="courses-pagination-list-item sm-hidden">
                  <a href="/">86</a>
                </li>
                <li className="pagination-list-next courses-pagination-list-item">
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
