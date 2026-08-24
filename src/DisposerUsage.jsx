import './DisposerUsage.css'

function Icon({ type }) {
  const common = {
    viewBox: '0 0 64 64',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'usage-icon-svg',
  }

  if (type === 'water') {
    return (
      <svg {...common}>
        <path d="M20 20h24" />
        <path d="M27 20v-7h10v7" />
        <path d="M24 20v10H14v7h36v-7H40V20" />
        <path d="M20 37v12M28 37v16M36 37v12M44 37v16" />
      </svg>
    )
  }

  if (type === 'switch') {
    return (
      <svg {...common}>
        <rect x="18" y="8" width="28" height="48" rx="3" />
        <rect x="24" y="15" width="16" height="13" rx="2" />
        <rect x="24" y="34" width="16" height="13" rx="2" />
        <path d="M32 18v7M29 21h6" />
      </svg>
    )
  }

  if (type === 'food') {
    return (
      <svg {...common}>
        <path d="M17 40h30" />
        <path d="M21 40c0 7 5 11 11 11s11-4 11-11" />
        <path d="M27 16c-5 1-7 6-4 10 4 1 8-3 7-8" />
        <path d="M39 14c4 2 5 6 2 9-4 0-6-4-4-8" />
        <path d="M32 9v19" />
        <path d="M27 24l5 5 5-5" />
      </svg>
    )
  }

  if (type === 'timer') {
    return (
      <svg {...common}>
        <circle cx="32" cy="34" r="20" />
        <path d="M32 14V8" />
        <path d="M26 8h12" />
        <path d="M32 22v13l8 5" />
        <path d="M48 17l5-5" />
      </svg>
    )
  }

  if (type === 'noise') {
    return (
      <svg {...common}>
        <path d="M12 27h10l12-10v30L22 37H12z" />
        <path d="M41 25c4 4 4 10 0 14" />
        <path d="M47 19c8 8 8 18 0 26" />
      </svg>
    )
  }

  if (type === 'power') {
    return (
      <svg {...common}>
        <path d="M24 10v18M40 10v18" />
        <path d="M18 25v5c0 8 6 13 14 13s14-5 14-13v-5" />
        <path d="M32 43v11M24 54h16" />
      </svg>
    )
  }

  if (type === 'leak') {
    return (
      <svg {...common}>
        <path d="M32 8C25 19 18 27 18 37a14 14 0 0028 0c0-10-7-18-14-29z" />
        <path d="M27 39c1 4 4 6 8 6" />
      </svg>
    )
  }

  if (type === 'maintenance') {
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="9" />
        <path d="M32 10v6M32 48v6M10 32h6M48 32h6" />
        <path d="M17 17l4 4M43 43l4 4M47 17l-4 4M21 43l-4 4" />
        <path d="M39 24l4-4" />
      </svg>
    )
  }

  return null
}

