import './DisposerWarranty.css'

import purchaseHero from './assets/purchase-hero.jpg'


export default function DisposerWarranty() {

  return (

    <main className="warranty-page">


      {/* =========================
          HERO
          구입안내와 동일한 이미지 / 높이
      ========================= */}

      <section className="warranty-hero">

        <div className="warranty-hero__background">

          <img
            src={purchaseHero}
            alt=""
          />

        </div>


        <div className="warranty-hero__content">

          <span className="warranty-hero__eyebrow">
            WASTEMAID
          </span>

          <h1>
            품질보증안내
          </h1>

          <p>
            세계적으로 인정받은 음식물 쓰레기 분쇄기! 애너하임 디스포저!
            <br />
            500여개국에서 사용하고 있는 최첨단 주방문화에서 요구하는
            편리성, 위생성, 친환경적인 모든 요소를 실현한
            <br />
            우수한 성능과 환경을 생각하는 제품입니다.
          </p>

          <div className="warranty-hero__line" />

        </div>

      </section>


      {/* =========================
          CONTENT
      ========================= */}

      <section className="warranty-content">


        {/* INTRO */}

        <div className="warranty-intro">

          <span>
            QUALITY & WARRANTY
          </span>

          <h2>
            제품을 안심하고 사용할 수 있도록
            <br />
            품질보증 기준을 안내해드립니다.
          </h2>

          <p>
            한국애너하임 서비스센터는 전자제품 환불규정을 준수하며
            <br />
            제품의 품질과 사용 중 발생할 수 있는 문제에 대한
            서비스 기준을 안내하고 있습니다.
          </p>

        </div>


        {/* =========================
            01. 교환 및 반품
        ========================= */}

        <section className="warranty-section">

          <div className="warranty-section-title">

            <span>
              01
            </span>

            <div>

              <small>
                CONSUMER PROTECTION
              </small>

              <h3>
                소비자분쟁 해결기준
              </h3>

              <p>
                공정거래위원회 고시기준에 따른
                교환 및 반품 기준입니다.
              </p>

            </div>

          </div>


          <div className="warranty-policy">

            <article>

              <h4>
                교환 및 반품이 가능한 경우
              </h4>

              <ul>

                <li>
                  상품을 공급받으신 날로부터 7일 이내
                </li>

                <li>
                  상품의 내용이 표시·광고내용과 다르거나
                  다르게 이행된 경우에는 공급받은 날로부터
                  3개월 이내 또는 그 사실을 안 날로부터 30일 이내
                </li>

              </ul>

              <p className="warranty-note">
                제품 교환 및 환불에 관련된 사항은
                첨부된 제품보증서를 참고하시기 바랍니다.
              </p>

            </article>


            <article>

              <h4>
                교환 및 반품이 불가능한 경우
              </h4>

              <ul>

                <li>
                  고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
                  <em>
                    (상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)
                  </em>
                </li>

                <li>
                  포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
                </li>

                <li>
                  고객님의 사용 또는 일부 소비에 의하여 상품의 가치가
                  현저히 감소한 경우
                </li>

                <li>
                  시간의 경과에 의하여 재판매가 곤란할 정도로
                  상품의 가치가 현저히 감소한 경우
                </li>

                <li>
                  복제가 가능한 상품 등의 포장을 훼손한 경우
                </li>

              </ul>

            </article>

          </div>


          <div className="warranty-important">

            <p>
              <strong>
                ※
              </strong>

              고객님의 마음이 바뀌어 교환·반품을 하실 경우
              상품반송 비용은 고객님께서 부담하셔야 합니다.
              (색상교환, 사이즈 교환 등 포함)
            </p>

            <p>
              <strong>
                ※
              </strong>

              디스포저는 가전제품이므로 제품구매 설치 이후
              단순변심에 의한 반품·환급이 되지 않습니다.
              (사용환경의 열악함 등으로 인한 경우도 포함)
            </p>

          </div>

        </section>


        {/* =========================
            02. 보증기간
        ========================= */}

        <section className="warranty-section">

          <div className="warranty-section-title">

            <span>
              02
            </span>

            <div>

              <small>
                WARRANTY PERIOD
              </small>

              <h3>
                제품 보증기간
              </h3>

              <p>
                정상적인 사용상태에서 발생한 성능·기능상의
                문제에 대한 처리 기준입니다.
              </p>

            </div>

          </div>


          <div className="warranty-cards">

            <article>

              <span>
                01
              </span>

              <strong>
                구입 후 10일 이내
              </strong>

              <p>
                환불 / 교환 / 반품
              </p>

            </article>


            <article>

              <span>
                02
              </span>

              <strong>
                구입 후 30일 이내
              </strong>

              <p>
                무상수리 / 교환
              </p>

            </article>


            <article>

              <span>
                03
              </span>

              <strong>
                구입 후 1년 이내
              </strong>

              <p>
                무상수리
              </p>

            </article>

          </div>

        </section>


        {/* =========================
            03. 기능상 문제
        ========================= */}

        <section className="warranty-section">

          <div className="warranty-section-title">

            <span>
              03
            </span>

            <div>

              <small>
                QUALITY SERVICE
              </small>

              <h3>
                기능상 중요한 하자 발생 시
              </h3>

              <p>
                품질보증기간 이내 정상적인 사용상태에서
                발생한 성능·기능상 문제에 대한 처리 기준입니다.
              </p>

            </div>

          </div>


          <div className="warranty-defect">

            <div>

              <strong>
                동일 하자 3회 발생
              </strong>

              <span>
                교환
              </span>

            </div>


            <div>

              <strong>
                정상적인 사용상태에서 발생한
                성능·기능상 문제
              </strong>

              <span>
                품질보증 기준에 따라 처리
              </span>

            </div>

          </div>

        </section>


        {/* =========================
            SERVICE INFO
        ========================= */}

        <section className="warranty-service">

          <div>

            <span>
              SERVICE INFORMATION
            </span>

            <h3>
              자세한 서비스 규정은
              <br />
              전문 상담을 통해 확인해주세요.
            </h3>

            <p>
              자세한 서비스 규정은 전문 상담사의 안내를 받으실 수 있습니다.
              <br />
              제품 사용 중 궁금한 사항이나 불편함이 있으시면
              한국애너하임 서비스센터로 문의해주세요.
            </p>

          </div>


          <div className="warranty-service-contact">

            <small>
              한국애너하임 서비스센터
            </small>

            <strong>
              1577-2181
            </strong>

          </div>

        </section>


      </section>

    </main>

  )
}