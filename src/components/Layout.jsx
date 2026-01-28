import { NavLink, Outlet, Link } from 'react-router-dom'
import { useCart } from '../state/cart.jsx'

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

function BrandMark() {
  return (
    <div className="brand">
      <span className="brand__dot" aria-hidden="true" />
      <span className="brand__name">Training</span>
    </div>
  )
}

function Header() {
  const { itemCount } = useCart()

  return (
    <header className="siteHeader">
      <div className="container siteHeader__inner">
        <Link className="siteHeader__logo" to="/" aria-label="Training Home">
          <BrandMark />
        </Link>

        <nav className="siteNav" aria-label="Primary">
          <NavLink className={({ isActive }) => cx('siteNav__link', isActive && 'isActive')} to="/">
            Beranda
          </NavLink>
          <NavLink
            className={({ isActive }) => cx('siteNav__link', isActive && 'isActive')}
            to="/about"
          >
            Tentang
          </NavLink>
          <NavLink className={({ isActive }) => cx('siteNav__link', isActive && 'isActive')} to="/shop">
            Toko
            {itemCount > 0 ? <span className="siteNav__badge">{itemCount}</span> : null}
          </NavLink>
          <NavLink
            className={({ isActive }) => cx('siteNav__link', isActive && 'isActive')}
            to="/privacy"
          >
            Privasi
          </NavLink>
        </nav>

        <div className="siteHeader__cta">
          <Link className="btn btnPrimary" to="/shop">
            Beli Video Training
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container siteFooter__inner">
        <div className="siteFooter__col">
          <div className="siteFooter__brand">
            <BrandMark />
          </div>
          <p className="muted">
            Instruksi baseball klasik dengan track record yang terbukti. Dibangun untuk kejelasan, kepercayaan, dan
            dukungan pelanggan—agar Anda berlatih dengan yakin.
          </p>
        </div>
        <div className="siteFooter__col">
          <div className="siteFooter__title">Dukungan</div>
          <ul className="list">
            <li>
              Email: <a href="mailto:support@training.example">support@training.example</a>
            </li>
            <li>Jam kerja: Sen–Jum, 09:00–17:00</li>
            <li>
              Privasi: <Link to="/privacy">Baca kebijakan</Link>
            </li>
          </ul>
        </div>
        <div className="siteFooter__col">
          <div className="siteFooter__title">Perusahaan</div>
          <ul className="list">
            <li>
              <Link to="/about">Tentang Training</Link>
            </li>
            <li>
              <Link to="/shop">Toko</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container siteFooter__bottom">
        <span className="muted">© {new Date().getFullYear()} Training. Hak cipta dilindungi.</span>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="appShell">
      <Header />
      <main className="siteMain">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

