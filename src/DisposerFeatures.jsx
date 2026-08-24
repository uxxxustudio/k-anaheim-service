import './App.css'
import './DisposerFeatures.css'

import disposerHero from './assets/hero-wastemaid-458.png'

import Footer from './Footer'


const benefits = [
  {
    icon: "✦",
    title: "편리함",
    text: "음식물쓰레기를 손쉽게 처리하여 주방을 더욱 편리하게 사용할 수 있습니다.",
  },
  {
    icon: "＋",
    title: "위생적",
    text: "음식물쓰레기를 바로 처리하여 냄새와 세균 발생을 줄이는 데 도움을 줍니다.",
  },
  {
    icon: "◉",
    title: "냄새제거",
    text: "음식물쓰레기가 쌓이지 않아 주방에 남는 불쾌한 냄새를 줄일 수 있습니다.",
  },
  {
    icon: "↗",
    title: "경제적",
    text: "음식물쓰레기 처리에 필요한 시간과 번거로움을 줄여줍니다.",
  },
  {
    icon: "⌁",
    title: "친환경",
    text: "효율적인 음식물쓰레기 처리로 보다 쾌적한 주방 환경을 만들어갑니다.",
  },
  {
    icon: "✓",
    title: "안전성",
    text: "제품의 안정적인 설계와 전문적인 설치 서비스를 제공합니다.",
  },
]


const torqueFeatures = [
  {
    number: "01",
    title: "고속의 최상급 토크",
    text: "강력한 모터 성능으로 빠르고 안정적인 분쇄력 제공",
  },
  {
    number: "02",
    title: "영구자석모터",
    text: "고효율 영구자석 모터 적용으로 지속적인 파워와 긴 수명",
  },
  {
    number: "03",
    title: "균형잡힌 턴테이블",
    text: "분쇄물의 균형을 유지하여 진동과 소음을 최소화",
  },
  {
    number: "04",
    title: "스테인레스스틸 전기자 축",
    text: "부식에 강한 스테인레스 소재로 위생적이고 견고한 내구성",
  },
  {
    number: "05",
    title: "내식성 분쇄챔버",
    text: "내식성 소재 챔버로 녹과 부식 걱정 없이 오래 사용",
  },
]


const productFeatures = [
  {
    icon: "∿",
    title: "수직설치가 쉬운 시스템",
    text: "수직설치가 쉬운 시스템을 가진 제품으로 넓은 수납공간을 활용할 수 있습니다.",
  },
  {
    icon: "◇",
    title: "가벼운 재질의 부식방지 분쇄실",
    text: "부식방지 재질의 분쇄실 채용으로 녹이 슬지 않습니다.",
  },
  {
    icon: "▣",
    title: "영구적인 자석모터채용",
    text: "세계 특허기술의 Bulky/Heavy 유동전동기형 영구자석모터를 채용하여 가볍고 아담합니다.",
  },
  {
    icon: "⬡",
    title: "부식방지용 스테인레스 분쇄링",
    text: "스테인레스 재질로 녹이 생기는 것을 방지합니다.",
  },
  {
    icon: "•••",
    title: "이동형 튐 방지장치",
    text: "음식물쓰레기가 분쇄될 때 밖으로 튀어나오지 않게 튐 방지처리가 되어 있습니다.",
  },
  {
    icon: "⌕",
    title: "쉬운 해결시스템 적용",
    text: "음식물 걸림 현상을 쉽게 자가해결할 수 있는 시스템을 적용하였습니다.",
  },
]


const certifications = [
  ["UL", "USA품질인증"],
  ["BEAB", "유럽국제규격"],
  ["GS", "독일"],
  ["NF", "프랑스"],
  ["ÖVE", "오스트리아"],
  ["CSA", "캐나다"],
  ["D", "덴마크"],
  ["FI", "핀란드"],
  ["N", "노르웨이"],
]