function DisposerUsage() {
  return (
    <main className="disposer-usage">

      {/* 기존 디스포저 안내 페이지의 공통 히어로 영역은 그대로 사용 */}

      <section className="usage-section">
        <div className="usage-section-heading">
          <span />
          <h1>음식물분쇄기 사용방법</h1>
          <span />
        </div>

        <p className="usage-intro">
          남녀노소 누구나 쉽게 처리하실 수 있는 음식물쓰레기분쇄기의 사용방법에 따라 사용해 주세요.
        </p>

        <div className="usage-steps">

          <article className="usage-step">
            <div className="step-number">1</div>

            <div className="step-icon">
              <Icon type="water" />
            </div>

            <h2>수돗물을 먼저 틉니다.</h2>

            <p>
              싱크대에 물을 틀어 배수관 내부에
              <br />
              물을 채워줍니다.
            </p>
          </article>

          <article className="usage-step">
            <div className="step-number">2</div>

            <div className="step-icon">
              <Icon type="switch" />
            </div>

            <h2>작동 스위치를 누릅니다.</h2>

            <p>
              디스포저 전원 스위치를 누르면
              <br />
              작동하게 됩니다.
            </p>
          </article>

          <article className="usage-step">
            <div className="step-number">3</div>

            <div className="step-icon">
              <Icon type="food" />
            </div>

            <h2>음식물 쓰레기를 스토퍼를 이용하여<br />조금씩 투입합니다.</h2>

            <p>
              음식물 찌꺼기, 야채껍질, 과일껍질, 작은 뼈,
              <br />
              기타 버려야 할 잔반을 조금씩 투입합니다.
            </p>

            <strong className="step-note">
              ※ 많은 양을 한 번에 넣지 마세요.
            </strong>
          </article>

          <article className="usage-step">
            <div className="step-number">4</div>

            <div className="step-icon">
              <Icon type="timer" />
            </div>

            <h2>물과 함께 약 25초 정도<br />더 작동시킨 후 멈춥니다.</h2>

            <p>
              분쇄가 끝난 후에도 약 25초간 물과 디스포저를
              <br />
              함께 작동시켜 잔여물을 깨끗하게 배출합니다.
            </p>
          </article>

        </div>
      </section>


      <section className="usage-info-grid">

        <article className="info-card info-tip">
          <div className="info-icon">✓</div>
          <div>
            <h2>사용 팁</h2>
            <ul>
              <li>항상 물을 틀어 놓은 상태에서 사용하세요.</li>
              <li>음식물은 조금씩 나누어 투입하세요.</li>
              <li>단단한 뼈, 조개껍질, 유리, 금속 등은 넣지 마세요.</li>
            </ul>
          </div>
        </article>

        <article className="info-card info-warning">
          <div className="info-icon">!</div>
          <div>
            <h2>주의사항</h2>
            <ul>
              <li>마른 섬유질(마늘껍질, 양파껍질 등)은 넣지 마세요.</li>
              <li>제품 하단부의 버튼을 누르거나 포크, 수저 등을 넣지 마세요.</li>
              <li>이상 발생 시 즉시 전원을 끄고 서비스센터에 문의하세요.</li>
            </ul>
          </div>
        </article>

        <article className="info-card info-food">
          <div className="info-icon">⌁</div>
          <div>
            <h2>분쇄 가능한 음식물</h2>
            <ul>
              <li>채소 및 과일 찌꺼기</li>
              <li>밥, 국수, 빵, 커피찌꺼기</li>
              <li>생선 뼈(작은 뼈 포함), 작은 고기뼈</li>
            </ul>
          </div>
        </article>

      </section>


      <section className="self-check-section">

        <div className="self-check-heading">
          <span />
          <div>
            <h1>간단한 자가 A/S 및 유지방법을 알아두시면 도움이 됩니다.</h1>
            <p>
              주방에서 안심하고 오래 사용할 수 있도록, 애너하임 디스포저의 점검 포인트와 유지방법을 안내드립니다.
            </p>
          </div>
          <span />
        </div>

        <div className="self-check-content">

          <div className="self-check-product">
            <div className="product-title">
              <span>주방문화의 혁신을 이루는</span>
              <strong>애너하임 디스포저</strong>
            </div>

            <div className="product-placeholder">
              {/* 기존 디스포저 안내 페이지에서 사용하는 제품 이미지를 여기에 연결 */}
              <div className="product-outline">
                DISPOSER
              </div>
            </div>

            <p>
              화공약품 및 부식성 액체의 사용을 금하여 주시고
              이는 기계고장의 주요 원인이 됩니다.
            </p>
          </div>


          <div className="self-check-list">

            <article className="check-item">
              <div className="check-icon">
                <Icon type="noise" />
              </div>

              <div>
                <div className="check-title">
                  <span>1</span>
                  <h2>큰 소음이 발생시</h2>
                </div>

                <p>
                  조개껍질, 수세미, 포크 등 음식물 이외의 물질이 들어갔을 경우입니다.
                </p>
              </div>
            </article>


            <article className="check-item">
              <div className="check-icon">
                <Icon type="power" />
              </div>

              <div>
                <div className="check-title">
                  <span>2</span>
                  <h2>디스포저가 작동이 안될 경우</h2>
                </div>

                <p>
                  전원을 차단 후 집게 등을 이용하여 디스포저 내부의 이물질을 제거해 줍니다.
                </p>
              </div>
            </article>


            <article className="check-item">
              <div className="check-icon">
                <Icon type="leak" />
              </div>

              <div>
                <div className="check-title">
                  <span>3</span>
                  <h2>디스포저가 누수가 될 경우</h2>
                </div>

                <p>
                  연결 부위 접합상태 및 고무패킹 상태를 체크하세요.
                </p>
              </div>
            </article>


            <article className="check-item check-item-long">
              <div className="check-icon">
                <Icon type="maintenance" />
              </div>

              <div>
                <div className="check-title">
                  <span>4</span>
                  <h2>디스포저 유지</h2>
                </div>

                <p>
                  화공약품 및 부식성 액체의 사용을 금하여 주시고 이는 기계고장의 주요 원인이 됩니다.
                  <br /><br />
                  디스포저 사용시 많은 양의 음식물쓰레기를 한꺼번에 처리하면 기계에 무리가 되어
                  자동으로 작동이 멈추게 되며 이때는 전원을 off시킨 후 기계안의 음식물쓰레기를
                  제거한 후 좌측 기계그림 하단의 빨간색 원안에 보이는 리셋버튼을 누른 후
                  약 5~6분 후에 전원을 다시 on시켜서 가동하시면 됩니다.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      <section className="do-not-section">

        <div className="do-not-title">
          <strong>넣지 마세요!</strong>
          <span>
            디스포저 고장 및 안전사고를 예방하기 위해 아래 품목은 투입하지 마세요.
          </span>
        </div>

        <div className="do-not-list">

          <div>
            <span>◈</span>
            <strong>조개껍질</strong>
          </div>

          <div>
            <span>◇</span>
            <strong>수세미</strong>
          </div>

          <div>
            <span>⌁</span>
            <strong>포크</strong>
          </div>

          <div>
            <span>●</span>
            <strong>뼈, 닭뼈</strong>
          </div>

          <div>
            <span>⌁</span>
            <strong>큰 채소/과일껍질</strong>
          </div>

          <div>
            <span>▱</span>
            <strong>비닐, 포장재</strong>
          </div>

          <div>
            <span>◯</span>
            <strong>기름, 화학약품</strong>
          </div>

          <div>
            <span>□</span>
            <strong>유리, 금속류</strong>
          </div>

        </div>
      </section>

    </main>
  )
}

export default DisposerUsage
