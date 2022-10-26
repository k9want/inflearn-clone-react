import React from 'react'
import useIndexCardList from '../../hook/useIndexCardList'

function NewbieCourse({ newbieCourse }) {
  return (
    <section className="newbie-course">
      <div className="container">
        <div className="course-list">
          <header className="course-header">
            <a href="/">
              <h1 className="course-title">
                왕초보도 할 수 있어요 💪 <i className="ic-next"></i>
              </h1>
            </a>
            <span className="course-text">
              이미 검증된 쉽고 친절한 입문 강의!!
            </span>
          </header>
          <div className="courses-card-wrapper">
            {useIndexCardList(newbieCourse)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewbieCourse
