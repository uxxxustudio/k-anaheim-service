import './DisposerPurchase.css'

import purchaseHero from './assets/purchase-hero.jpg'


const purchaseSections = [
  {
    number: '01',
    label: 'CLEAN SYSTEM',
    title: '음식물 분쇄기 사용의 필요성',
    imageClass: 'purchase-image-clean',
    paragraphs: [
      {
        strong: '첫째, 가족의 건강향상 및 위생상태 때문입니다.',
        text: '가정주부는 음식물 분쇄기(Disposer)를 사용하여 즉시 음식물 쓰레기를 바로 처리함으로써 주방의 위생상태를 향상시키며, 디스포저가 음식물 쓰레기를 효과적으로 처리함에 따라 각종 해충의 번식과 악취를 근본적으로 차단합니다.',
      },
      {
        strong: '둘째, 편의성 및 시간절약 때문입니다.',
        text: '디스포저를 사용하면 음식물 쓰레기 처리에 따른 번거롭고 힘든 수고를 하지 않으므로 시간을 현저하게 절약할 뿐만 아니라 식사준비와 정리에 큰 편의를 제공합니다.',
      },
      {
        strong: '셋째, 환경보전 친환경적입니다.',
        text: '디스포저의 음식물 쓰레기를 버려지는 음식물 쓰레기를 작은 조각으로 처리하며 수집과정으로 흘려보내서 하수처리장에서 폐기물을 자원화(리사이클링) 할 수 있는 환경친화적 방식입니다.',
      },
    ],
  },

  {
    number: '02',
    label: 'PERFORMANCE',
    title: '디스포저는 어떤 음식물 쓰레기를 처리할 수 있나요?',
    imageClass: 'purchase-image-performance',
    paragraphs: [
      {
        text: 'Anaheim Bio Shield Disposer는 다음과 같은 음식물 쓰레기를 분쇄처리할 수 있습니다.',
      },
      {
        text: '작은뼈, 칡기뼈, 생선머리, 생선뼈, 견과껍질, 옥수수대, 야채조각, 과일줄기, 멜론껍질, 수박껍질 등 가정에서 발생하는 음식물 쓰레기에 대부분을 처리할 수 있습니다.',
      },
      {
        text: '그러나 음식물 쓰레기라고 하더라도 고형물로 되어 말라 버린 경우에는 일반 쓰레기로 처리해야 합니다.',
      },
      {
        text: '(치킨뼈, 돼지뼈, 소뼈, 조개껍질, 과일씨, 마늘껍질, 양파껍질, 식물의 마른 껍질, 옥수수대 등)',
      },
    ],
  },

  {
    number: '03',
    label: 'PERFECT A/S',
    title: '완벽한 A/S',
    imageClass: 'purchase-image-as',
    paragraphs: [
      {
        text: '현재 국내의 디스포저를 유통하거나 판매하는 회사가 디스포저 판매 이후 본사가 사업을 그만 두거나 판매점이 없어져서 차후 서비스가 되지 않는 제품들이 있습니다.',
      },
      {
        text: '저희 한국애너하임 서비스센터의 제품은 국내뿐만 아니라 전세계 75개국에서 서비스가 가능하며, 국내의 경우 당일 서비스 실현을 보장드립니다.',
      },
      {
        text: '또한, 한국애너하임 서비스센터는 장기간(10년 이상) 사용에 따른 잔고장이 전혀 없으므로 장기간 사용해 보시면 오히려 국내 타 제품에 비하여 제품이 저렴할 뿐더러 고객님의 A/S접수 사항에 불편함이 없도록 최상의 서비스팀이 항상 대기함으로써 안심하고 사용하실 수 있습니다.',
      },
    ],
  },

  {
    number: '04',
    label: 'EASY SYSTEM',
    title: '우리집에서 음식물 분쇄기를 사용할 수 있나요?',
    imageClass: 'purchase-image-easy',
    paragraphs: [
      {
        text: 'APT(공동주택), 단독주택 등의 주거지에서 가정용으로 사용이 가능합니다.',
      },
    ],
    extraTitle: '이사할 때는 어떻게 하나요?',
    extraText:
      '디스포저는 이사하실 때 언제든지 이전설치 신청을 하시고 새로 이사한 곳에서 사용하시면 됩니다.',
  },

  {
    number: '05',
    label: 'TRUST COMPANY',
    title: '반품은 원활합니까?',
    imageClass: 'purchase-image-trust',
    paragraphs: [
      {
        text: '한국애너하임 서비스센터의 디스포저는 가전제품으로 소비자 보호법에 의하여 1년간 제품보증을 받을 수 있으며, 구입 이후 일정기간 이내에 하자가 있는 경우 무상수리 또는 교환 및 환불이 가능합니다.',
      },
      {
        text: '단, 단순변심에 의한 반품이나 환불은 되지 않을 수 있으며, 수수료(사용료)가 발생할 수 있습니다.',
      },
      {
        text: '저희 한국애너하임 서비스센터는 소비자 보호원의 환불규정을 준수하여 실천하고 있습니다.',
      },
      {
        text: '업무상 미비하거나 고객님의 궁금사항이나 불편함에 대하여 한국애너하임 서비스센터로 문의하시면 항상 정성으로 답변드리고 서비스를 제공하겠습니다.',
      },
    ],
  },
]


