import { Link } from 'react-router-dom'

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

function Feature({ title, children }) {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__body">{children}</div>
    </div>
  )
}

function TeamMember({ name, role, detail }) {
  return (
    <div className="person">
      <div className="person__avatar" aria-hidden="true">
        {name
          .split(' ')
          .slice(0, 2)
          .map((p) => p[0])
          .join('')}
      </div>
      <div>
        <div className="person__name">{name}</div>
        <div className="person__role">{role}</div>
        <div className="muted">{detail}</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="kicker">Old-fashioned. Terbukti. Terpercaya.</div>
            <h1 className="h1">Video Training Baseball Klasik—Berbasis Pengalaman dan Track Record</h1>
            <p className="lead">
              Training adalah tim profesional yang fokus pada fundamental yang “tahan uji” dan telah membantu pemain
              berkembang selama bertahun-tahun. Instruksi jelas, rutinitas sederhana, dan pengalaman website yang
              mengutamakan dukungan pelanggan.
            </p>
            <div className="hero__actions">
              <Link className="btn btnPrimary" to="/shop">
                Beli Sekarang
              </Link>
              <Link className="btn btnGhost" to="/about">
                Kenali Tim
              </Link>
            </div>

            <div className="hero__stats" aria-label="Highlights">
              <Stat value="Proven" label="Metode yang terbukti" />
              <Stat value="Years" label="pengalaman melatih" />
              <Stat value="Trusted" label="dipercaya pemain" />
            </div>
          </div>

          <div className="hero__panel" aria-label="What you get">
            <div className="heroPanel">
              <div className="heroPanel__title">Pengalaman “support-first”</div>
              <ul className="checklist">
                <li>Navigasi sederhana dan detail produk yang jelas</li>
                <li>Akses cepat ke informasi video dan pembelian</li>
                <li>Panduan profesional tanpa “hype” berlebihan</li>
                <li>Kebijakan privasi yang transparan</li>
              </ul>
              <Link className="btn btnSecondary heroPanel__cta" to="/shop">
                Lihat Produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2 className="h2">Kenapa Training</h2>
            <p className="muted">
              Kami menjaga pendekatan tetap klasik—fundamental, repetisi, dan checkpoint yang jelas. Tujuannya adalah
              rasa percaya diri yang bisa Anda bawa ke pertandingan.
            </p>
          </div>

          <div className="grid3">
            <Feature title="Metode terbukti">
              Tanpa tren sesaat. Tanpa gimmick. Kami mengajarkan mekanika yang repeatable dan drill klasik yang teruji.
            </Feature>
            <Feature title="Pengalaman profesional">
              Dibangun oleh pelatih yang menekankan disiplin, struktur, dan feedback yang jujur—dengan penyampaian tenang
              dan dapat dipercaya.
            </Feature>
            <Feature title="Dipercaya pemain">
              Program dibuat untuk pemain yang menginginkan progres yang dapat diandalkan dan rencana latihan yang masuk
              akal.
            </Feature>
          </div>
        </div>
      </section>

      <section className="section sectionToned">
        <div className="container">
          <div className="section__head">
            <h2 className="h2">Tentang Tim</h2>
            <p className="muted">
              Tim kecil yang fokus, berkomitmen pada fundamental yang jelas dan proses pelatihan yang profesional.
            </p>
          </div>

          <div className="teamGrid">
            <TeamMember
              name="Harold “Hank” Morris"
              role="Head Instructor"
              detail="Dikenal membangun fundamental yang kuat dan rutinitas siap-pertandingan."
            />
            <TeamMember
              name="Daniel Wright"
              role="Hitting & Approach"
              detail="Fokus pada timing, kontrol barrel, dan contact yang konsisten."
            />
            <TeamMember
              name="Samuel Reyes"
              role="Pitching Fundamentals"
              detail="Latihan mengutamakan command dengan mekanika bersih dan struktur yang jelas."
            />
            <TeamMember
              name="Michael Grant"
              role="Defense & Footwork"
              detail="Footwork klasik, sudut yang tepat, dan transfer glove-to-hand yang rapi."
            />
          </div>

          <div className="section__actions">
            <Link className="btn btnPrimary" to="/about">
              Baca Cerita Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

