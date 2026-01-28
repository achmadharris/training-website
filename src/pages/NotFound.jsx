import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <div className="container page__head">
        <div className="kicker">Halaman tidak ditemukan</div>
        <h1 className="h1">Kami tidak menemukan halaman tersebut</h1>
        <p className="lead">
          Tautan mungkin sudah tidak berlaku atau alamatnya salah. Silakan gunakan navigasi di atas, atau kembali ke
          beranda.
        </p>
        <div className="section__actions">
          <Link className="btn btnPrimary" to="/">
            Kembali ke Beranda
          </Link>
          <Link className="btn btnGhost" to="/shop">
            Beli Video
          </Link>
        </div>
      </div>
    </div>
  )
}