export default function DisposerPurchase() {

  return (
    <main className="purchase-page">

      {/* =========================
          PURCHASE HERO
      ========================= */}

      <section
        className="purchase-hero"
        style={{
          backgroundImage: `url(${purchaseHero})`,
        }}
      >

        <div className="purchase-hero__overlay">

          <span className="purchase-hero__eyebrow">
            WASTEMAID
          </span>

          <h1>
            구입안내
          </h1>

          <p>
            세계적으로 인정받은 음식물 쓰레기 분쇄기! 애너하임 디스포저!
            <br />
            500여개국에서 사용하고 있는 최첨단 주방문화에서 요구하는
            편리성, 위생성, 친환경적인 모든 요소를 실현한
            <br />
            우수한 성능과 환경을 생각하는 제품입니다.
          </p>

          <span className="purchase-hero__line" />

        </div>

      </section>


      {/* =========================
          CONTENT
          기존 내용 그대로
      ========================= */}

      {/* CONTENT */}

            <section className="purchase-content">

            {/* 01 */}
            <article className="purchase-block purchase-block--01">

                <div className="purchase-index">
                <span>01</span>
                <strong>
                    음식물 분쇄기
                    <br />
                    사용의 필요성
                </strong>
                </div>

                <div className="purchase-main">

                <div className="purchase-section-head">
                    <span>WHY DISPOSER</span>
                    <h2>음식물 분쇄기 사용의 필요성</h2>
                </div>

                <div className="purchase-points">

                    <div>
                    <strong>가족의 건강과 위생</strong>
                    <p>
                        음식물 쓰레기를 바로 처리하여 주방의 위생상태를
                        향상시키고 각종 해충의 번식과 악취를 줄일 수 있습니다.
                    </p>
                    </div>

                    <div>
                    <strong>편의성과 시간절약</strong>
                    <p>
                        음식물 쓰레기를 처리하는 번거로운 과정을 줄여
                        식사 준비와 정리에 필요한 시간과 수고를 절약할 수 있습니다.
                    </p>
                    </div>

                    <div>
                    <strong>환경을 생각하는 처리 방식</strong>
                    <p>
                        음식물 쓰레기를 작은 조각으로 분쇄하여
                        수집·처리 과정에서 자원화할 수 있는 친환경적인 방식입니다.
                    </p>
                    </div>

                </div>

                </div>

            </article>


            {/* 02 */}
            <article className="purchase-block purchase-block--02">

                <div className="purchase-index">
                <span>02</span>
                <strong>
                    어떤 음식물까지
                    <br />
                    처리할 수 있나요?
                </strong>
                </div>

                <div className="purchase-main">

                <div className="purchase-section-head">
                    <span>PERFORMANCE</span>
                    <h2>처리 가능한 음식물과 주의사항</h2>
                </div>

                <div className="waste-guide">

                    <div className="waste-guide__item waste-guide__item--yes">
                    <span className="waste-mark">✓</span>

                    <div>
                        <strong>처리할 수 있는 음식물</strong>
                        <p>
                        작은뼈, 생선뼈, 생선머리, 견과껍질, 옥수수대,
                        야채조각, 과일줄기, 멜론껍질, 수박껍질 등
                        가정에서 발생하는 대부분의 음식물 쓰레기를 처리할 수 있습니다.
                        </p>
                    </div>
                    </div>


                    <div className="waste-guide__item waste-guide__item--no">
                    <span className="waste-mark">×</span>

                    <div>
                        <strong>처리하면 안 되는 음식물</strong>
                        <p>
                        고형물로 굳거나 말라버린 음식물은 일반 쓰레기로
                        처리해야 합니다. 치킨뼈, 돼지뼈, 소뼈, 조개껍질,
                        과일씨, 마늘껍질, 양파껍질, 식물의 마른 껍질 등은
                        주의해 주세요.
                        </p>
                    </div>
                    </div>

                </div>

                </div>

            </article>


            {/* 03 */}
            <article className="purchase-block purchase-block--03">

                <div className="purchase-index">
                <span>03</span>
                <strong>완벽한 A/S</strong>
                </div>

                <div className="purchase-main">

                <div className="purchase-section-head">
                    <span>PERFECT A/S</span>
                    <h2>구입 후에도 안심할 수 있도록</h2>
                </div>

                <div className="service-stats">

                    <div>
                    <strong>75</strong>
                    <span>개국 서비스</span>
                    <p>
                        전 세계 75개국에서 서비스가 가능하며,
                        국내에서도 전문적인 서비스를 제공합니다.
                    </p>
                    </div>

                    <div>
                    <strong>10+</strong>
                    <span>년 이상 사용을 고려한 제품</span>
                    <p>
                        장기간 사용에 따른 잔고장을 줄이고
                        안정적인 사용을 고려한 제품입니다.
                    </p>
                    </div>

                    <div>
                    <strong>01</strong>
                    <span>국내 서비스</span>
                    <p>
                        국내에서도 신속한 서비스가 가능하도록
                        전문 서비스팀이 대응합니다.
                    </p>
                    </div>

                </div>

                </div>

            </article>


            {/* 04 */}
            <article className="purchase-block purchase-block--04">

                <div className="purchase-index">
                <span>04</span>
                <strong>
                    우리집에서도
                    <br />
                    사용할 수 있나요?
                </strong>
                </div>

                <div className="purchase-main">

                <div className="purchase-section-head">
                    <span>EASY SYSTEM</span>
                    <h2>설치와 이전도 간편하게</h2>
                </div>

                <div className="easy-guide">

                    <div>
                    <span>01</span>
                    <strong>사용 가능한 주거 형태</strong>
                    <p>
                        APT(공동주택), 단독주택 등의
                        주거지에서 가정용으로 사용이 가능합니다.
                    </p>
                    </div>

                    <div>
                    <span>02</span>
                    <strong>이사할 때는 어떻게 하나요?</strong>
                    <p>
                        이사하실 때 이전설치를 신청하고
                        새로운 거주지에서 다시 사용할 수 있습니다.
                    </p>
                    </div>

                </div>

                </div>

            </article>


            {/* 05 */}
            <article className="purchase-block purchase-block--05">

                <div className="purchase-index">
                <span>05</span>
                <strong>
                    반품은
                    <br />
                    원활합니까?
                </strong>
                </div>

                <div className="purchase-main">

                <div className="purchase-section-head">
                    <span>TRUST COMPANY</span>
                    <h2>구매 후 반품·환불 안내</h2>
                </div>

                <div className="return-process">

                    <div>
                    <span>01</span>
                    <strong>제품 보증</strong>
                    <p>
                        소비자 보호법에 따라
                        제품보증을 받을 수 있습니다.
                    </p>
                    </div>

                    <div>
                    <span>02</span>
                    <strong>하자 발생</strong>
                    <p>
                        구입 이후 일정기간 이내
                        하자가 있는 경우 보증이 가능합니다.
                    </p>
                    </div>

                    <div>
                    <span>03</span>
                    <strong>교환·환불</strong>
                    <p>
                        하자 발생 시 교환 및
                        환불 규정에 따라 처리됩니다.
                    </p>
                    </div>

                    <div>
                    <span>04</span>
                    <strong>소비자 보호</strong>
                    <p>
                        소비자 보호원의 환불규정을
                        준수하여 처리합니다.
                    </p>
                    </div>

                </div>

                <p className="purchase-notice">
                    단순변심에 의한 반품이나 환불은 제한될 수 있으며,
                    사용료 또는 수수료가 발생할 수 있습니다.
                    궁금한 사항은 한국애너하임 서비스센터로 문의해 주세요.
                </p>

                </div>

            </article>


            {/* CONTACT */}
            <section className="purchase-contact">

                <div>
                <span>PRODUCT & SERVICE</span>
                <strong>구매부터 설치까지 상담해드립니다.</strong>
                </div>

                <strong className="purchase-contact__number">
                1577-2181&nbsp;&nbsp; | &nbsp;&nbsp;010-5360-5567
                </strong>

            </section>

            </section>

    </main>
  )
}