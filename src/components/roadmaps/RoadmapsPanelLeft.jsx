import React, { useState } from 'react'

function RoadmapsPanelLeft() {
  const [open, setOpen] = useState([true, true, true])

  function openList(i) {
    let openCopy = [...open]
    openCopy[i] = !open[i]
    setOpen(openCopy)
  }

  return (
    <div className="panel-left sm-rm-hidden">
      <div className="select-sort">
        <select name="sortby">
          <option value="rating">추천순</option>
          <option value="cnt">학생수순</option>
          <option value="like">좋아요순</option>
          <option value="share">공유순</option>
          <option value="new">최신순</option>
          <option value="old">오래된순</option>
        </select>
      </div>

      <nav>
        <h1 className="visually-hidden">checkbox navigation</h1>

        <div className="nav-list-group">
          <div
            className={'nav-list-wrapper' + (open[0] ? ' is-active' : '')}
            onClick={() => openList(0)}
          >
            <div className="nav-toggle">분야별</div>
            <div className="nav-list">
              <div className="nav-checkbox">
                <input type="checkbox" id="term1" className="visually-hidden" />
                <label htmlFor="term1">개발 · 프로그래밍</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term2" className="visually-hidden" />
                <label htmlFor="term2">보안 · 네트워크</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term3" className="visually-hidden" />
                <label htmlFor="term3">데이터 사이언스</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term4" className="visually-hidden" />
                <label htmlFor="term4">게임 개발</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term5" className="visually-hidden" />
                <label htmlFor="term5">크리에이티브</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term6" className="visually-hidden" />
                <label htmlFor="term6">직무 · 마케팅</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term7" className="visually-hidden" />
                <label htmlFor="term7">학문 · 외국어</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term8" className="visually-hidden" />
                <label htmlFor="term8">커리어</label>
              </div>
              <div className="nav-checkbox">
                <input type="checkbox" id="term9" className="visually-hidden" />
                <label htmlFor="term9">교양</label>
              </div>
            </div>
          </div>

          <div
            className={'nav-list-wrapper' + (open[1] ? ' is-active' : '')}
            onClick={() => openList(1)}
          >
            <div className="nav-toggle">시작 레벨</div>
            <div className="nav-list">
              <div className="nav-checkbox">
                <input
                  type="checkbox"
                  id="level1"
                  className="visually-hidden"
                />
                <label htmlFor="level1">입문</label>
              </div>
              <div className="nav-checkbox">
                <input
                  type="checkbox"
                  id="level2"
                  className="visually-hidden"
                />
                <label htmlFor="level2">초급</label>
              </div>
              <div className="nav-checkbox">
                <input
                  type="checkbox"
                  id="level3"
                  className="visually-hidden"
                />
                <label htmlFor="level3">중급</label>
              </div>
            </div>
          </div>

          <div
            className={'nav-list-wrapper' + (open[2] ? ' is-active ' : '')}
            onClick={() => openList(2)}
          >
            <div className="nav-toggle">로드맵</div>
            <div className="nav-list">
              <div className="nav-checkbox">
                <input
                  type="checkbox"
                  id="enroll1"
                  className="visually-hidden"
                />
                <label htmlFor="enroll1">미참여 로드맵</label>
              </div>
              <div className="nav-checkbox">
                <input
                  type="checkbox"
                  id="enroll2"
                  className="visually-hidden"
                />
                <label htmlFor="enroll2">참여 로드맵</label>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <a href="/roadmaps" className="filter-reset">
        <i className="ic-sync"></i>
        &nbsp;&nbsp; 필터 초기화
      </a>
    </div>
  )
}

export default RoadmapsPanelLeft
