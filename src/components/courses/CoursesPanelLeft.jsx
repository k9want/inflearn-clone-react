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
    <div className="courses-panel-left sm-rm-hidden">
      <nav>
        <div className="nav-wrapper-group">
          <div className="nav-wrapper is-active">
            <a href="/courses" className="nav-content-total-lecture">
              전체 강의
            </a>
          </div>
          {coursesNav.result.map((data, i) => {
            return (
              <div
                className={'nav-wrapper ' + (isOpen[i] ? 'is-active' : '')}
                key={i}
              >
                <div className="nav-toggle" onClick={() => handleIsOpen(i)}>
                  {data.title}
                </div>
                <div className="nav-content-group">
                  {data.arr.map((a, i) => {
                    return (
                      <a
                        href={a.url}
                        className="nav-content"
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
