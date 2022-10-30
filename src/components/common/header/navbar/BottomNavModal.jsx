import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'

function BottomNavModal({ setIsHiddenModal, setIsActive }) {
  const nav = [
    '/community/reviews',
    '/community/questions',
    '/community/studies',
    '/mentors',
    '/community/mentorings-reviews',
    '/community/questions',
    '/community/questions',
    '/community/questions',
    '/community/questions',
    '/community/questions',
  ]
  const navigate = useNavigate()

  const onClickBottomNavModalListItem = (i) => {
    setIsHiddenModal(true)
    setIsActive([false, false, false, false])
    navigate(nav[i])
  }

  return (
    <BottomNavModalLayout>
      <BottomNavModalList>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(0)}
        >
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 243.317 243.317"
            >
              <path
                d="M242.949,93.714c-0.882-2.715-3.229-4.694-6.054-5.104l-74.98-10.9l-33.53-67.941c-1.264-2.56-3.871-4.181-6.725-4.181
	c-2.855,0-5.462,1.621-6.726,4.181L81.404,77.71L6.422,88.61C3.596,89.021,1.249,91,0.367,93.714
	c-0.882,2.715-0.147,5.695,1.898,7.688l54.257,52.886L43.715,228.96c-0.482,2.814,0.674,5.658,2.983,7.335
	c2.309,1.678,5.371,1.9,7.898,0.571l67.064-35.254l67.063,35.254c1.097,0.577,2.296,0.861,3.489,0.861c0.007,0,0.014,0,0.021,0
	c0,0,0,0,0.001,0c4.142,0,7.5-3.358,7.5-7.5c0-0.629-0.078-1.24-0.223-1.824l-12.713-74.117l54.254-52.885
	C243.096,99.41,243.832,96.429,242.949,93.714z M173.504,146.299c-1.768,1.723-2.575,4.206-2.157,6.639l10.906,63.581
	l-57.102-30.018c-2.185-1.149-4.795-1.149-6.979,0l-57.103,30.018l10.906-63.581c0.418-2.433-0.389-4.915-2.157-6.639
	l-46.199-45.031l63.847-9.281c2.443-0.355,4.555-1.889,5.647-4.103l28.55-57.849l28.55,57.849c1.092,2.213,3.204,3.748,5.646,4.103
	l63.844,9.281L173.504,146.299z"
              />
            </svg>
          </IconWrapper>
          <span>수강평</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(1)}
        >
          <IconWrapper>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 19C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C3.82475 18.4816 4.69989 18.7706 6 18.8985"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 8.48352C10.5 7.49451 11 7 12 7C13.2461 7 14 7.98901 14 8.97802C14 9.96703 13.5 10.011 12 11V12M12 14.5V15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M14 19C12.7635 19 11.4022 19.4992 10.1586 20.145C8.16119 21.1821 7.16249 21.7007 6.67035 21.3703C6.1782 21.0398 6.27135 20.0151 6.45766 17.9657L6.5 17.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </IconWrapper>
          <span>질문 게시판</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(2)}
        >
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 297.001 297.001"
            >
              <path
                d="M287.034,60.873l-20.819-0.001V39.321c0-4.934-3.61-9.126-8.49-9.856c-0.852-0.128-21.134-3.074-45.557,1.37
			c-27.227,4.954-48.941,17.171-63.668,35.64c-14.728-18.469-36.442-30.686-63.668-35.64c-24.424-4.443-44.706-1.498-45.557-1.37
			c-4.88,0.731-8.49,4.923-8.49,9.856v21.551H9.966C4.463,60.872,0,65.335,0,70.839v187.805c0,3.227,1.562,6.254,4.193,8.124
			s6.004,2.35,9.051,1.288c0.748-0.259,75.431-25.747,131.12-0.345c2.628,1.199,5.645,1.199,8.273,0
			c55.533-25.33,130.376,0.088,131.12,0.345c1.068,0.372,2.174,0.555,3.276,0.555c2.043,0,4.065-0.628,5.775-1.842
			c2.631-1.87,4.193-4.897,4.193-8.124V70.84C297,65.336,292.538,60.873,287.034,60.873z M19.933,245.309V80.805h10.852v132.726
			c0,2.896,1.267,5.646,3.458,7.539c2.191,1.893,5.105,2.742,7.969,2.319c0.55-0.08,43.846-6.024,75.478,15.679
			C78.725,232.405,39.727,240.112,19.933,245.309z M138.534,230.08c-13.932-12.588-32.079-21.1-53.702-25.034
			c-10.406-1.894-20.06-2.446-27.78-2.446c-2.292,0-4.414,0.049-6.333,0.126V48.473h-0.001c19.155-0.864,65.752,1.184,87.816,38.587
			V230.08z M158.466,87.061c21.985-37.243,68.655-39.384,87.816-38.563v154.228c-8.383-0.338-20.62-0.136-34.114,2.32
			c-21.623,3.934-39.77,12.445-53.702,25.034V87.061z M179.277,239.074c31.636-21.716,74.955-15.766,75.495-15.686
			c2.871,0.431,5.783-0.413,7.981-2.305c2.198-1.894,3.462-4.65,3.462-7.552V80.806h10.852v164.503
			C257.267,240.11,218.253,232.4,179.277,239.074z"
              />
            </svg>
          </IconWrapper>
          <span>스터디</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(3)}
        >
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
              <path d="M27,6c0.553,0,1-0.447,1-1V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v4C26,5.553,26.447,6,27,6z" />
              <path d="M51,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S51.553,24,51,24z" />
              <path d="M7,24H3c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S7.553,24,7,24z" />
              <path
                d="M43.264,7.322l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S43.654,6.932,43.264,7.322z"
              />
              <path
                d="M12.15,38.436l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S12.541,38.045,12.15,38.436z"
              />
              <path
                d="M41.85,38.436c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L41.85,38.436z"
              />
              <path
                d="M12.15,11.564c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.828-2.828
		c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L12.15,11.564z"
              />
              <path
                d="M27,13c-6.617,0-12,5.383-12,12c0,0.553,0.447,1,1,1s1-0.447,1-1c0-5.514,4.486-10,10-10c0.553,0,1-0.447,1-1
		S27.553,13,27,13z"
              />
              <path
                d="M27,8c-9.374,0-17,7.626-17,17c0,7.112,4.391,13.412,11,15.9V43v7c0,0.553,0.447,1,1,1h1v2c0,0.553,0.447,1,1,1h6
		c0.553,0,1-0.447,1-1v-2h1c0.553,0,1-0.447,1-1v-7v-2.1c6.609-2.488,11-8.788,11-15.9C44,15.626,36.374,8,27,8z M31.688,39.242
		C31.277,39.377,31,39.761,31,40.192V42h-8v-1.808c0-0.432-0.277-0.815-0.688-0.95C16.145,37.214,12,31.49,12,25
		c0-8.271,6.729-15,15-15s15,6.729,15,15C42,31.49,37.855,37.214,31.688,39.242z"
              />
            </svg>
          </IconWrapper>
          <span>멘토링</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(4)}
        >
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M400.173,242.777l55.271-53.876c7.714-7.52,10.439-18.556,7.109-28.803c-3.329-10.246-12.019-17.573-22.682-19.123
				l-119.18-17.318L267.394,15.663C262.626,6.002,252.971,0,242.198,0c-10.775,0-20.429,6.002-25.197,15.662l-53.298,107.994
				l-119.18,17.318c-10.661,1.55-19.353,8.878-22.682,19.124c-3.33,10.246-0.605,21.282,7.109,28.802l86.239,84.062L94.832,391.661
				c-1.82,10.618,2.462,21.149,11.178,27.481c4.926,3.578,10.688,5.396,16.488,5.396c4.465,0,8.954-1.077,13.101-3.258l78.56-41.301
				C217.697,453.376,278.517,512,352.775,512c76.523,0,138.78-62.257,138.78-138.781
				C491.555,313.333,453.427,262.188,400.173,242.777z M215.075,355.89l-89.199,46.893c-3.577,1.88-6.494,0.241-7.582-0.549
				c-1.089-0.791-3.547-3.061-2.864-7.042l21.287-124.112c0.581-3.39-0.543-6.848-3.005-9.248l-90.173-87.897
				c-2.893-2.819-2.238-6.1-1.821-7.38c0.415-1.28,1.814-4.32,5.812-4.901l124.616-18.108c3.404-0.494,6.346-2.632,7.868-5.716
				L235.742,24.91c1.787-3.622,5.111-4.012,6.456-4.012c1.345,0,4.669,0.391,6.455,4.013l55.73,112.921
				c1.522,3.083,4.464,5.221,7.867,5.716l124.617,18.108c3.998,0.581,5.396,3.621,5.813,4.9c0.415,1.28,1.07,4.561-1.822,7.38
				l-64.186,62.566c-7.766-1.353-15.749-2.066-23.896-2.066c-1.333,0-2.662,0.023-3.987,0.061l42.446-41.374
				c2.848-2.776,3.872-6.929,2.644-10.711c-1.23-3.783-4.499-6.539-8.435-7.112l-92.505-13.442l-41.369-83.824
				c-1.761-3.566-5.393-5.824-9.371-5.824c-3.978,0-7.609,2.258-9.371,5.824l-41.37,83.824l-92.506,13.443
				c-3.936,0.572-7.206,3.329-8.434,7.112c-1.229,3.784-0.204,7.935,2.644,10.711l66.938,65.247l-15.802,92.132
				c-0.673,3.919,0.939,7.882,4.158,10.22c1.82,1.323,3.977,1.996,6.143,1.996c1.663,0,3.332-0.396,4.861-1.2l61.74-32.459
				C218.305,337.661,216.233,346.635,215.075,355.89z M178.62,247.24l-55.711-54.303l76.991-11.188
				c3.403-0.494,6.345-2.632,7.867-5.716l34.43-69.764l34.429,69.765c1.522,3.083,4.464,5.221,7.868,5.716l76.989,11.188
				l-48.569,47.342c-31.633,9.502-58.547,30.006-76.279,57.053l-68.164,35.836l13.152-76.679
				C182.206,253.099,181.082,249.641,178.62,247.24z M352.775,491.102c-65.001,0-117.883-52.882-117.883-117.883
				s52.882-117.883,117.883-117.883s117.882,52.882,117.882,117.883S417.776,491.102,352.775,491.102z"
              />
              <path
                d="M436.755,326.719c-4.079-4.079-10.696-4.08-14.778,0l-82.648,82.648l-41.907-41.908c-4.081-4.079-10.696-4.079-14.778,0
				c-4.08,4.08-4.08,10.697,0,14.778l49.296,49.296c2.041,2.041,4.715,3.06,7.388,3.06c2.674,0,5.348-1.02,7.388-3.06l90.037-90.036
				C440.835,337.415,440.835,330.799,436.755,326.719z"
              />
            </svg>
          </IconWrapper>
          <span>멘토링 후기</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(5)}
        >
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463">
              <path
                d="M453.627,64.526c-5.957-4.481-13.48-5.864-20.641-3.8L38.44,174.538H23.5c-12.958,0-23.5,10.542-23.5,23.5v64
		c0,12.958,10.542,23.5,23.5,23.5h14.94L112,306.757v25.523c0,21.041,14.119,39.809,34.335,45.64l82.217,23.716
		c3.661,1.057,7.376,1.576,11.059,1.575c8.425,0,16.669-2.721,23.635-7.962C273.258,387.716,279,376.212,279,363.683v-8.753
		l153.986,44.419c2.178,0.628,4.389,0.938,6.58,0.938c5.012,0,9.917-1.619,14.062-4.737c5.957-4.481,9.373-11.326,9.373-18.779
		V83.305C463,75.852,459.584,69.007,453.627,64.526z M47,272.396V187.68L416,81.238v297.6L47,272.396z M15,262.038v-64
		c0-4.687,3.813-8.5,8.5-8.5H32v81h-8.5C18.813,270.538,15,266.724,15,262.038z M264,363.683c0,7.771-3.562,14.907-9.771,19.578
		c-6.209,4.672-14.052,6.116-21.519,3.962l-82.217-23.716C136.66,359.517,127,346.676,127,332.28v-21.196l137,39.519V363.683z
		M448,376.77c0,2.696-1.236,5.172-3.39,6.792c-2.155,1.621-4.876,2.123-7.466,1.375L431,383.165V76.911l6.144-1.772
		c2.591-0.748,5.311-0.246,7.466,1.375c2.154,1.62,3.39,4.096,3.39,6.792V376.77z"
              />
              <path
                d="M390.712,114.031c-1.148-3.979-5.304-6.274-9.285-5.127l-16.009,4.618c-3.98,1.148-6.275,5.305-5.127,9.285
		c0.948,3.285,3.946,5.423,7.203,5.423c0.688,0,1.388-0.096,2.082-0.296l16.009-4.618
		C389.565,122.169,391.86,118.011,390.712,114.031z"
              />
              <path
                d="M333.417,122.754l-120,34.615c-3.98,1.147-6.275,5.305-5.127,9.285c0.948,3.285,3.946,5.423,7.203,5.423
		c0.688,0,1.388-0.096,2.082-0.296l120-34.615c3.98-1.147,6.275-5.305,5.127-9.285C341.553,123.901,337.398,121.604,333.417,122.754
		z"
              />
            </svg>
          </IconWrapper>
          <span>공지사항</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(6)}
        >
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
              <path
                d="M350.851,146.286c2.093-8.917,3.153-18.077,3.153-27.282C354.003,53.385,300.619,0,235,0S115.997,53.385,115.997,119.004
		c0,9.206,1.06,18.365,3.153,27.282c-21.612,26.559-33.469,59.853-33.469,94.203c0,34.339,11.945,67.867,33.634,94.409
		c21.383,26.167,51.252,44.475,84.106,51.552c4.048,0.873,8.039-1.703,8.911-5.753c0.872-4.049-1.704-8.039-5.753-8.911
		c-61.362-13.217-105.898-68.435-105.898-131.298c0-32.077,11.495-63.132,32.366-87.443c1.617-1.884,2.198-4.445,1.55-6.842
		c-2.389-8.84-3.6-17.992-3.6-27.2C130.997,61.656,177.652,15,235,15s104.003,46.656,104.003,104.004c0,9.208-1.211,18.36-3.6,27.2
		c-0.648,2.397-0.067,4.958,1.55,6.842c20.872,24.311,32.366,55.366,32.366,87.443c0,62.862-44.537,118.081-105.898,131.298
		c-4.049,0.872-6.625,4.862-5.753,8.911c0.758,3.517,3.867,5.922,7.325,5.922c0.523,0,1.054-0.055,1.586-0.17
		c32.854-7.076,62.723-25.385,84.106-51.552c21.689-26.542,33.634-60.071,33.634-94.409
		C384.319,206.139,372.462,172.845,350.851,146.286z"
              />
              <path
                d="M297.007,266.39c2.929-2.929,2.929-7.678,0-10.606c-2.929-2.929-7.678-2.929-10.606,0L242.5,299.684v-43.867
		c0-0.026,0-126.517,0-126.517c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v108.397l-43.9-43.9c-2.929-2.929-7.678-2.929-10.606,0
		c-2.929,2.929-2.929,7.677,0,10.606l54.507,54.507V462.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V320.897L297.007,266.39z"
              />
              <path d="M162.5,290.5c0,4.411,3.589,8,8,8s8-3.589,8-8s-3.589-8-8-8S162.5,286.089,162.5,290.5z" />
              <path d="M299.704,104c0-4.411-3.589-8-8-8s-8,3.589-8,8s3.589,8,8,8S299.704,108.411,299.704,104z" />
              <path d="M281,74.5c0-4.411-3.589-8-8-8s-8,3.589-8,8s3.589,8,8,8S281,78.911,281,74.5z" />
            </svg>
          </IconWrapper>
          <span>인프런 채용</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(7)}
        >
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.952 511.952"
            >
              <path
                d="M511.927,7.632c-0.017-0.188-0.094-0.367-0.128-0.555c-0.085-0.529-0.154-1.075-0.35-1.579
			c-0.009-0.051-0.06-0.102-0.085-0.171c-0.068-0.179-0.196-0.333-0.273-0.512c-0.128-0.265-0.265-0.503-0.41-0.76
			c-0.247-0.384-0.512-0.759-0.819-1.109c-0.094-0.111-0.119-0.247-0.213-0.341c-0.12-0.128-0.282-0.162-0.393-0.282
			c-0.12-0.102-0.213-0.239-0.333-0.341c-0.068-0.051-0.102-0.137-0.171-0.188c-0.017-0.017-0.034-0.017-0.051-0.026
			c-0.034-0.026-0.051-0.051-0.077-0.077c-0.418-0.324-0.905-0.529-1.374-0.759c-0.188-0.102-0.358-0.23-0.555-0.316
			c-0.222-0.085-0.444-0.137-0.666-0.205c-0.273-0.094-0.555-0.137-0.845-0.196c-0.427-0.085-0.853-0.188-1.28-0.213
			c-0.273-0.017-0.529,0.034-0.794,0.043c-0.034,0-0.068,0.009-0.102,0.009c-0.273,0.008-0.529,0-0.794,0.043
			c-0.427,0.06-0.828,0.188-1.246,0.316c-0.29,0.085-0.563,0.171-0.853,0.29c-0.188,0.085-0.393,0.111-0.58,0.205L21.67,248.375
			c-14.08,7.296-21.973,18.304-21.649,30.216c0.307,11.494,8.354,21.623,22.212,27.87l92.194,39.509
			c4.292,1.86,9.353-0.145,11.204-4.48c1.852-4.326-0.154-9.344-4.489-11.204l-92.041-39.45
			c-7.518-3.388-11.887-8.021-12.023-12.706c-0.137-5.043,4.514-10.496,12.442-14.601L454.225,43.592L139.174,343.641
			c-0.017,0.026-0.026,0.06-0.051,0.077c-0.572,0.555-0.956,1.246-1.348,1.929c-0.162,0.282-0.418,0.521-0.555,0.811
			c-0.119,0.29-0.111,0.614-0.196,0.913c-0.239,0.777-0.469,1.553-0.478,2.355c0,0.034-0.017,0.06-0.017,0.094v153.6
			c0,0.828,0.137,1.63,0.358,2.406c0.009,0.026,0.009,0.06,0.017,0.094c0.29,0.939,0.785,1.792,1.374,2.586
			c0.171,0.23,0.375,0.427,0.572,0.631c0.521,0.563,1.101,1.05,1.758,1.451c0.171,0.111,0.265,0.273,0.435,0.358
			c0.145,0.077,0.307,0.111,0.444,0.171c0.111,0.051,0.188,0.137,0.307,0.188c0.119,0.051,0.239,0.026,0.367,0.068
			c0.956,0.35,1.929,0.58,2.893,0.58h0.009h0.008c0.99-0.009,1.937-0.23,2.859-0.563c0.239-0.085,0.469-0.188,0.7-0.299
			c0.845-0.384,1.63-0.888,2.321-1.536c0.034-0.043,0.102-0.06,0.145-0.102l0.085-0.085c0.009-0.009,0.017-0.017,0.026-0.026
			l85.222-85.222c3.336-3.336,3.336-8.73,0-12.066c-3.337-3.337-8.73-3.337-12.066,0l-44.774,44.774l40.934-76.749L487.59,42.32
			l-79.172,374.221c-1.493,7.202-4.838,12.382-9.668,14.976c-5.222,2.799-12.023,2.645-19.78-0.444L247.3,379.549
			c-4.369-1.707-9.327,0.452-11.059,4.838c-1.715,4.386,0.452,9.344,4.847,11.059l131.61,51.49c6.007,2.406,11.972,3.61,17.621,3.61
			c5.939,0,11.546-1.331,16.503-3.994c9.293-4.983,15.795-14.413,18.304-26.505l86.69-409.796c0.068-0.341,0.034-0.691,0.06-1.041
			c0.026-0.29,0.068-0.563,0.06-0.862C511.936,8.11,511.953,7.871,511.927,7.632z M206.638,370.128
			c-0.162,0.196-0.205,0.452-0.333,0.666c-0.154,0.222-0.375,0.367-0.512,0.606l-52.198,97.877V353.471l268.1-255.334
			L206.638,370.128z"
              />
            </svg>
          </IconWrapper>
          <span>인프런 스토리</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(8)}
        >
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.997 511.997"
            >
              <path
                d="M478.74,8.403c-1.553-4.275-5.265-7.398-9.737-8.226c-4.463-0.725-9.054,0.802-11.998,4.275
			c-25.225,29.423-83.379,39.68-144.956,50.551C200.477,74.698,61.631,99.231,44.368,254.564
			c-5.18,46.686,6.153,91.529,31.829,128.777c-29.278,29.628-54.059,66.338-69.623,111.71c-2.287,6.673,1.271,13.978,7.962,16.247
			c1.382,0.478,2.782,0.7,4.156,0.7c5.316,0,10.291-3.328,12.109-8.653c14.012-40.866,35.712-73.532,61.039-100.096
			c41.054,45.338,101.359,70.349,170.061,70.349c83.268,0,147.046-30.78,189.568-91.503
			C529.718,270.384,509.733,93.599,478.74,8.403z M430.518,367.417c-37.453,53.478-94.182,80.58-168.61,80.58
			c-61.67,0-115.507-22.178-151.646-62.455c32.546-28.51,69.248-48.196,104.149-61.133c0.179-0.051,0.367-0.026,0.546-0.094
			c2.253-0.794,4.275-1.749,6.494-2.569c55.39-19.311,104.533-22.221,121.156-18.432c6.886,1.476,13.739-2.799,15.275-9.702
			c1.553-6.903-2.799-13.747-9.702-15.3c-8.789-1.954-21.658-2.44-36.83-1.527c45.875-30.942,80.341-69.897,102.878-116.557
			c3.072-6.374,0.41-14.029-5.965-17.101c-6.323-3.072-14.003-0.401-17.092,5.948c-32.64,67.584-90.65,115.908-176.623,147.9
			c14.012-30.438,17.732-67.14,0.205-102.187c-3.166-6.298-10.863-8.9-17.178-5.726c-6.323,3.174-8.892,10.854-5.726,17.178
			c22.306,44.612-0.401,87.782-19.635,109.218c-26.496,12.911-52.762,29.508-76.945,50.287
			c-20.71-31.599-29.815-69.197-25.463-108.331C84.961,121.102,202.67,100.332,316.496,80.228
			c56.491-9.975,110.302-19.473,144.256-44.655C486.19,120.855,498.009,271.033,430.518,367.417z"
              />
            </svg>
          </IconWrapper>
          <span>블로그</span>
        </BottomNavModalListItem>
        <BottomNavModalListItem
          onClick={() => onClickBottomNavModalListItem(9)}
        >
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M499.672,13.221c-1.005-3.461-3.895-6.039-7.451-6.628C253.888-33.118,71.535,114.906,23.355,227.462
			c-35.724,83.437,22.129,165.159,42.197,189.858c-23.098,45.747-33.31,81.006-33.813,82.74c-1.417,4.973,1.463,10.153,6.436,11.574
			c0.859,0.247,1.719,0.366,2.578,0.366c4.068,0,7.817-2.683,8.996-6.793c0.226-0.793,9.89-33.723,31.239-76.571
			c12.847,3.18,49.792,11.226,94.587,11.226c73.157,0,167.241-21.471,211.326-120.656c17.901-40.276,19.245-75.529,20.433-106.632
			c0.841-21.955,1.627-42.69,8.018-62.854C438.93,75.343,496.344,23.323,496.92,22.806
			C499.608,20.406,500.677,16.676,499.672,13.221z M397.506,144.061c-7.158,22.577-7.99,44.541-8.886,67.8
			c-1.17,30.851-2.395,62.753-18.833,99.738c-62.625,140.912-239.093,109.357-279.9,99.924
			c31.683-58.444,83.545-128.747,160.565-162.444c4.745-2.071,6.902-7.593,4.827-12.328c-2.066-4.731-7.597-6.889-12.324-4.823
			c-79.73,34.878-132.93,106.024-163.529,159.571c-1.452,2.542-2.855,5.06-4.235,7.564c-20.886-28.017-63.373-97.083-34.629-164.232
			C85.185,130.604,251.457-5.476,470.855,22.377C451.263,43.299,415.589,87.008,397.506,144.061z"
              />
            </svg>
          </IconWrapper>
          <span>인프런 소개</span>
        </BottomNavModalListItem>
      </BottomNavModalList>
    </BottomNavModalLayout>
  )
}

export default BottomNavModal

const BottomNavModalLayout = styled.div`
  position: relative;
  display: block;
  z-index: -1;
`

const BottomNavModalList = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0px;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  z-index: 15;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 1rem 1rem 0;

  @media screen and (min-width: 760px) and (max-width: 1024px) {
    li:nth-child(6) {
      margin-right: 0;
    }
  }
`

const BottomNavModalListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(33.3% - 13.9px);
  height: 70px;
  margin-right: 14px;
  margin-bottom: 16px;
  color: #343a40;
  font-size: 0.875rem;
  line-height: 1.5;
  cursor: pointer;

  @media screen and (min-width: 760px) and (max-width: 1024px) {
    width: calc(16.6667% - 11.9px);
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px !important;
  margin-bottom: 2px !important;
  background-color: #f1f3f5;
  border-radius: 50%;
  font-size: 20px;
  line-height: 1;
  color: #212529;

  svg {
    width: 24px;
    height: 24px;
    color: #212529;
  }
`
