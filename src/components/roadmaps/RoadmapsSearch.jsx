import React from 'react'

export default function RoadmapsSearch() {
  return (
    <section className="roadmap-search-section">
      <h1>시작부터 실전까지. 로드맵</h1>
      <p>잘 설계된 로드맵을 따라 효율적으로 강의를 학습하세요.</p>
      <p>좋은 로드맵을 다른 사람과 공유하고 함께 들어요.</p>
      <div className="roadmap-search-bar-wrapper">
        <div className="roadmap-search-bar">
          <div className="select-search">
            <select name="search" className="sm-hidden">
              <option value="title">제목</option>
              <option value="description">본문</option>
              <option value="writer">작성자</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="학습 관련 스킬/로드맵 이름/강사명 검색하기"
          />
          <button type="submit">검색</button>
        </div>
      </div>
    </section>
  )
}
