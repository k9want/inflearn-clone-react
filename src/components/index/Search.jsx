import React from 'react'

function Search() {
  return (
    <section class="search">
      <div class="container">
        <div class="search-wrapper">
          <h1>배우고, 나누고, 성장하세요</h1>
          <div class="search-bar">
            <input type="text" placeholder="배우고 싶은 지식을 입력해보세요." />
            <button type="button">
              <i class="ic-search"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
