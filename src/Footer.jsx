import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>
            Korea Anaheim
            <br />
            Service Center
          </h2>

          <p>
            25년 전통의 프리미엄 음식물쓰레기 디스포저 전문 업체로,
            고품질 제품과 완벽한 서비스를 제공합니다.
          </p>

          <a href="#" className="footer-dealer">
            대리점 모집
          </a>

        </div>


        {/* QUICK LINK */}
        <div className="footer-column">

          <h3>
            빠른 링크
          </h3>

          <a href="/company">
            회사소개
          </a>

          <a href="#">
            디스포저
          </a>

          <a href="#">
            제품구매
          </a>

          <a href="#">
            정품인증
          </a>

          <a href="#">
            고객센터
          </a>

        </div>


        {/* PRODUCT & SERVICE */}
        <div className="footer-column">

          <h3>
            제품 & 서비스
          </h3>

          <a href="#">
            경제형 058
          </a>

          <a href="#">
            보급형 158
          </a>

          <a href="#">
            일반형 258
          </a>

          <a href="#">
            무료 현장 점검
          </a>

          <a href="#">
            전문가 설치
          </a>

          <a href="#">
            정기 점검 서비스
          </a>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h3>
            연락처
          </h3>


          <div className="contact-item">

            <span className="contact-icon">☎</span>

            <div>
              <small>
                고객센터
              </small>

              <strong>
                1577-2181
              </strong>
            </div>

          </div>


          <div className="contact-item">

             <span className="contact-icon">✉</span>

            <div>
              <small>
                이메일
              </small>

              <strong>
                koreaanheimservice@naver.com
              </strong>
            </div>

          </div>


          <div className="contact-item">

              <span className="contact-icon">⌖</span>

            <div>
              <small>
                본사
              </small>

              <strong>
                용인시 수지구 성복1로 107
              </strong>
            </div>

          </div>


          <div className="contact-item">

            <span className="contact-icon">◷</span> 

            <div>
              <small>
                영업시간
              </small>

              <strong>
                평일 9:00 - 18:00
              </strong>

              <em>
                24시간 상담 가능
              </em>
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <div className="footer-policy">

            <span>
              © 2024 Korea Anaheim Service Center. All rights reserved.
            </span>

            <a href="#">
              개인정보처리방침
            </a>

            <a href="#">
              이용약관
            </a>

          </div>


          <div className="footer-company-info">

            <span>
              사업자등록번호 : 253-77-00168
            </span>

            <span>
              대표자 : 고연수
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer