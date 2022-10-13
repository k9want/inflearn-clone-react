import React from 'react'
import { useState } from 'react'
import { CourseSkill } from './CourseSkill'

function CoursesMainSkill() {
  const [isMore, setIsMore] = useState(false)
  const [isActive, setIsActive] = useState(CourseSkill.result)

  return (
    <div class="courses-skill">
      <div class={'courses-skill-btn-group ' + (isMore ? 'is-active' : '')}>
        <div class="courses-skill-input-wrapper">
          <input type="text" placeholder="기술검색" />
          <button class="input-remove">
            <i class="ic-x"></i>
          </button>
        </div>

        {CourseSkill.result.map((data, i) => {
          let end = 15
          if (i < end && !isMore) {
            return (
              <button class="courses-skill-btn" key={`courses-skill-${i} `}>
                {data}
              </button>
            )
          } else if (isMore) {
            return (
              <button class="courses-skill-btn" key={`courses-skill-${i}`}>
                {data}
              </button>
            )
          }
        })}

        <button
          class={'courses-search-more-btn ' + (isMore ? 'is-active' : '')}
          onClick={() => {
            setIsMore(!isMore)
          }}
        >
          {isMore ? '접기' : <i class="ic-ellipsis"></i>}
        </button>
      </div>
    </div>
  )
}

export default CoursesMainSkill
