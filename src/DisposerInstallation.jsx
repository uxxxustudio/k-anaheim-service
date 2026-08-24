import './DisposerInstallation.css'

import purchaseHero from './assets/purchase-hero.jpg'


export default function DisposerInstallation() {

  return (

    <main className="installation-page">


      {/* =========================
          HERO
          디스포저 서브페이지 공통 히어로
      ========================= */}

      <section className="installation-hero">

        <div className="installation-hero__background">

          <img
            src={purchaseHero}
            alt=""
          />

        </div>


        <div className="installation-hero__content">

          <span className="installation-hero__eyebrow">
            WASTEMAID
          </span>

          <h1>
            설치방법
          </h1>

          <p>
            애너하임 디스포저의 안전하고 정확한 설치방법을 안내해드립니다.
          </p>

          <div className="installation-hero__line" />

        </div>

      </section>


      {/* =========================
          INSTALLATION STEPS
      ========================= */}

      <section className="installation-content">

        <div className="installation-intro">

          <span>
            INSTALLATION GUIDE
          </span>

          <h2>
            애너하임 디스포저 설치방법
          </h2>

          <p>
            안전하고 정확한 설치를 위해 아래 순서에 따라 설치해 주세요.
          </p>

        </div>


        <div className="installation-grid">


          {/* 01 */}

          <article className="installation-card">

            <div className="installation-card__top">

              <span className="installation-number">
                01
              </span>

              <div className="installation-card__icon">
                <span />
              </div>

            </div>

            <h3>
              가스켓 구성 확인 및
              <br />
              싱크대 플랜지 조립
            </h3>

            <div className="installation-card__details">

              <div>
                <strong>
                  가스켓 선택
                </strong>

                <p>
                  얇은 가스켓: 스테인리스 및 대부분의 압축 강철 싱크대
                  <br />
                  두꺼운 가스켓: 압축 강철 및 아연 주조 싱크대
                </p>
              </div>

              <div>
                <strong>
                  플랜지 조립
                </strong>

                <p>
                  가스켓을 끼운 후 싱크대 입구에 밀착시킵니다.
                </p>
              </div>

              <div>
                <strong>
                  접착제 사용 시
                </strong>

                <p>
                  싱크대 입구 아래 끝부분에 접착제를 도포합니다.
                  <br />
                  <em>※ 접착제 사용 시 가스켓은 사용하지 않습니다.</em>
                </p>
              </div>

            </div>

          </article>


          {/* 02 */}

          <article className="installation-card">

            <div className="installation-card__top">

              <span className="installation-number">
                02
              </span>

              <div className="installation-card__icon">
                <span />
              </div>

            </div>

            <h3>
              싱크대 플랜지 고정
            </h3>

            <div className="installation-card__details">

              <div>
                <strong>
                  플랜지 삽입
                </strong>

                <p>
                  싱크대 입구에 플랜지를 넣습니다.
                </p>
              </div>

              <div>
                <strong>
                  아래에서 조이기
                </strong>

                <p>
                  아래에서 플랜지를 강하게 조여 고정합니다.
                </p>
              </div>

              <div>
                <strong>
                  배관 접착제 사용 시
                </strong>

                <p>
                  별도 절차에 따라 작업합니다.
                </p>
              </div>

            </div>

          </article>


          {/* 03 */}

          <article className="installation-card">

            <div className="installation-card__top">

              <span className="installation-number">
                03
              </span>

              <div className="installation-card__icon">
                <span />
              </div>

            </div>

            <h3>
              마운트링 조립
            </h3>

            <div className="installation-card__details">

              <div>
                <strong>
                  마운트링 위치
                </strong>

                <p>
                  마운트링을 싱크대 플랜지 아래 끝부분 위에 위치시킵니다.
                </p>
              </div>

              <div>
                <strong>
                  쿠션 마운트 맞춤
                </strong>

                <p>
                  쿠션 마운트 안쪽 홈에 플랜지 가장자리를 맞춥니다.
                </p>
              </div>

              <div>
                <strong>
                  회전 조정
                </strong>

                <p>
                  마운트링을 고정한 후 자유롭게 회전하는지 확인합니다.
                </p>
              </div>

            </div>

          </article>


          {/* 04 */}

          <article className="installation-card">

            <div className="installation-card__top">

              <span className="installation-number">
                04
              </span>

              <div className="installation-card__icon">
                <span />
              </div>

            </div>

            <h3>
              디스포저 본체 결합
            </h3>

            <div className="installation-card__details">

              <div>
                <strong>
                  위치 맞추기
                </strong>

                <p>
                  디스포저 본체 돌출부 Y와 마운트링 홈 Z를 맞춥니다.
                </p>
              </div>

              <div>
                <strong>
                  본체 끼우기
                </strong>

                <p>
                  본체를 돌출부에 맞춰 끼웁니다.
                </p>
              </div>

              <div>
                <strong>
                  돌려 고정
                </strong>

                <p>
                  마운트링을 시계 반대방향으로 돌려 고정합니다.
                </p>
              </div>

              <div>
                <strong>
                  조임 및 위치 확인
                </strong>

                <p>
                  조임용 드라이버로 조인 후 본체 돌출부가 홈의 왼쪽 끝에 위치했는지 확인합니다.
                </p>
              </div>

            </div>

          </article>


          {/* 05 */}

          <article className="installation-card">

            <div className="installation-card__top">

              <span className="installation-number">
                05
              </span>

              <div className="installation-card__icon">
                <span />
              </div>

            </div>

            <h3>
              엘보관 연결
            </h3>

            <div className="installation-card__details">

              <div>
                <strong>
                  엘보관 연결
                </strong>

                <p>
                  엘보관을 디스포저에 연결합니다.
                </p>
              </div>

              <div>
                <strong>
                  구멍 맞춤
                </strong>

                <p>
                  엘보관과 디스포저의 연결부 구멍을 정확히 맞춥니다.
                </p>
              </div>

            </div>

          </article>


          {/* 06 */}

          <article className="installation-card">

            <div className="installation-card__top">

              <span className="installation-number">
                06
              </span>

              <div className="installation-card__icon">
                <span />
              </div>

            </div>

            <h3>
              누수 및 연결 상태 확인
            </h3>

            <div className="installation-card__details">

              <div>
                <strong>
                  연결 상태 확인
                </strong>

                <p>
                  누수와 모든 연결이 단단하게 연결되었는지 확인합니다.
                </p>
              </div>

              <div>
                <strong>
                  최종 확인
                </strong>

                <p>
                  연결부분이 위 순서와 일치했는지 최종 확인합니다.
                </p>
              </div>

              <div>
                <strong>
                  작동 확인
                </strong>

                <p>
                  설치가 완료되면 누수 여부를 확인한 후 작동을 테스트합니다.
                </p>
              </div>

            </div>

          </article>


        </div>


        {/* =========================
            CAUTION
        ========================= */}

        <section className="installation-caution">

          <div className="installation-caution__heading">

            <span>
              CAUTION
            </span>

            <h2>
              이점에 주의하세요!
            </h2>

          </div>


          <div className="installation-caution__content">


            <div className="installation-caution__item">

              <strong>
                접지
              </strong>

              <p>
                전기선의 접속과 접지선의 연결은 그림에 보여진 것처럼 하시고
                만약 건물내에 접지배선이 되어 있지 않다면 접지선을 수도관에
                연결하여 사용합니다.
              </p>

            </div>


            <div className="installation-caution__item">

              <strong>
                위험
              </strong>

              <p>
                잘못된 접지연결은 전기쇼크의 위험이 있을 수 있으며
                만약 정확하게 접지되었는지에 대해 의문이 생긴다면
                가까운 전기공업사나 당사 고객서비스센터로 문의하시기 바랍니다.
              </p>

            </div>


          </div>

        </section>


      </section>


    </main>

  )
}
