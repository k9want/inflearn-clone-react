import React, { useState } from 'react'

function CoursesMainFilter() {
  const [isHiddenFloatingBox, setIsHiddenFloatingBox] = useState(true)
  const [isActive, setIsActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const [isCheck, setIsCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const handleIsCheck = (e, i) => {
    e.preventDefault()
    let copy_cp = [...isCheck]
    copy_cp[i] = !copy_cp[i]
    setIsCheck(copy_cp)
  }

  const onClickConfirmButton = () => {
    setIsHiddenFloatingBox(true)
    setIsActive(isCheck)
  }

  const onClickResetButton = () => {
    setIsCheck([false, false, false, false, false, false])
  }

  return (
    <div className="courses-filter">
      <div
        className={
          'filter-item-group ' + (!isHiddenFloatingBox ? 'is-active' : null)
        }
      >
        <div
          className="filter-item filter-left"
          onClick={() => setIsHiddenFloatingBox(!isHiddenFloatingBox)}
        >
          <i className="ic-slider"></i>
          <span>필터</span>
        </div>
        <div
          className="filter-right"
          onClick={() => setIsHiddenFloatingBox(!isHiddenFloatingBox)}
        >
          <span className={'filter-item ' + (isActive[0] ? 'is-active' : null)}>
            유료
          </span>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z"
              fill="#ABB0B5"
            ></path>
          </svg>
          <span className={'filter-item ' + (isActive[1] ? 'is-active' : null)}>
            무료
          </span>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z"
              fill="#ABB0B5"
            ></path>
          </svg>
          <span className={'filter-item ' + (isActive[2] ? 'is-active' : null)}>
            할인중
          </span>
          <span className="course-divider"></span>
          <span className={'filter-item ' + (isActive[3] ? 'is-active' : null)}>
            {' '}
            입문{' '}
          </span>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z"
              fill="#ABB0B5"
            ></path>
          </svg>
          <span className={'filter-item ' + (isActive[4] ? 'is-active' : null)}>
            {' '}
            초급{' '}
          </span>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8C5.55242 8 6 7.55242 6 7C6 6.44758 5.55242 6 5 6C4.44758 6 4 6.44758 4 7C4 7.55242 4.44758 8 5 8Z"
              fill="#ABB0B5"
            ></path>
          </svg>
          <span className={'filter-item ' + (isActive[5] ? 'is-active' : null)}>
            {' '}
            중급이상{' '}
          </span>
        </div>
        <div className="filter-floating-box">
          <div className="floating-box-wrapper">
            <div className="floating-box-content-group">
              <div className="floating-box-content">
                <div className="floating-box-title">유/무료</div>
                <div
                  className={
                    'floating-box-checkbox ' + (isCheck[0] ? 'is-active' : null)
                  }
                  onClick={(e) => handleIsCheck(e, 0)}
                >
                  <input
                    type="checkbox"
                    id="course-paid"
                    className="visually-hidden"
                  />
                  <label htmlFor="course-paid">
                    <span className="ic-check">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7799 0.220316C11.9203 0.360936 11.9992 0.551567 11.9992 0.750317C11.9992 0.949067 11.9203 1.13969 11.7799 1.28032L4.52985 8.53032C4.38922 8.67072 4.1986 8.74962 3.99985 8.74962C3.8011 8.74962 3.61047 8.67072 3.46985 8.53032L0.219851 5.28032C0.087371 5.13814 0.015251 4.9501 0.018671 4.75579C0.022101 4.56149 0.100811 4.37611 0.238231 4.23869C0.375641 4.10128 0.561031 4.02257 0.755331 4.01914C0.949631 4.01571 1.13767 4.08784 1.27985 4.22032L3.99985 6.94032L10.7199 0.220316C10.8605 0.0798664 11.0511 0.000976562 11.2499 0.000976562C11.4486 0.000976562 11.6393 0.0798664 11.7799 0.220316Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    유료 강의
                  </label>
                </div>
                <div
                  className={
                    'floating-box-checkbox ' + (isCheck[1] ? 'is-active' : null)
                  }
                  onClick={(e) => handleIsCheck(e, 1)}
                >
                  <input
                    type="checkbox"
                    id="course-free"
                    className="visually-hidden"
                  />
                  <label htmlFor="course-free">
                    <span className="ic-check">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7799 0.220316C11.9203 0.360936 11.9992 0.551567 11.9992 0.750317C11.9992 0.949067 11.9203 1.13969 11.7799 1.28032L4.52985 8.53032C4.38922 8.67072 4.1986 8.74962 3.99985 8.74962C3.8011 8.74962 3.61047 8.67072 3.46985 8.53032L0.219851 5.28032C0.087371 5.13814 0.015251 4.9501 0.018671 4.75579C0.022101 4.56149 0.100811 4.37611 0.238231 4.23869C0.375641 4.10128 0.561031 4.02257 0.755331 4.01914C0.949631 4.01571 1.13767 4.08784 1.27985 4.22032L3.99985 6.94032L10.7199 0.220316C10.8605 0.0798664 11.0511 0.000976562 11.2499 0.000976562C11.4486 0.000976562 11.6393 0.0798664 11.7799 0.220316Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    무료 강의
                  </label>
                </div>
                <div
                  className={
                    'floating-box-checkbox ' + (isCheck[2] ? 'is-active' : null)
                  }
                  onClick={(e) => handleIsCheck(e, 2)}
                >
                  <input
                    type="checkbox"
                    id="course-discount"
                    className="visually-hidden"
                  />
                  <label htmlFor="course-discount">
                    <span className="ic-check">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7799 0.220316C11.9203 0.360936 11.9992 0.551567 11.9992 0.750317C11.9992 0.949067 11.9203 1.13969 11.7799 1.28032L4.52985 8.53032C4.38922 8.67072 4.1986 8.74962 3.99985 8.74962C3.8011 8.74962 3.61047 8.67072 3.46985 8.53032L0.219851 5.28032C0.087371 5.13814 0.015251 4.9501 0.018671 4.75579C0.022101 4.56149 0.100811 4.37611 0.238231 4.23869C0.375641 4.10128 0.561031 4.02257 0.755331 4.01914C0.949631 4.01571 1.13767 4.08784 1.27985 4.22032L3.99985 6.94032L10.7199 0.220316C10.8605 0.0798664 11.0511 0.000976562 11.2499 0.000976562C11.4486 0.000976562 11.6393 0.0798664 11.7799 0.220316Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    할인중 강의
                  </label>
                </div>
              </div>
              <div className="floating-box-content">
                <div className="floating-box-title">난이도</div>
                <div
                  className={
                    'floating-box-checkbox ' + (isCheck[3] ? 'is-active' : null)
                  }
                  onClick={(e) => handleIsCheck(e, 3)}
                >
                  <input
                    type="checkbox"
                    id="course-lv1"
                    className="visually-hidden"
                  />
                  <label htmlFor="course-lv1">
                    <span className="ic-check">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7799 0.220316C11.9203 0.360936 11.9992 0.551567 11.9992 0.750317C11.9992 0.949067 11.9203 1.13969 11.7799 1.28032L4.52985 8.53032C4.38922 8.67072 4.1986 8.74962 3.99985 8.74962C3.8011 8.74962 3.61047 8.67072 3.46985 8.53032L0.219851 5.28032C0.087371 5.13814 0.015251 4.9501 0.018671 4.75579C0.022101 4.56149 0.100811 4.37611 0.238231 4.23869C0.375641 4.10128 0.561031 4.02257 0.755331 4.01914C0.949631 4.01571 1.13767 4.08784 1.27985 4.22032L3.99985 6.94032L10.7199 0.220316C10.8605 0.0798664 11.0511 0.000976562 11.2499 0.000976562C11.4486 0.000976562 11.6393 0.0798664 11.7799 0.220316Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    입문
                  </label>
                </div>
                <div
                  className={
                    'floating-box-checkbox ' + (isCheck[4] ? 'is-active' : null)
                  }
                  onClick={(e) => handleIsCheck(e, 4)}
                >
                  <input
                    type="checkbox"
                    id="course-lv2"
                    className="visually-hidden"
                  />
                  <label htmlFor="course-lv2">
                    <span className="ic-check">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7799 0.220316C11.9203 0.360936 11.9992 0.551567 11.9992 0.750317C11.9992 0.949067 11.9203 1.13969 11.7799 1.28032L4.52985 8.53032C4.38922 8.67072 4.1986 8.74962 3.99985 8.74962C3.8011 8.74962 3.61047 8.67072 3.46985 8.53032L0.219851 5.28032C0.087371 5.13814 0.015251 4.9501 0.018671 4.75579C0.022101 4.56149 0.100811 4.37611 0.238231 4.23869C0.375641 4.10128 0.561031 4.02257 0.755331 4.01914C0.949631 4.01571 1.13767 4.08784 1.27985 4.22032L3.99985 6.94032L10.7199 0.220316C10.8605 0.0798664 11.0511 0.000976562 11.2499 0.000976562C11.4486 0.000976562 11.6393 0.0798664 11.7799 0.220316Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    초급
                  </label>
                </div>
                <div
                  className={
                    'floating-box-checkbox ' + (isCheck[5] ? 'is-active' : null)
                  }
                  onClick={(e) => handleIsCheck(e, 5)}
                >
                  <input
                    type="checkbox"
                    id="course-lv3"
                    className="visually-hidden"
                  />
                  <label htmlFor="course-lv3">
                    <span className="ic-check">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7799 0.220316C11.9203 0.360936 11.9992 0.551567 11.9992 0.750317C11.9992 0.949067 11.9203 1.13969 11.7799 1.28032L4.52985 8.53032C4.38922 8.67072 4.1986 8.74962 3.99985 8.74962C3.8011 8.74962 3.61047 8.67072 3.46985 8.53032L0.219851 5.28032C0.087371 5.13814 0.015251 4.9501 0.018671 4.75579C0.022101 4.56149 0.100811 4.37611 0.238231 4.23869C0.375641 4.10128 0.561031 4.02257 0.755331 4.01914C0.949631 4.01571 1.13767 4.08784 1.27985 4.22032L3.99985 6.94032L10.7199 0.220316C10.8605 0.0798664 11.0511 0.000976562 11.2499 0.000976562C11.4486 0.000976562 11.6393 0.0798664 11.7799 0.220316Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    중급이상
                  </label>
                </div>
              </div>
            </div>
            <div className="floating-box-footer">
              <div className="floating-box-btn-group">
                <button
                  className="floating-box-btn btn-reset"
                  onClick={() => onClickResetButton()}
                >
                  초기화
                </button>
                <button
                  className="floating-box-btn btn-confirm"
                  onClick={() => onClickConfirmButton()}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-select">
        <select name="order-select" id="courses-order-select">
          <option value="rating">추천순</option>
          <option value="popular">인기순</option>
          <option value="recent">최신순</option>
          <option value="avg">평점순</option>
          <option value="likes">좋아요순</option>
        </select>
      </div>
    </div>
  )
}

export default CoursesMainFilter
