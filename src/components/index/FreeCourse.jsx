import React from 'react'
import useIndexCardList from '../../hook/useIndexCardList'
function FreeCourse({ freeCourse }) {
  return (
    <section className="free-course">
      <div className="container">
        <div className="course-list">
          <header className="course-header">
            <a href="/">
              <h1 className="course-title">
                무료강의? 오히려 좋아 ✨ <i className="ic-next"></i>
              </h1>
            </a>
            <span className="course-text">
              무료 강의부터 가볍게 시작해 보세요.
            </span>
          </header>

          <div className="courses-card-wrapper">
            {useIndexCardList(freeCourse)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeCourse
