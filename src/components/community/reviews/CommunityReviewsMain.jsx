import React from 'react'
import styled from 'styled-components'
import { CommunityLayout } from '../CommunityMain'
import CommunityNav from '../CommunityNav'
import CommunityPagination from '../CommunityPagination'

function CommunityReviewsMain({ navNow, data, page }) {
  const createRating = (rating) => {
    const arrRating = []
    for (let i = 0; i < rating; i++) {
      arrRating.push(
        <svg
          key={i}
          aria-hidden="true"
          data-prefix="fas"
          data-icon="star"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="16"
          height="16"
          data-value="1"
        >
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>
      )
    }
    for (let i = rating; i < 5; i++) {
      arrRating.push(
        <svg
          key={i}
          aria-hidden="true"
          data-prefix="fal"
          data-icon="star"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="16"
          height="16"
          data-value="5"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z"
          ></path>
        </svg>
      )
    }
    return arrRating
  }

  return (
    <CommunityLayout>
      <CommunityNav now={navNow}></CommunityNav>
      <CommunityReviewsMainSection>
        <CommunityReviewsMainBox>
          <CommunityReviewsMainList>
            {data.result.articles.map((article) => {
              return (
                <CommunityReviewsMainItem key={article.id}>
                  <CommunityReviewsMainItemInfoBox>
                    {createRating(article.rating)}

                    <p>{article.description}</p>
                    <CommunityReviewsMainItemMetasBox>
                      <span>좋아요: </span>
                      <i className="ic-heart"></i>
                      <span> {article.likeCount}</span>
                      <span> 글쓴이: </span>
                      <span>{article.name}</span>
                      <span> </span>
                      <span>{article.createdAt}</span>
                      <span> 강의명: </span>
                      <span>{article.courseTitle}</span>
                    </CommunityReviewsMainItemMetasBox>
                  </CommunityReviewsMainItemInfoBox>
                  <CommunityReviewsMainItemImgBox>
                    <img
                      src={article.imgUrl}
                      alt={`${article.courseTitle} + 이미지`}
                    />
                  </CommunityReviewsMainItemImgBox>
                </CommunityReviewsMainItem>
              )
            })}
          </CommunityReviewsMainList>
          <CommunityPagination page={page} />
        </CommunityReviewsMainBox>
        <CommunityReviewsAside>
          <h5>최근 Hot 한 강의 🔥</h5>
          <ul>
            {data.result.hotCourses.map((hotCourse) => {
              return (
                <CommunityReviewsAsideItem key={hotCourse.id}>
                  <a href={window.location.href}>
                    <CommunityReviewsAsideItemInfoBox>
                      <CommunityReviewsAsideItemImgBox>
                        <img
                          src={hotCourse.imgUrl}
                          alt={`${hotCourse.courseTitle} + 이미지`}
                        />
                      </CommunityReviewsAsideItemImgBox>
                      <p>{hotCourse.courseTitle}</p>
                    </CommunityReviewsAsideItemInfoBox>
                  </a>
                </CommunityReviewsAsideItem>
              )
            })}
          </ul>
        </CommunityReviewsAside>
      </CommunityReviewsMainSection>
    </CommunityLayout>
  )
}

const CommunityReviewsMainSection = styled.main`
  display: flex;
  width: 83.3333333333%;
  height: 100%;
  padding: 12px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 16px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 8px;
  }
`

const CommunityReviewsMainBox = styled.div`
  width: 75%;
  padding: 0.75rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

const CommunityReviewsMainList = styled.ul`
  margin-bottom: 32px;
  li:first-child {
    border: none;
  }
`
const CommunityReviewsMainItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border-top: 1px solid hsla(0, 0%, 85.9%, 0.5);
`

const CommunityReviewsMainItemInfoBox = styled.div`
  text-align: left;
  svg {
    width: 1.5em;
    height: 1.5em;
    color: #fdcc11;
  }
`

const CommunityReviewsMainItemMetasBox = styled.div`
  font-size: 0.75rem;
  line-height: 1.5em;
  margin-top: 0.25rem;
  color: #595959;

  i::before {
    color: #ff7867;
  }
`

const CommunityReviewsMainItemImgBox = styled.div`
  height: 100%;
  margin: auto 0.75rem auto 1rem;
  border: 1px solid #dee2e6;

  img {
    display: block;
    height: 78.125px;
    max-width: 120px;
    max-height: 78.125px;
    text-align: center;
  }
`

const CommunityReviewsAside = styled.aside`
  width: 25%;
  padding: 0.75rem;
  h5 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5em;
  }

  @media screen and (max-width: 1024px) {
    display: none !important;
  }
`

const CommunityReviewsAsideItem = styled.li`
  margin-top: 10px;
`

const CommunityReviewsAsideItemInfoBox = styled.div`
  display: flex;
  text-align: left;

  p {
    max-width: 100%;
    word-break: break-all;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
`

const CommunityReviewsAsideItemImgBox = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export default CommunityReviewsMain
