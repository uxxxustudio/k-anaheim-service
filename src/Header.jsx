import ciLogo from './assets/ci.png'

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')
const withBase = (path) => `${BASE_URL}${path}`

function Header() {
  return (
    <>
      <div className="top-bar">
        <div>무료출장·공사중</div>

        <div className="top-links">
          <span>회원가입</span>
          <span>로그인</span>
          <span>고객센터</span>
          <span>대리점 모집안내</span>
        </div>
      </div>

      <header className="header">
        <div className="header-inner">

          <a href={withBase('/')} className="logo">

            <img
              src={ciLogo}
              alt="한국애너하임 서비스센터 CI"
              className="logo-ci"
            />

            <strong>
              한국애너하임 서비스센터
            </strong>

          </a>

          <nav>
            <a href={withBase('/company')}>회사소개</a>
            <a href={withBase('/disposer/features')}>디스포저안내</a>
            <a href="#">제품소개</a>
            <a href="#">인허가등록사항</a>
            <a href="#">대리점모집</a>
            <a href="#">고객지원</a>
          </nav>

          <div className="header-contact">
            <small>문의 및 상담</small>

            <strong>
              1577-2181 / 010-5360-5567
            </strong>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