export default function DisposerFeatures() {

  return (

    <div className="site">

      {/* =====================================================
          DISPOSER HERO
          ※ 공통 Header / Top Bar는 App.jsx의 PageLayout에서 출력
      ===================================================== */}

      <section className="disposer-hero">


        {/* IMAGE */}

        <div className="disposer-hero__image">

          <img
            src={disposerHero}
            alt="WasteMaid 디스포저"
          />

        </div>


        {/* WHITE GLASS CONTENT */}

        <div className="disposer-hero__content">

          <div className="disposer-hero__glass">

            <span className="eyebrow">
              DISPOSER
            </span>


            <h1>
              디스포저
              <br />
              특징
            </h1>


            <div className="red-line" />


            <p>
              세계적으로 인정받은 음식물 쓰레기 분쇄기! 애너하임 디스포저!
              <br />
              500개국에서 사용하고 있는 친환경 주방문화에 요구하는
              <br />
              편리성, 위생성, 환경친화의 모든 요소를 실현한
              <br />
              우수한 성능과 환경을 생각하는 제품입니다.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          ANAHEIM DISPOSER
      ===================================================== */}

      <section className="anaheim-section section-space">


        <div className="section-heading">

          <span className="eyebrow">
            ANAHEIM DISPOSER
          </span>

          <h2>
            주방문화의 혁신을 이루는
            <br />
            <strong>
              애너하임 디스포저
            </strong>
          </h2>

          <div className="blue-line" />

        </div>



        <div className="anaheim-intro">


          {/* LEFT */}

          <article className="info-block">

            <div className="info-icon">
              ?
            </div>

            <div>

              <h3>
                디스포저란 무엇인가요?
              </h3>

              <p>
                분쇄식 음식물 처리기로, 담은 리젠채와는 달리 싱크대 배관 아래
                연결하여 음식물쓰레기를 분쇄해 물과 함께 내려 보내는
                One-Stop 방식의 음식물분쇄기입니다.
              </p>

            </div>

          </article>



          {/* RIGHT */}

          <article className="info-block">

            <div className="info-icon">
              ✓
            </div>

            <div>

              <h3>
                주방의 위생과 편리함
              </h3>

              <p>
                음식물쓰레기에서 발생하는 많은 곰팡이 세균증식의 아름다운장소로,
                세균곰팡이인 T-VINCINON이 서식하는 곳에 각종 오염과 질병을
                일으키는 유사한 세균입니다.
                음식물쓰레기를 쓰레기통 없이 바로 처리하여 쾌적한 주방환경을
                만들어갑니다.
              </p>

            </div>

          </article>

        </div>



        {/* BENEFITS */}

        <div className="benefit-strip">

          {benefits.map((item) => (

            <div
              className="benefit-item"
              key={item.title}
            >

              <div className="benefit-icon">
                {item.icon}
              </div>

              <strong>
                {item.title}
              </strong>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================================
          WASTEMAID TECHNOLOGY
      ===================================================== */}

      <section className="technology-section section-space">


        {/* BIO SHIELD */}

        <div className="bio-shield">


          <div>

            <span className="tech-label">
              ANTIMICROBIAL PROTECTION
            </span>

            <div className="red-line" />

            <p className="bio-copy">

              <strong>
                BIO SHIELD(항균기능)
              </strong>
              으로 미생물이
              <br />

              영구적으로 자체 생성되어 악취를 제거해 주는
              <br />

              유일한 기능의 음식물쓰레기 분쇄기

            </p>

          </div>



          <div className="bio-highlight">

            <span>
              웨이스트메이드 제품에만 있는
            </span>

            <strong>
              유일한 기능입니다!
            </strong>

            <div className="red-line" />

          </div>

        </div>



        {/* TORQUE MASTER */}

        <div className="torque-section">


          <div className="section-heading section-heading--left">

            <span className="eyebrow">
              TORQUE MASTER GRINDING SYSTEM
            </span>

            <h2>
              웨스트메이드만의
              <br />
              <strong>
                토크마스터 분쇄 시스템
              </strong>
            </h2>

          </div>



          <div className="torque-grid">

            {torqueFeatures.map((item) => (

              <article
                className="torque-item"
                key={item.number}
              >

                <span className="torque-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>



          <div className="torque-summary">


            <div className="torque-summary__text">

              <p>
                웨스트메이드 디스포저 제품만의
                <strong>
                  {" "}토크마스터 분쇄시스템
                </strong>
                은
                균형잡힌 최상의 부품과 컴퓨터 디자인의 조화를 통해
                우수한 토크성능과 최고의 분쇄속도를 제공합니다.
              </p>

            </div>



            <div className="torque-summary__items">


              <div>
                <span>✓</span>
                <strong>강력한 퍼포먼스</strong>
                <small>최상의 토크와 분쇄력</small>
              </div>


              <div>
                <span>⌁</span>
                <strong>저소음 설계</strong>
                <small>조용하고 쾌적한 사용</small>
              </div>


              <div>
                <span>◷</span>
                <strong>뛰어난 내구성</strong>
                <small>오래도록 안정적인 성능</small>
              </div>


              <div>
                <span>✦</span>
                <strong>위생적 설계</strong>
                <small>위생적인 재질과 구조</small>
              </div>


            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PRODUCT FEATURES
      ===================================================== */}

      <section className="product-feature-section section-space">


        <div className="section-heading section-heading--left">

          <span className="eyebrow">
            PRODUCT FEATURES
          </span>

          <h2>
            최고의 기술이 애너하임 디스포저를
            <br />
            <strong>
              세계적인 베스트로 만들었습니다!
            </strong>
          </h2>

          <div className="red-line" />

        </div>



        <div className="product-description">

          <p>
            간결한 디자인은 싱크대 아래의 저장공간을 증가시킬 수 있고
            본체는 쉽게 분리할 수 있어 간편하게 설치/철수를 할 수 있으며
            능률적으로 사용되는 영구적인 자석모터를 사용하고 부식방지용
            분쇄실과 배수실로 이루어져 있어서 반영구적으로 사용할 수 있습니다.
          </p>

          <p>
            또한, 1분에 2,600~2,800정도의 회전력을 가지고 있어 물과 전기의
            소모시간을 줄일 뿐만 아니라 타사제품에 비해 분쇄 입자가 작아
            배수관이 막힐 우려가 없습니다.
          </p>

        </div>



        <div className="product-feature-grid">

          {productFeatures.map((item) => (

            <article
              className="product-feature-card"
              key={item.title}
            >

              <div className="product-feature-icon">
                {item.icon}
              </div>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>



      {/* =====================================================
          CERTIFICATION
      ===================================================== */}

      <section className="certification-section section-space">


        <div className="section-heading section-heading--left">

          <span className="eyebrow">
            GLOBAL CERTIFICATION
          </span>

          <h2>
            세계적으로 인정받는 애너하임 디스포저의
            <br />
            <strong>
              국가별 품질인증 마크 획득!
            </strong>
          </h2>

          <div className="red-line" />

        </div>



        <p className="cert-description">
          한국애너하임 서비스센터에서 판매되는 제품은 미국 애너하임
          디스포저 정품으로 잔고장이 없으며, 1년간 무상 A/S를 보장해 드립니다.
        </p>



        <div className="cert-grid">

          {certifications.map(([mark, country]) => (

            <div
              className="cert-item"
              key={country}
            >

              <div className="cert-mark">
                {mark}
              </div>

              <strong>
                {country}
              </strong>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="trust-section">


        <div className="trust-item">

          <span>✓</span>

          <strong>
            정품 보증
          </strong>

          <p>
            애너하임 디스포저 정품만을 취급합니다.
          </p>

        </div>



        <div className="trust-item">

          <span>⌘</span>

          <strong>
            무상 A/S 1년
          </strong>

          <p>
            1년간 무상 A/S를 보장해 드립니다.
          </p>

        </div>



        <div className="trust-item">

          <span>♧</span>

          <strong>
            전문 상담
          </strong>

          <p>
            제품 선택부터 설치까지 전문 상담을 제공합니다.
          </p>

        </div>



        <div className="trust-item">

          <span>♡</span>

          <strong>
            안심 서비스
          </strong>

          <p>
            믿을 수 있는 서비스로 고객 만족을 약속합니다.
          </p>

        </div>

      </section>



      {/* =========================
          FOOTER
      ========================= */}

    

    </div>

  )
}