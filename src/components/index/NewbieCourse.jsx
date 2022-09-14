import React from 'react'
import useCardList from '../../hook/useCardList'

function NewbieCourse({ newbieCourse }) {
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

          {useCardList(newbieCourse)}
        </div>
      </div>
    </section>
  )
}

export default NewbieCourse
