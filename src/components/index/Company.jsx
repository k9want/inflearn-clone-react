import React from 'react'

function Company() {
  const companyArr = [
    '라인',
    '우아한형제들',
    'SK',
    '네이버',
    '넥슨',
    '삼성',
    '카카오',
    'LG CNS',
    'NC',
  ]
  return (
    <section className="company">
      <h3>
        이미 많은 기업 구성원들이 <br className="sm-only" /> 인프런에서 성장하고
        있어요.
      </h3>

      <div className="company-wrapper">
        {companyArr.map((company, i) => {
          return (
            <div key={`company-${i}`}>
              <img
                src={require(`../../assets/images/index/company-${i + 1}.jpeg`)}
                alt={company}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Company
