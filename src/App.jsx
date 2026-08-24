import './App.css'

import heroImage from './assets/hero-wastemaid-458.png'
import ciLogo from './assets/ci.png'

import thumb058 from './assets/Thumb_058.png'
import thumb158 from './assets/Thumb_158.png'
import thumb258 from './assets/Thumb_258.png'
import thumb458 from './assets/Thumb_458.png'
import thumb658 from './assets/Thumb_658.png'

import Company from './Company'
import DisposerFeatures from './DisposerFeatures'
import DisposerPurchase from './DisposerPurchase'
import DisposerWarranty from './DisposerWarranty'
import DisposerUsage from './DisposerUsage'
import DisposerInstrallation from './DisposerInstrallation'
import Footer from './Footer'

const BASE_PATH = '/k-anaheim-service'
const linkPath = (path) => `${BASE_PATH}${path}`


/* =========================================================
   GITHUB PAGES BASE PATH
========================================================= */

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')

const withBase = (path) => `${BASE_URL}${path}`


/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    model: '058',
    name: '경제형',
    price: '660,000원',
    image: thumb058,
  },
  {
    model: '158',
    name: '보급형',
    price: '770,000원',
    image: thumb158,
  },
  {
    model: '258',
    name: '일반형',
    price: '880,000원',
    image: thumb258,
  },
 /* {
    model: '358',
    name: '고급형',
    price: '990,000원',
    image: null,
  },*/
  {
    model: '458',
    name: '최고급형',
    price: '1,100,000원',
    image: thumb458,
  },
  {
    model: '658',
    name: '프리미엄',
    price: '1,870,000원',
    image: thumb658,
  },
]


/* =========================================================
   DISPOSER MENU
========================================================= */

const disposerMenus = [
  {
    label: '디스포저 특징',
    path: '/disposer/features',
  },
  {
    label: '구입안내',
    path: '/disposer/purchase',
  },
  {
    label: '품질보증안내',
    path: '/disposer/warranty',
  },
  {
    label: '사용방법',
    path: '/disposer/how-to-use',
  },
  {
    label: '설치방법',
    path: '/disposer/installation',
  },
  {
    label: '유/무상서비스 조건표',
    path: '/disposer/service',
  },
]


/* =========================================================
   PRODUCT MENU
========================================================= */

const productMenus = [
  {
    label: '전체보기',
    path: '/products',
  },
  {
    label: '경제형 058',
    path: '/products/058',
  },
  {
    label: '보급형 158',
    path: '/products/158',
  },
  {
    label: '일반형 258',
    path: '/products/258',
  },
/*  {
    label: '고급형 358',
    path: '/products/358',
  },*/
  {
    label: '최고급형 458',
    path: '/products/458',
  },
  {
    label: '프리미엄 658',
    path: '/products/658',
  },
  {
    label: '대용량',
    path: '/products/large',
  },
  {
    label: 'RED GOAT',
    path: '/products/red-goat',
  },
  {
    label: '악세사리',
    path: '/products/accessories',
  },
]


/* =========================================================
   CUSTOMER MENU
========================================================= */

const customerMenus = [
  {
    label: '설치사례',
    path: '/support/install',
  },
  {
    label: '사용후기',
    path: '/support/review',
  },
  {
    label: '자주하는 질문',
    path: '/support/faq',
  },
]


/* =========================================================
   COMMON LOCAL NAV
   디스포저 서브페이지에서 계속 보여주는 메뉴
========================================================= */

function LocalNav({ title, menus }) {

  return (

    <div className="local-nav">

      <div className="local-nav-inner">

        <div className="local-nav-title">
          {title}
        </div>


        <div className="local-nav-links">

          {menus.map((menu) => (

            <a
              key={menu.path}
              href={withBase(menu.path)}
              className={
                window.location.pathname.replace(BASE_URL, '') === menu.path
                  ? 'active'
                  : ''
              }
            >
              {menu.label}
            </a>

          ))}

        </div>

      </div>

    </div>

  )
}


/* =========================================================
   MAIN HEADER
   기존 헤더 + 드롭다운
========================================================= */

function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div>무료출장·공사중</div>

        <div className="top-links">
          <span>회원가입</span>
          <span>로그인</span>
          <span>고객센터</span>
          <span>대리점 모집안내</span>
        </div>
      </div>


      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          {/* LOGO */}
          <div className="logo">
            <a href={withBase('/')}>
              <img
                src={ciLogo}
                alt="한국애너하임 서비스센터 CI"
                className="logo-ci"
              />

              <strong>
                한국애너하임 서비스센터
              </strong>
            </a>
          </div>


          {/* MAIN NAV */}
          <nav className="main-nav">

            {/* 회사소개 */}
            <a href={withBase('/company')}>
              회사소개
            </a>


            {/* 디스포저안내 */}
            <div className="nav-dropdown">

              <a
                href={withBase('/disposer/features')}
                className="nav-dropdown-trigger"
              >
                디스포저안내
              </a>

              <div className="dropdown-menu disposer-dropdown">

                <div className="dropdown-heading">
                  <span>DISPOSER</span>
                  <strong>디스포저 안내</strong>
                </div>

                <div className="dropdown-list">

                  {disposerMenus.map((menu) => (
                    <a
                      key={menu.path}
                      href={withBase(menu.path)}
                    >
                      {menu.label}
                    </a>
                  ))}

                </div>

              </div>

            </div>


            {/* 제품소개 */}
            <div className="nav-dropdown">

              <a
                href={withBase('/products')}
                className="nav-dropdown-trigger"
              >
                제품소개
              </a>

              <div className="dropdown-menu product-dropdown">

                <div className="dropdown-heading">
                  <span>PRODUCTS</span>
                  <strong>제품소개</strong>
                </div>

                <div className="product-dropdown-grid">

                  {productMenus.map((menu) => (
                    <a
                      key={menu.path}
                      href={withBase(menu.path)}
                    >
                      {menu.label}
                    </a>
                  ))}

                </div>

              </div>

            </div>


            {/* 인허가 */}
            <a href="#">
              인허가등록사항
            </a>


            {/* 대리점 */}
            <a href="#">
              대리점모집
            </a>


            {/* 고객지원 */}
            <div className="nav-dropdown">

              <a
                href={withBase('/support/install')}
                className="nav-dropdown-trigger"
              >
                고객지원
              </a>

              <div className="dropdown-menu customer-dropdown">

                <div className="dropdown-heading">
                  <span>CUSTOMER</span>
                  <strong>고객지원</strong>
                </div>

                <div className="customer-dropdown-grid">

                  {customerMenus.map((menu) => (
                    <a
                      key={menu.path}
                      href={withBase(menu.path)}
                    >
                      {menu.label}
                    </a>
                  ))}

                </div>

              </div>

            </div>

          </nav>


          {/* CONTACT */}
          <div className="header-contact">
            <small>
              문의 및 상담
            </small>

            <strong>
              1577-2181 / 010-5360-5567
            </strong>
          </div>

        </div>
      </header>
    </>
  )
}


/* =========================================================
   COMMON PAGE LAYOUT
========================================================= */

function PageLayout({ children, localNav = null }) {

  return (
    <div className="site">
      <Header />
      {localNav}
      {children}
      <Footer />
    </div>
  )

}


/* =========================================================
   DISPOSER MAIN
========================================================= */

function DisposerPage() {

  return (

    <PageLayout
      localNav={
        <LocalNav
          title="DISPOSER"
          menus={disposerMenus}
        />
      }
    >

      <section className="subpage-title">

        <span className="eyebrow blue">
          WASTEMAID
        </span>

        <h1>
          애너하임 디스포저
        </h1>

        <p>
          디스포저의 주요 정보와 서비스를 확인하세요.
        </p>

      </section>

    </PageLayout>

  )

}


/* =========================================================
   SIMPLE SUB PAGE
========================================================= */

function SimpleSubPage({
  title,
  eyebrow = 'DISPOSER',
}) {

  const menus =
    eyebrow === 'DISPOSER'
      ? disposerMenus
      : eyebrow === 'PRODUCTS'
        ? productMenus
        : customerMenus

  return (

    <PageLayout
      localNav={
        <LocalNav
          title={eyebrow}
          menus={menus}
        />
      }
    >

      <section className="subpage-title">

        <span className="eyebrow blue">
          {eyebrow}
        </span>

        <h1>
          {title}
        </h1>

      </section>

    </PageLayout>

  )

}


/* =========================================================
   APP / ROUTING
========================================================= */

