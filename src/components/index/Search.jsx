import React from 'react'

function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="search-wrapper">
          <h1>배우고, 나누고, 성장하세요</h1>
          <div className="search-bar">
            <input type="text" placeholder="배우고 싶은 지식을 입력해보세요." />
            <button type="button">
              <i className="ic-search"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
