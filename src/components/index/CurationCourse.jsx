import React from 'react'

function CurationCourse({ curationCourse }) {
  return (
    <section class="curation-course">
      <div class="container">
        <header class="course-header">
          <a href="/">
            <h1 class="course-title">
              읽어보기
              <i class="ic-next"></i>
            </h1>
          </a>
        </header>

        <div class="card-list">
          {curationCourse.map((data, i) => {
            return (
              <div class="curation-card" key={`curationCourse-${i}`}>
                <a href="/">
                  <div>
                    <img
                      src={require('../../assets/images/index/' + data.imgUrl)}
                      alt={data.title}
                    />
                  </div>
                  <div class="card-content">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CurationCourse