function App() {

  const path =
    window.location.pathname.startsWith(BASE_URL)
      ? window.location.pathname.slice(BASE_URL.length) || '/'
      : window.location.pathname


  /* =========================
     COMPANY
  ========================= */

  if (path === '/company') {
    return <Company />
  }


  /* =========================
     DISPOSER
  ========================= */

  if (path === '/disposer') {

    return <DisposerPage />

  }


  if (path === '/disposer/features') {

    return (
      <PageLayout>
        <DisposerFeatures />
      </PageLayout>
    )

  }


  if (path === '/disposer/purchase') {

    return (
      <PageLayout
        localNav={
          <LocalNav
            title="DISPOSER"
            menus={disposerMenus}
          />
        }
      >
        <DisposerPurchase />
      </PageLayout>
    )

  }


  if (path === '/disposer/warranty') {

    return (
      <PageLayout
        localNav={
          <LocalNav
            title="DISPOSER"
            menus={disposerMenus}
          />
        }
      >
        <DisposerWarranty />
      </PageLayout>
    )

  }


  if (path === '/disposer/how-to-use') {

     return (
       <PageLayout
         localNav={
           <LocalNav
             title="DISPOSER"
             menus={disposerMenus}
           />
         }
       >
         <DisposerUsage />
       </PageLayout>
     )
   
   }


    if (path === '/disposer/installation') {
   
     return (
       <PageLayout
         localNav={
           <LocalNav
             title="DISPOSER"
             menus={disposerMenus}
           />
         }
       >
         <DisposerInstallation />
       </PageLayout>
     )
   
   }


  if (path === '/disposer/service') {

    return (
      <SimpleSubPage
        title="유/무상서비스 조건표"
      />
    )

  }


  /* =========================
     PRODUCTS
  ========================= */

  if (path === '/products') {

    return (
      <SimpleSubPage
        title="제품소개"
        eyebrow="PRODUCTS"
      />
    )

  }


  if (path.startsWith('/products/')) {

    const productPath =
      path.replace('/products/', '')


    const product =
      productMenus.find(
        (item) => item.path === path
      )


    return (
      <SimpleSubPage
        title={
          product?.label ||
          productPath
        }
        eyebrow="PRODUCTS"
      />
    )

  }


  /* =========================
     CUSTOMER SUPPORT
  ========================= */

  if (path === '/support/install') {

    return (
      <SimpleSubPage
        title="설치사례"
        eyebrow="CUSTOMER SUPPORT"
      />
    )

  }


  if (path === '/support/review') {

    return (
      <SimpleSubPage
        title="사용후기"
        eyebrow="CUSTOMER SUPPORT"
      />
    )

  }


  if (path === '/support/faq') {

    return (
      <SimpleSubPage
        title="자주하는 질문"
        eyebrow="CUSTOMER SUPPORT"
      />
    )

  }


  /* =====================================================
     HOME
     기존 메인 페이지
  ===================================================== */

  return (

    <div className="site">

      <Header />


      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage:
            `url(${heroImage})`,
        }}
      >

        <div className="hero-overlay">

          <div className="hero-copy">

            <span className="eyebrow">
              미국 WasteMaid® 정품 디스포저
            </span>


            <h1>

              깨끗한 주방,

              <br />

              <em>
                건강한 생활의 시작
              </em>

            </h1>


            <p>

              강력한 성능과 안전한 설계로

              <br />

              매일의 주방을 더 편리하고 위생적으로

            </p>


            <div className="hero-actions">

              <button className="primary">

                전체 제품 보기

                <span>
                  →
                </span>

              </button>


              <button className="secondary">

                설치 상담 신청

              </button>

            </div>


            <div className="slider">

              <b>
                ●
              </b>

              <span>
                01 / 03
              </span>

              <span>
                ←
              </span>

              <span>
                →
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="products">

        <div className="section-head">

          <div>

            <span className="eyebrow blue">
              ALL LINE-UP
            </span>


            <h2>
              가정용 디스포저 전체 제품
            </h2>


            <p>
              미국 WasteMaid® 정품 디스포저 6종
            </p>

          </div>


          <button className="compare">
            전체 제품 보기 →
          </button>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <article
              className="product-card"
              key={product.model}
            >

              <div
                className={
                  `product-image product-${product.model}`
                }
              >

                {product.image ? (

                  <img
                    src={product.image}
                    alt={`WasteMaid ${product.model}`}
                  />

                ) : (

                  <div className="product-placeholder">

                    <span>
                      WasteMaid
                    </span>

                    <strong>
                      {product.model}
                    </strong>

                  </div>

                )}

              </div>


              <div className="product-info">

                <span className="product-name">
                  {product.name}
                </span>


                <h3 className="product-model">
                  {product.model}
                </h3>


                <strong className="product-price">
                  {product.price}
                </strong>


                <button className="product-detail">

                  자세히 보기

                  <span>
                    →
                  </span>

                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ACTIONS */}

      <section className="actions">


        {/* SHOPPING */}

        <a
          href="#"
          className="action-card shopping"
        >

          <div>

            <span>
              SHOPPING
            </span>


            <h3>
              쇼핑몰 바로가기
            </h3>


            <p>

              한국애너하임 디스포저

              <br />

              공식 온라인 스토어

            </p>


            <strong>
              바로가기 →
            </strong>

          </div>


          <div className="action-visual bag">
            WasteMaid
          </div>

        </a>


        {/* KAKAO */}

        <a
          href="#"
          className="action-card kakao"
        >

          <div>

            <span>
              CONTACT
            </span>


            <h3>
              카카오톡 상담
            </h3>


            <p>

              제품 구매부터 설치까지

              <br />

              빠르고 간편하게 상담하세요.

            </p>


            <strong>
              상담하기 →
            </strong>

          </div>


          <div className="talk">
            TALK
          </div>

        </a>


        {/* DEALER */}

        <a
          href="#"
          className="action-card dealer"
        >

          <div>

            <span>
              PARTNER
            </span>


            <h3>
              대리점 모집
            </h3>


            <p>

              전국 대리점 및

              <br />

              서비스망을 모집합니다.

            </p>


            <strong>
              자세히 보기 →
            </strong>

          </div>


          <div className="map">

            ●　●

            <br />

            　●

          </div>

        </a>

      </section>


      <Footer />

    </div>

  )

}


export default App
