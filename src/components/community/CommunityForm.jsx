import React from 'react'
import styled from 'styled-components'
function CommunityForm({ formPlaceholder }) {
  return (
    <CommunityFormLayout>
      <CommunityFormBox>
        <CommunityFormInputBox>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#212529"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5 7c0 .59-.116 1.176-.343 1.722-.226.546-.557 1.042-.975 1.46-.418.418-.914.75-1.46.975-.546.226-1.131.343-1.722.343-.59 0-1.176-.117-1.722-.343-.546-.226-1.042-.557-1.46-.975-.418-.418-.75-.914-.975-1.46C2.616 8.176 2.5 7.591 2.5 7c0-1.194.474-2.338 1.318-3.182C4.662 2.974 5.807 2.5 7 2.5c1.193 0 2.338.474 3.182 1.318C11.026 4.662 11.5 5.806 11.5 7zm-.82 4.74c-1.206.936-2.723 1.377-4.242 1.234-1.52-.143-2.928-.86-3.937-2.005C1.49 9.825.956 8.34 1.004 6.813c.047-1.526.675-2.976 1.754-4.055 1.08-1.08 2.53-1.707 4.055-1.755 1.525-.047 3.012.488 4.156 1.498 1.145 1.01 1.862 2.417 2.005 3.937.143 1.52-.298 3.036-1.234 4.242l3.04 3.04c.074.069.133.151.174.243.04.092.063.192.065.292.001.101-.017.201-.055.294-.038.094-.094.179-.165.25-.071.071-.156.127-.25.165-.093.038-.193.056-.293.054-.101-.001-.2-.023-.293-.064-.091-.041-.174-.1-.243-.174l-3.04-3.04z"
            ></path>
          </svg>
          <CommunityFormInput type="text" placeholder={formPlaceholder} />
        </CommunityFormInputBox>
        <CommunityFormSearchButton>검색</CommunityFormSearchButton>
      </CommunityFormBox>
      <CommunityFormBox>
        <CommunityFormInputBox>
          <svg
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#3E4042"
              fillRule="evenodd"
              d="M5.773 1.455c-.283 0-.518.216-.542.498L5 4.727H2.545c-.3 0-.545.244-.545.546 0 .301.244.545.545.545H4.91l-.364 4.364h-2c-.3 0-.545.244-.545.545 0 .301.244.546.545.546h1.91l-.224 2.684c-.027.317.224.588.542.588.282 0 .518-.216.541-.498l.231-2.774H9.91l-.224 2.684c-.026.317.224.588.542.588.283 0 .518-.216.542-.498L11 11.273h2.454c.302 0 .546-.245.546-.546 0-.301-.244-.545-.546-.545h-2.363l.364-4.364h2c.3 0 .545-.244.545-.545 0-.302-.244-.546-.546-.546h-1.909l.224-2.684c.027-.317-.224-.588-.542-.588-.282 0-.518.216-.541.498l-.232 2.774H6.091l.224-2.684c.026-.317-.224-.588-.542-.588zM6 5.818l-.364 4.364H10l.364-4.364H6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <CommunityFormInput type="text" placeholder="태그로 검색해보세요!" />
        </CommunityFormInputBox>
        <CommunityFormButton>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#212529"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.254 5.333C3.26 3.167 5.456 1.667 8 1.667c2.964 0 5.454 2.037 6.144 4.788.067.268.338.43.606.363.268-.067.43-.338.364-.606C14.315 3.026 11.434.667 8 .667c-2.702 0-5.061 1.46-6.333 3.634V3.167c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.5c0 .368.298.666.666.666h2.5c.276 0 .5-.223.5-.5 0-.276-.224-.5-.5-.5h-1.58zM1.856 9.545c-.067-.268-.338-.43-.606-.363-.268.067-.43.338-.364.606.799 3.186 3.68 5.545 7.114 5.545 2.702 0 5.061-1.46 6.333-3.634v1.134c0 .277.224.5.5.5.277 0 .5-.223.5-.5v-2.5c0-.368-.298-.666-.666-.666h-2.5c-.277 0-.5.224-.5.5s.223.5.5.5h1.58c-1.008 2.166-3.203 3.666-5.747 3.666-2.964 0-5.454-2.037-6.144-4.788z"
            ></path>
          </svg>
          초기화
        </CommunityFormButton>
      </CommunityFormBox>
      <CommunityFormSearchButton>검색</CommunityFormSearchButton>
    </CommunityFormLayout>
  )
}

const CommunityFormLayout = styled.div`
  padding: 20px 0 22px;

  @media screen and (min-width: 769px) {
    padding-bottom: 38px;
    & > button {
      display: none;
    }
  }
`

const CommunityFormBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    button {
      display: none;
    }
  }
`

const CommunityFormInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 10px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: #fff;
  letter-spacing: -0.3px;

  :focus-within {
    border-color: #00c471;
  }

  svg {
    margin-right: 12px;
  }
`

const CommunityFormInput = styled.input`
  padding: 0;
  width: 100%;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  border: 0;
  background: none;

  ::placeholder {
    font-weight: 500;
    color: #ccd2d8;
  }
`

const CommunityFormButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  height: 48px;
  padding: 0 12px;
  margin-left: 16px;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-weight: 500;
  color: #1b1c1d;
  cursor: pointer;
  -webkit-appearance: none;
  svg {
    margin-right: 12px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
    margin-left: 0;
  }
`

const CommunityFormSearchButton = styled(CommunityFormButton)`
  font-weight: 700;
  border: 1px solid;
  border-color: #00c471;
  border-radius: 4px;
  background-color: #00c471;
  color: #fff;
`

export default CommunityForm
