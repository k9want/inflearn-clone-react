import React from 'react'
import styled from 'styled-components'

function MentorsCard({ data }) {
  return (
    <MentorsCardWrapper>
      <MentorsCardTop>
        <div>
          <MentorsCardTitle>{data.title}</MentorsCardTitle>
        </div>
        <MentorsInfo>
          {data.job ? (
            <div>
              <dt>직무</dt>
              <dd>{data.job}</dd>
            </div>
          ) : null}
          {data.career ? (
            <div>
              <dt>경력</dt>
              <dd>{data.career}</dd>
            </div>
          ) : null}
          {data.company ? (
            <MentorsCompany>
              <dt>현직</dt>
              <dd>{data.company}</dd>
            </MentorsCompany>
          ) : null}
          <MentorsImgWrapper>
            {data.imgUrl ? (
              <img src={data.imgUrl} alt="" />
            ) : (
              <img
                src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
                alt=""
              />
            )}
          </MentorsImgWrapper>
        </MentorsInfo>
      </MentorsCardTop>
      <MentorsCardBottom>
        <div>
          <a href="/mentors">{data.mentor}</a>
          {data.rating ? (
            <MentorsCardRating>
              <i className="ic-star-filled"></i>
              <span>{data.rating}</span>
              <i className="ic-next"></i>
            </MentorsCardRating>
          ) : null}
        </div>
      </MentorsCardBottom>
    </MentorsCardWrapper>
  )
}

const MentorsCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 241px;
  height: 100%;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 8px 18px -5px rgb(23, 39, 75, 5%);
  border: 1px solid #e9ebee;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgb(0, 0, 0, 8%);
  }
`

const MentorsCardTop = styled.div`
  position: relative;
  height: 100%;
`

const MentorsCardTitle = styled.h3`
  font-weight: 400;
  letter-spacing: -0.3px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  white-space: nowrap;
  white-space: normal;
  line-height: 1.5;
  max-height: '4.5px';
  text-align: left;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #1b1c1d;
  margin-bottom: 8px;
  line-height: 24px;
`

const MentorsInfo = styled.dl`
  div {
    display: flex;
    font-size: 14px;
    line-height: 1.5em;
    letter-spacing: -0.3px;
    font-weight: 400;
    color: #abb0b5;
    flex-shrink: 0;
  }

  dt {
    margin-right: 10px;
  }
`

const MentorsCompany = styled.div`
  dd {
    font-weight: 500;
    color: #009d5a;
  }
`

const MentorsImgWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border: 1px solid #e9ebee;
  border-radius: 32px;
`

const MentorsCardBottom = styled.div`
  flex-shrink: 0;
  padding-top: 12px;
  border-top: 1px solid #f1f3f5;
  margin-top: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 28px;

    a {
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: -0.3px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      white-space: normal;
      line-height: 1.5;
      max-height: '1.5px';
      text-align: left;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      color: #abb0b5;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: #1b1c1d;
      }
    }
  }
`

const MentorsCardRating = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 78px;
  padding: 4px 8px;
  border: 0;
  border-radius: 4px;
  margin-left: 4px;
  color: #f9390f;
  background-color: rgba(255, 210, 77, 0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 210, 77, 0.5);
  }

  i {
    ::before {
      font-size: 14px !important;
      margin-right: 3px;
      color: #f9390f !important;
    }
  }

  i:last-child {
    ::before {
      position: relative;
      bottom: 2px;
      font-size: 9px !important;
      margin-left: 4px;
    }
  }

  span {
    line-height: 1.43;
    letter-spacing: -0.3px;
    font-size: 14px;
    font-weight: 500;
  }
`

export default MentorsCard
