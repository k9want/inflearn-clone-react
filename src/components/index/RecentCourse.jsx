import React from 'react'
import useCardList from '../../hook/useCardList'

function RecentCourse({ recentCourse }) {
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

          {useCardList(recentCourse)}
        </div>
      </div>
    </section>
  )
}

export default RecentCourse
