import React from 'react'
import { useState } from 'react'
import { coursesNav } from './coursesNav'

function CoursesPanelLeft() {
  const [isOpen, setIsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const handleIsOpen = (i) => {
    let copy_io = [...isOpen]
    copy_io[i] = !copy_io[i]
    setIsOpen(copy_io)
  }

  return (
    <div class="courses-panel-left sm-rm-hidden">
      <nav>
        <div class="nav-wrapper-group">
          <div class="nav-wrapper is-active">
            <a href="/courses" class="nav-content-total-lecture">
              전체 강의
            </a>
          </div>
          {coursesNav.result.map((data, i) => {
            return (
              <div class={'nav-wrapper ' + (isOpen[i] ? 'is-active' : '')}>
                <div class="nav-toggle" onClick={() => handleIsOpen(i)}>
                  {data.title}
                </div>
                <div class="nav-content-group">
                  {data.arr.map((a, i) => {
                    return (
                      <a
                        href={a.url}
                        class="nav-content"
                        key={`development-${i}`}
                      >
                        {a.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default CoursesPanelLeft
