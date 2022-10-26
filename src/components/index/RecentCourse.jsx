import React from 'react'
import { Link } from 'react-router-dom'
import useIndexCardList from '../../hook/useIndexCardList'
function RecentCourse({ recentCourse }) {
  return (
    <section className="recent-course">
      <div className="container">
        <div className="course-list">
          <header className="course-header">
            <Link to="/courses">
              <h1 className="course-title">
                따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️
                <span>NEW!! </span>
                <i className="ic-next"></i>
              </h1>
            </Link>
          </header>
          <div className="courses-card-wrapper">
            {useIndexCardList(recentCourse)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentCourse
