import React from 'react'
import RoadmapsCard from './RoadmapsCard'
import { roadmapsCardDummy } from './roadmapsCardDummy'
import RoadmapsPanelLeft from './RoadmapsPanelLeft'

function RoadmapsMain() {
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
          <RoadmapsPanelLeft />
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

export default RoadmapsMain
