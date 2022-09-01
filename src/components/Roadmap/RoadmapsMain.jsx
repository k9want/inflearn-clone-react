import React from 'react'
import RoadmapsCard from './RoadmapsCard'
import { roadmapsCardDummy } from './roadmapsCardDummy'

export default function RoadmapsMain() {
  return (
    <main id="roadmaps-main">
      <div className="container">
        <div className="roadmaps-nav">
          <div className="roadmaps-nav-left">
            <button type="button" className="lg-hidden">
              <i className="ic-slider"></i>
            </button>
          </div>

          <div className="roadmaps-nav-right">
            <button type="button" className="is-active">
              <i className="ic-th-lg"></i>
            </button>
            <button type="button">
              <i className="ic-menu"></i>
            </button>
          </div>
        </div>

        <div className="panel">
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
                <div className="nav-toggle is-active">분야별</div>
                <div className="nav-list">
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term1"
                      className="visually-hidden"
                    />
                    <label for="term1">개발 · 프로그래밍</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term2"
                      className="visually-hidden"
                    />
                    <label for="term2">보안 · 네트워크</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term3"
                      className="visually-hidden"
                    />
                    <label for="term3">데이터 사이언스</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term4"
                      className="visually-hidden"
                    />
                    <label for="term4">게임 개발</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term5"
                      className="visually-hidden"
                    />
                    <label for="term5">크리에이티브</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term6"
                      className="visually-hidden"
                    />
                    <label for="term6">직무 · 마케팅</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term7"
                      className="visually-hidden"
                    />
                    <label for="term7">학문 · 외국어</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term8"
                      className="visually-hidden"
                    />
                    <label for="term8">커리어</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="term9"
                      className="visually-hidden"
                    />
                    <label for="term9">교양</label>
                  </div>
                </div>

                <div className="nav-toggle is-active">시작 레벨</div>
                <div className="nav-list">
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="level1"
                      className="visually-hidden"
                    />
                    <label for="level1">입문</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="level2"
                      className="visually-hidden"
                    />
                    <label for="level2">초급</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="level3"
                      className="visually-hidden"
                    />
                    <label for="level3">중급</label>
                  </div>
                </div>

                <div className="nav-toggle is-active">로드맵</div>
                <div className="nav-list">
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="enroll1"
                      className="visually-hidden"
                    />
                    <label for="enroll1">미참여 로드맵</label>
                  </div>
                  <div className="nav-checkbox">
                    <input
                      type="checkbox"
                      id="enroll2"
                      className="visually-hidden"
                    />
                    <label for="enroll2">참여 로드맵</label>
                  </div>
                </div>
              </div>
            </nav>

            <a href="/" className="filter-reset">
              <i className="ic-sync"></i>
              &nbsp;&nbsp; 필터 초기화
            </a>
          </div>
          <div className="panel-right">
            <div className="roadmaps-card-list">
              {roadmapsCardDummy.result.map((data) => {
                return <RoadmapsCard data={data} />
              })}
            </div>

            <nav className="roadmaps-pagination">
              <ul className="pagination-list">
                <li className="pagination-list-previou visually-hidden">
                  <a href="/">
                    <i className="ic-previous"></i>
                    <span>이전</span>
                  </a>
                </li>
                <li className="pagination-list-item is-current">
                  <a href="/">1</a>
                </li>
                <li className="pagination-list-item">
                  <a href="/">2</a>
                </li>
                <li className="pagination-list-item">
                  <a href="/">3</a>
                </li>
                <li className="pagination-list-item">
                  <a href="/">4</a>
                </li>
                <li className="pagination-list-item">
                  <a href="/">5</a>
                </li>
                <li className="pagination-list-item">
                  <a href="/">6</a>
                </li>
                <li className="pagination-list-item">
                  <a href="/">7</a>
                </li>
                <li className="pagination-list-next">
                  <a href="/">
                    <span>다음</span>
                    <i className="ic-next"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}
