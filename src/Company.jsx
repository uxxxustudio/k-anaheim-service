import './Company.css'
import companyHero from './assets/company_hero01.png'
import companySectionImg from './assets/company_section_img01_00.png'
import Header from './Header'
import Footer from './Footer'

function Company() {
  return (
    <div className="company-page">

      {/* COMMON HEADER */}
      <Header />


      {/* COMPANY HERO */}
      <section className="company-hero">

        <div className="company-hero-image-wrap">
          <img
            src={companyHero}
            alt="한국애너하임서비스센터"
            className="company-hero-image"
          />
        </div>

        <div className="company-hero-content">

          <span className="company-eyebrow">
            ABOUT US
          </span>

          <h1>
            한국애너하임
            <br />
            <span>서비스센터</span>
          </h1>

          <p>
            미국 WasteMaid® 정품 디스포저를 중심으로
            <br />
            제품 상담부터 설치, 고객지원까지 제공하는
            <br />
            전문 서비스센터입니다.
          </p>

        </div>

      </section>


      {/* COMPANY INTRO */}
      <section className="company-section company-intro">

        <div className="company-section-inner">

          <div className="company-section-head">

            <span className="company-section-eyebrow">
              COMPANY
            </span>

            <h2>
              고객의 일상에 필요한
              <br />
              주방의 새로운 기준을 만들어갑니다.
            </h2>

            <p>
              제품을 판매하는 것에 그치지 않고
              고객이 안심하고 사용할 수 있는
              서비스와 기술 지원을 함께 제공합니다.
            </p>

          </div>


          <div className="company-intro-layout">

            <div className="company-intro-copy">

              <h3>
                한국애너하임서비스센터는
                <br />
                <span>제품과 서비스를 함께</span>
                생각합니다.
              </h3>

              <p>
                한국애너하임서비스센터는 미국 WasteMaid®
                정품 디스포저를 중심으로 제품 상담과 설치,
                고객지원 및 사후관리까지 제공하고 있습니다.
              </p>

              <p>
                고객의 주방 환경과 사용 조건을 고려한
                제품 안내부터 안전한 설치, 사용 중 발생할 수
                있는 문제에 대한 A/S까지 필요한 서비스를
                한 곳에서 제공합니다.
              </p>

              <p>
                오랜 경험과 전문성을 바탕으로
                고객이 보다 편리하고 안심할 수 있는
                주방 환경을 만들어가는 것이 우리의 역할입니다.
              </p>

            </div>


              <div className="company-intro-image">
                <img
                  src={companySectionImg}
                  alt="고급 주방과 다이닝 공간"
                />
              </div>

          </div>

        </div>

      </section>


      {/* BRAND STORY */}
      <section className="company-section company-story">

        <div className="company-section-inner">

          <div className="company-section-head">

            <span className="company-section-eyebrow">
              OUR STORY
            </span>

            <h2>
              제품을 넘어
              <br />
              서비스의 기준을 만듭니다.
            </h2>

            <p>
              한국애너하임서비스센터가 중요하게 생각하는
              세 가지 기준입니다.
            </p>

          </div>


          <div className="company-story-grid">

          {/* 01 */}
          <article className="company-story-card">

            <span className="story-number">01</span>

            <div className="story-icon">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* badge */}
                <path
                  d="M32 8L38 11L44 10L47 16L53 20L51 27L54 33L49 38L48 45L41 47L37 53L30 51L24 54L20 48L13 46L12 39L7 34L10 27L8 20L14 16L16 10L23 11L32 8Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                {/* check */}
                <path
                  d="M21 32L28 39L44 23"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="story-content">
              <h3>정품과 전문성</h3>

              <p>
                미국 WasteMaid® 정품 디스포저를 기반으로
                제품에 대한 정확한 이해와 전문적인 서비스를 제공합니다.
              </p>
            </div>

          </article>


          {/* 02 */}
          <article className="company-story-card">

            <span className="story-number">02</span>

            <div className="story-icon">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* house */}
                <path
                  d="M11 29L32 11L53 29"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M16 27V51H48V27"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                {/* shield */}
                <path
                  d="M32 27L41 31V37C41 43 37.5 47 32 49C26.5 47 23 43 23 37V31L32 27Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                <path
                  d="M28 37L31 40L36 34"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="story-content">
              <h3>안전한 설치</h3>

              <p>
                제품의 성능뿐 아니라 설치 환경과 사용 조건까지 고려하여
                안정적인 사용을 위한 서비스를 제공합니다.
              </p>
            </div>

          </article>


          {/* 03 */}
          <article className="company-story-card">

            <span className="story-number">03</span>

            <div className="story-icon">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* headset */}
                <path
                  d="M15 34V31C15 21.6 22.6 14 32 14C41.4 14 49 21.6 49 31V34"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M15 34C15 31.8 16.8 30 19 30H22V44H19C16.8 44 15 42.2 15 40V34Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M49 34C49 31.8 47.2 30 45 30H42V44H45C47.2 44 49 42.2 49 40V34Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                {/* support connection */}
                <path
                  d="M42 44C40 49 36.5 51 32 51H28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <circle
                  cx="25"
                  cy="51"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>

            <div className="story-content">
              <h3>지속적인 고객지원</h3>

              <p>
                제품을 구매한 이후에도 고객이 편리하게 사용할 수 있도록
                상담과 A/S 등 지속적인 지원을 제공합니다.
              </p>
            </div>

          </article>

        </div>

        </div>

      </section>


      {/* SERVICE PROCESS */}
      <section className="company-section company-service">

        <div className="company-section-inner">

          <div className="company-section-head">

            <span className="company-section-eyebrow">
              SERVICE
            </span>

            <h2>
              처음 상담부터
              <br />
              설치와 사후관리까지
            </h2>

            <p>
              제품을 선택하는 순간부터 사용 이후까지
              필요한 서비스를 한 곳에서 제공합니다.
            </p>

          </div>


          <div className="company-service-list">

            <article className="company-service-item">

              <span className="company-service-number">
                01
              </span>

              <h3>
                제품 상담
              </h3>

              <p>
                고객의 주방 환경과 사용 조건에 맞는
                제품을 안내합니다.
              </p>

            </article>


            <article className="company-service-item">

              <span className="company-service-number">
                02
              </span>

              <h3>
                설치 안내
              </h3>

              <p>
                제품 특성과 설치 환경을 확인하고
                안전한 설치를 진행합니다.
              </p>

            </article>


            <article className="company-service-item">

              <span className="company-service-number">
                03
              </span>

              <h3>
                사용 지원
              </h3>

              <p>
                제품 사용과 관리에 필요한
                안내와 기술 지원을 제공합니다.
              </p>

            </article>


            <article className="company-service-item">

              <span className="company-service-number">
                04
              </span>

              <h3>
                A/S 지원
              </h3>

              <p>
                사용 중 발생할 수 있는 문제에
                신속하게 대응합니다.
              </p>

            </article>

          </div>

        </div>

      </section>


      
     {/* CORE VALUE */}
      <section className="core-value-section">
        <div className="core-value-inner">

          <div className="core-value-header">
            <span className="section-label">CORE VALUE</span>

            <h2>
              우리가 중요하게 생각하는 것
            </h2>

            <p>
              고객에게 더 나은 경험을 제공하기 위해 서비스의 모든 과정에서 지켜가는 기준입니다.
            </p>
          </div>

          <div className="core-value-list">

            <div className="core-value-item">
              <span className="core-value-number">01</span>

              <div className="core-value-content">
                <h3>전문성</h3>
                <p>
                  제품에 대한 정확한 이해와<br />
                  전문적인 서비스를 제공합니다.
                </p>
              </div>
            </div>

            <div className="core-value-item">
              <span className="core-value-number">02</span>

              <div className="core-value-content">
                <h3>신뢰</h3>
                <p>
                  고객이 안심하고 선택할 수 있는<br />
                  투명한 서비스를 지향합니다.
                </p>
              </div>
            </div>

            <div className="core-value-item">
              <span className="core-value-number">03</span>

              <div className="core-value-content">
                <h3>안전</h3>
                <p>
                  설치부터 사용까지 안전을<br />
                  가장 중요한 기준으로 생각합니다.
                </p>
              </div>
            </div>

            <div className="core-value-item">
              <span className="core-value-number">04</span>

              <div className="core-value-content">
                <h3>고객중심</h3>
                <p>
                  제품보다 고객의 실제 사용 경험을<br />
                  먼저 생각합니다.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* LOCATION */}
      <section className="company-section company-location">

        <div className="company-section-inner">

          <div className="company-section-head">

            <span className="company-section-eyebrow">
              LOCATION
            </span>

            <h2>
              찾아오시는 길
            </h2>

            <p>
              한국애너하임서비스센터의
              본사와 서비스센터 위치를 확인하세요.
            </p>

          </div>


          <div className="company-location-grid">

            <article className="company-location-info">

              <span className="location-label">
                HEAD OFFICE
              </span>

              <h3>
                한국애너하임서비스센터
                <br />
                본사
              </h3>

              <dl>

                <div>
                  <dt>ADDRESS</dt>
                  <dd>
                    경기도 파주시 운정역길 5
                  </dd>
                </div>

                <div>
                  <dt>SERVICE</dt>
                  <dd>
                    제품 상담 · 고객지원
                  </dd>
                </div>

              </dl>

            </article>


            <article className="company-location-info">

              <span className="location-label">
                SERVICE CENTER
              </span>

              <h3>
                한국애너하임서비스센터
                <br />
                서비스센터
              </h3>

              <dl>

                <div>
                  <dt>ADDRESS</dt>
                  <dd>
                    경기도 용인시 수지구 성복1로 107
                  </dd>
                </div>

                <div>
                  <dt>SERVICE</dt>
                  <dd>
                    제품 상담 · 설치 · A/S 지원
                  </dd>
                </div>

              </dl>

            </article>

          </div>

        </div>

      </section>


      {/* COMMON FOOTER */}
      <Footer />

    </div>
  )
}

export default Company