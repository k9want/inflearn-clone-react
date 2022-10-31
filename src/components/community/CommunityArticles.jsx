import React from 'react'
import styled, { css } from 'styled-components'
import { CommunityTagsItem } from './CommunityTags'

function CommunityArticles({ data, now }) {
  return (
    <CommunityArticlesLayout>
      <CommunityArticlesList>
        {data.result.articles.map((article) => {
          return (
            <CommunityArticlesItem key={article.id}>
              <a href={window.location.href}>
                <CommunityArticlesBox>
                  {/* info */}
                  <CommunityArticlesInfoBox>
                    <CommunityArticlesTitleBox>
                      {now === 2 ? (
                        <CommunityArticlesTitleSpan
                          recruited={article.recruited}
                        >
                          {article.recruited ? '모집중' : '모집완료'}
                        </CommunityArticlesTitleSpan>
                      ) : null}
                      <CommunityArticlesTitle>
                        {article.title}
                      </CommunityArticlesTitle>
                    </CommunityArticlesTitleBox>

                    <CommunityArticlesDescription>
                      {article.description}
                    </CommunityArticlesDescription>
                    <CommunityArticlesTagList>
                      {article.tags
                        ? article.tags.map((tag, i) => {
                            return (
                              <CommunityTagsItem
                                style={{ marginBottom: '5px' }}
                                key={i}
                              >
                                <button>
                                  <span>#&nbsp;</span>
                                  <span>{tag}</span>
                                </button>
                              </CommunityTagsItem>
                            )
                          })
                        : null}
                    </CommunityArticlesTagList>
                    <CommunityArticlesInfoFooter>
                      <strong>{article.name}</strong>
                      <span>&nbsp;·&nbsp;</span>
                      <strong style={{ flexShrink: 0 }}>
                        {article.createdAt}
                      </strong>
                      {article.courseTitle ? (
                        <>
                          <span>&nbsp;·&nbsp;</span>
                          <strong>{article.courseTitle}</strong>
                        </>
                      ) : null}
                    </CommunityArticlesInfoFooter>
                  </CommunityArticlesInfoBox>
                  {/* additional */}
                  <CommunityArticlesAdditionalInfoBox>
                    {/* comment */}
                    <CommunityArticlesCommentBox>
                      <CommunityArticlesCommentCount>
                        {article.commentCount}
                      </CommunityArticlesCommentCount>
                      <span>{now > 0 ? '댓글' : '답변'}</span>
                    </CommunityArticlesCommentBox>
                    <CommunityArticlesLikeBox>
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#616568"
                          d="M9.333 13.605c-.328.205-.602.365-.795.473-.102.057-.205.113-.308.168h-.002c-.143.074-.313.074-.456 0-.105-.054-.208-.11-.31-.168-.193-.108-.467-.268-.795-.473-.655-.41-1.53-1.007-2.408-1.754C2.534 10.382.667 8.22.667 5.676c0-2.308 1.886-4.01 3.824-4.01 1.529 0 2.763.818 3.509 2.07.746-1.252 1.98-2.07 3.509-2.07 1.938 0 3.824 1.702 3.824 4.01 0 2.545-1.867 4.706-3.592 6.175-.878.747-1.753 1.344-2.408 1.754z"
                        ></path>
                      </svg>
                      {article.likeCount}
                    </CommunityArticlesLikeBox>
                  </CommunityArticlesAdditionalInfoBox>
                </CommunityArticlesBox>
              </a>
            </CommunityArticlesItem>
          )
        })}
      </CommunityArticlesList>
    </CommunityArticlesLayout>
  )
}

const CommunityArticlesLayout = styled.div`
  margin-bottom: 40px;
`

const CommunityArticlesList = styled.ul``

const CommunityArticlesItem = styled.li``

const CommunityArticlesBox = styled.div`
  display: flex;
  padding: 20px 16px;
  border-bottom: 1px solid #dee2e6;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
  }
`

const CommunityArticlesInfoBox = styled.div`
  flex: 1 1 590px;
  width: 0;
  max-width: 590px;
  @media screen and (max-width: 768px) {
    flex: 1 1 110px;
    width: 100%;
    margin-bottom: 24px;
  }
`

const CommunityArticlesTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`
const CommunityArticlesTitleSpan = styled.span`
  background-color: #adb5bd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.3px;
  height: 22px;
  padding: 0 6px;
  margin-right: 8px;
  color: #fff;
  font-weight: 700;
  flex-shrink: 0;
  ${(props) =>
    props.recruited &&
    css`
      background-color: #00c471;
    `}
  @media screen and (max-width: 768px) {
    margin-bottom: 4px;
  }
`

const CommunityArticlesTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  white-space: nowrap;
  white-space: normal;
  line-height: 1.5;
  text-align: left;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-right: 9px;
  font-size: 18px;
  font-weight: 700;
  color: #1b1c1d;
`

const CommunityArticlesDescription = styled.p`
  margin-bottom: 12px;
  max-height: 44px;
  color: #616568;
  overflow: hidden;
  font-size: 15px;
`

const CommunityArticlesTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const CommunityArticlesInfoFooter = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #858a8d;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: nowrap;
  min-width: 0;

  strong {
    font-weight: 400;
    flex-shrink: 1;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const CommunityArticlesAdditionalInfoBox = styled.div`
  flex: 1 1 146px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  max-width: 146px;

  @media screen and (max-width: 768px) {
    flex: 1 1 90px;
    flex-direction: row;
    margin-left: 0;
    max-width: 100%;
    max-height: 42px;
  }
`

const CommunityArticlesCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 1px solid #dee2e6;

  span {
    font-size: 12px;
    font-weight: 500;
    color: #616568;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 80px;
    height: 42px;
    border-radius: 100px;

    strong {
      margin-right: 5px;
    }
  }
`

const CommunityArticlesCommentCount = styled.strong`
  font-size: 18px;
  font-weight: 500;
  color: #1b1c1d;
`
const CommunityArticlesLikeBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 40px;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -0.3px;

  svg {
    margin-right: 4px;
  }
`

export default CommunityArticles
