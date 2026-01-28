import { Link } from 'react-router-dom'

function TimelineItem({ year, title, children }) {
  return (
    <div className="timeline__item">
      <div className="timeline__year">{year}</div>
      <div>
        <div className="timeline__title">{title}</div>
        <div className="muted">{children}</div>
      </div>
    </div>
  )
}

function Profile({ name, role, bullets }) {
  return (
    <div className="profile card">
      <div className="profile__head">
        <div className="person__avatar" aria-hidden="true">
          {name
            .split(' ')
            .slice(0, 2)
            .map((p) => p[0])
            .join('')}
        </div>
        <div>
          <div className="profile__name">{name}</div>
          <div className="profile__role">{role}</div>
        </div>
      </div>
      <ul className="list listTight">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <div className="page">
      <div className="container page__head">
        <div className="kicker">Kredibilitas, disiplin, dan kejelasan</div>
        <h1 className="h1">Tentang Training</h1>
        <p className="lead">
          Training adalah perusahaan edukasi baseball yang berdedikasi pada instruksi klasik—metode yang terbukti,
          praktis, dan dapat diandalkan. Website ini dibangun untuk mendukung pelanggan melalui informasi yang jelas dan
          alur pembelian yang mudah dipahami.
        </p>
      </div>

      <div className="container page__grid">
        <section className="pageSection">
          <h2 className="h2">Filosofi Kami</h2>
          <p className="muted">
            Baseball menghargai fundamental. Kami percaya pemain berkembang paling cepat ketika instruksi terstruktur,
            bahasa sederhana, dan latihan dapat diulang (repeatable). Kami memilih cue yang timeless dibanding tren yang
            mencolok—karena konsistensi adalah kunci.
          </p>
          <div className="quote">
            “Kerjakan hal yang biasa, dengan kualitas yang luar biasa—setiap hari.”
            <span className="quote__by"> — Tim Training</span>
          </div>
          <h3 className="h3">Yang akan Anda dapatkan</h3>
          <ul className="checklist">
            <li>Langkah dan checkpoint yang jelas untuk langsung dipraktikkan</li>
            <li>Rutinitas latihan yang realistis untuk jadwal harian</li>
            <li>Nada profesional yang menekankan kredibilitas dan rasa aman</li>
            <li>Informasi produk dan kebijakan privasi yang transparan</li>
          </ul>
        </section>

        <aside className="pageAside">
          <div className="asideCard">
            <div className="asideCard__title">Tautan cepat</div>
            <div className="asideCard__actions">
              <Link className="btn btnPrimary" to="/shop">
                Beli Video Training
              </Link>
              <Link className="btn btnGhost" to="/privacy">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="section sectionToned">
        <div className="container">
          <div className="section__head">
            <h2 className="h2">Sejarah & Pencapaian</h2>
            <p className="muted">
              Timeline singkat tentang bagaimana kami membangun pustaka pelatihan dan menyempurnakan pendekatan melalui
              pengalaman melatih.
            </p>
          </div>

          <div className="timeline">
            <TimelineItem year="Awal" title="Dibangun dari fundamental">
              Training dimulai dengan satu tujuan: mengajarkan mekanika yang tetap kuat di pertandingan. Fokus utama selalu
              skill yang repeatable—bukan jalan pintas.
            </TimelineItem>
            <TimelineItem year="Berkembang" title="Program video yang terstruktur">
              Kami merapikan drill dan progresi menjadi program video agar pemain bisa mengulang instruksi kapan pun
              dibutuhkan—tanpa kebingungan.
            </TimelineItem>
            <TimelineItem year="Saat ini" title="Website dengan fokus dukungan pelanggan">
              Website ini mengutamakan kejelasan: navigasi sederhana, informasi produk yang rapi, serta alur pembelian yang
              mudah—didukung kebijakan privasi yang formal.
            </TimelineItem>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2 className="h2">Profil Tim</h2>
            <p className="muted">Profesional, berpengalaman, dan berkomitmen pada standar pelatihan klasik.</p>
          </div>

          <div className="grid2">
            <Profile
              name="Harold “Hank” Morris"
              role="Head Instructor"
              bullets={[
                'Spesialis: fundamental, mekanika lemparan, struktur latihan',
                'Dikenal dengan checkpoint yang jelas dan rutinitas disiplin',
                'Gaya melatih: tenang, lugas, dan dapat diandalkan',
              ]}
            />
            <Profile
              name="Daniel Wright"
              role="Hitting & Approach"
              bullets={[
                'Spesialis: timing, bat path, contact yang repeatable',
                'Fokus: cue sederhana yang tetap kuat saat tekanan tinggi',
                'Gaya melatih: detail dan praktis',
              ]}
            />
            <Profile
              name="Samuel Reyes"
              role="Pitching Fundamentals"
              bullets={[
                'Spesialis: rutinitas command dan repeatability',
                'Fokus: strike percentage dan mekanika yang bersih',
                'Gaya melatih: terstruktur dan profesional',
              ]}
            />
            <Profile
              name="Michael Grant"
              role="Defense & Footwork"
              bullets={[
                'Spesialis: footwork, angles, dan transfers',
                'Fokus: defense yang dapat diandalkan melalui repetisi',
                'Gaya melatih: sabar, konsisten, dan presisi',
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

