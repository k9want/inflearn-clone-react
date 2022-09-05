import React from 'react'
import useLoginModal from '../../../hook/useLoginModal'

export default function Apply(props) {
  return (
    <section className="apply" style={useLoginModal(props.loginModal)}>
      <div className="apply-wrapper">
        <div className="apply-card">
          <h3 className="apply-title sm-hidden">지식공유자 되기</h3>
          <p className="apply-description sm-hidden">
            많은 사람들에게 배움의 기회를 주고, <br />
            경제적 보상을 받아보세요.
          </p>
          <a href="/" className="apply-btn">
            지식공유참여
          </a>
        </div>

        <div className="apply-card">
          <h3 className="apply-title sm-hidden">기업 교육을 위한 인프런</h3>
          <p className="apply-description sm-hidden">
            “인프런 비즈니스” 를 통해 모든 팀원이 인프런의 강의를
            <br />
            자유롭게 학습하는 환경을 제공하세요.
          </p>
          <a href="/" className="apply-btn">
            인프런 비즈니스
          </a>
        </div>
      </div>
    </section>
  )
}
