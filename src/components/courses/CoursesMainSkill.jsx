import React from 'react'
import { useState } from 'react'
import { CourseSkill } from './CourseSkill'

function CoursesMainSkill() {
  const [isMore, setIsMore] = useState(false)
  // const [isActive, setIsActive] = useState(CourseSkill.result)

  return (
    <div className="courses-skill">
      <div className={'courses-skill-btn-group ' + (isMore ? 'is-active' : '')}>
        <div className="courses-skill-input-wrapper">
          <input type="text" placeholder="기술검색" />
          <button className="input-remove">
            <i className="ic-x"></i>
          </button>
        </div>

        {CourseSkill.result.map((data, i) => {
          let end = 15
          if (i < end && !isMore) {
            return (
              <button className="courses-skill-btn" key={`courses-skill-${i} `}>
                {data}
              </button>
            )
          } else if (isMore) {
            return (
              <button className="courses-skill-btn" key={`courses-skill-${i}`}>
                {data}
              </button>
            )
          }
        })}

        <button
          className={'courses-search-more-btn ' + (isMore ? 'is-active' : '')}
          onClick={() => {
            setIsMore(!isMore)
          }}
        >
          {isMore ? '접기' : <i className="ic-ellipsis"></i>}
        </button>
      </div>
    </div>
  )
}

export default CoursesMainSkill
