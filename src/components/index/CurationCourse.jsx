import React from 'react'

function CurationCourse({ curationCourse }) {
  return (
    <section className="curation-course">
      <div className="container">
        <header className="course-header">
          <a href="/">
            <h1 className="course-title">
              읽어보기
              <i className="ic-next"></i>
            </h1>
          </a>
        </header>

        <div className="card-list">
          {curationCourse.map((data, i) => {
            return (
              <div className="curation-card" key={`curationCourse-${i}`}>
                <a href="/">
                  <div>
                    <img
                      src={require('../../assets/images/index/' + data.imgUrl)}
                      alt={data.title}
                    />
                  </div>
                  <div className="card-content">
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
