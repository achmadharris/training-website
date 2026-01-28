import { useMemo, useRef, useState } from 'react'
import { PRODUCTS } from '../data/products.js'
import { useCart } from '../state/cart.jsx'

const money = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })

function ProductCard({ product, onAdd, onBuyNow }) {
  return (
    <article className="product card">
      <div className="product__top">
        <div>
          <h3 className="h3 product__title">{product.title}</h3>
          <p className="muted product__short">{product.short}</p>
        </div>
        <div className="product__price">{money.format(product.price)}</div>
      </div>

      <div className="product__details muted">{product.details}</div>

      <div className="product__benefits">
        <div className="product__label">Manfaat</div>
        <ul className="list listTight">
          {product.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="product__actions">
        <button className="btn btnPrimary" type="button" onClick={() => onAdd(product.id)}>
          Tambah ke Keranjang
        </button>
        <button className="btn btnSecondary" type="button" onClick={() => onBuyNow(product.id)}>
          Beli Sekarang
        </button>
      </div>
    </article>
  )
}

function CartLine({ item, onDec, onInc, onRemove }) {
  return (
    <div className="cartLine">
      <div className="cartLine__main">
        <div className="cartLine__title">{item.title}</div>
        <div className="muted cartLine__meta">
          {money.format(item.price)} × {item.qty}
        </div>
      </div>
      <div className="cartLine__actions">
        <div className="qty">
          <button className="qty__btn" type="button" onClick={onDec} aria-label="Decrease quantity">
            −
          </button>
          <span className="qty__value" aria-label="Quantity">
            {item.qty}
          </span>
          <button className="qty__btn" type="button" onClick={onInc} aria-label="Increase quantity">
            +
          </button>
        </div>
        <button className="linkDanger" type="button" onClick={onRemove}>
          Hapus
        </button>
      </div>
    </div>
  )
}

export default function Shop() {
  const cart = useCart()
  const dialogRef = useRef(null)

  const [customer, setCustomer] = useState({ name: '', email: '' })
  const [orderStatus, setOrderStatus] = useState('idle') // idle | placed

  const cartItems = useMemo(() => {
    return Object.entries(cart.items)
      .map(([id, qty]) => {
        const product = PRODUCTS.find((p) => p.id === id)
        if (!product) return null
        return { ...product, qty }
      })
      .filter(Boolean)
  }, [cart.items])

  const total = useMemo(() => cartItems.reduce((sum, it) => sum + it.price * it.qty, 0), [cartItems])

  function openCheckout() {
    setOrderStatus('idle')
    const dlg = dialogRef.current
    if (dlg?.showModal) dlg.showModal()
  }

  function closeCheckout() {
    const dlg = dialogRef.current
    if (dlg?.close) dlg.close()
  }

  function handleAdd(id) {
    cart.add(id)
  }

  function handleBuyNow(id) {
    cart.add(id)
    openCheckout()
  }

  function placeOrder(e) {
    e.preventDefault()
    setOrderStatus('placed')
    cart.clear()
  }

  return (
    <div className="page">
      <div className="container page__head">
        <div className="kicker">Katalog sederhana. Detail jelas. Alur mudah.</div>
        <h1 className="h1">Toko Video Training</h1>
        <p className="lead">
          Pilih program, baca manfaatnya, lalu masukkan ke keranjang. Layout dibuat sengaja sederhana agar fokus tetap ke
          produk dan alur pembelian.
        </p>
      </div>

      <div className="container shopGrid">
        <section className="shopGrid__products" aria-label="Products">
          <div className="grid2">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAdd} onBuyNow={handleBuyNow} />
            ))}
          </div>
        </section>

        <aside className="shopGrid__cart" aria-label="Cart">
          <div className="cartCard">
            <div className="cartCard__head">
              <div className="cartCard__title">Keranjang</div>
              <div className="cartCard__count muted">{cart.itemCount} item</div>
            </div>

            {cartItems.length === 0 ? (
              <div className="cartEmpty">
                <div className="muted">Keranjang Anda masih kosong.</div>
                <div className="cartEmpty__hint">Tambahkan video training untuk mulai.</div>
              </div>
            ) : (
              <div className="cartLines">
                {cartItems.map((it) => (
                  <CartLine
                    key={it.id}
                    item={it}
                    onDec={() => cart.setQty(it.id, it.qty - 1)}
                    onInc={() => cart.setQty(it.id, it.qty + 1)}
                    onRemove={() => cart.remove(it.id)}
                  />
                ))}
              </div>
            )}

            <div className="cartCard__summary">
              <div className="row">
                <span className="muted">Total</span>
                <span className="total">{money.format(total)}</span>
              </div>
              <div className="cartCard__actions">
                <button className="btn btnPrimary" type="button" onClick={openCheckout} disabled={cartItems.length === 0}>
                  Checkout
                </button>
                <button className="btn btnGhost" type="button" onClick={cart.clear} disabled={cartItems.length === 0}>
                  Kosongkan
                </button>
              </div>
              <div className="muted small">
                Catatan: ini adalah demo alur checkout (belum terhubung payment gateway).
              </div>
            </div>
          </div>
        </aside>
      </div>

      <dialog className="dialog" ref={dialogRef} aria-label="Checkout">
        <form className="dialog__panel" method="dialog" onSubmit={placeOrder}>
          <div className="dialog__head">
            <div>
              <div className="kicker">Aman, jelas, dan profesional</div>
              <div className="dialog__title">Checkout</div>
            </div>
            <button className="dialog__close" type="button" onClick={closeCheckout} aria-label="Close">
              ✕
            </button>
          </div>

          {orderStatus === 'placed' ? (
            <div className="dialog__content">
              <div className="success">
                <div className="success__title">Pesanan diterima</div>
                <div className="muted">
                  Terima kasih. Pesanan Anda dicatat secara lokal untuk kebutuhan demo. Pada sistem sebenarnya, pembayaran
                  dan akses konten akan ditangani secara aman.
                </div>
              </div>
              <div className="dialog__actions">
                <button className="btn btnPrimary" type="button" onClick={closeCheckout}>
                  Selesai
                </button>
              </div>
            </div>
          ) : (
            <div className="dialog__content">
              <div className="dialog__section">
                <div className="dialog__label">Ringkasan pesanan</div>
                {cartItems.length === 0 ? (
                  <div className="muted">Keranjang Anda masih kosong.</div>
                ) : (
                  <ul className="list listTight">
                    {cartItems.map((it) => (
                      <li key={it.id}>
                        {it.title} — {it.qty} × {money.format(it.price)}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="row rowTop">
                  <span className="muted">Total</span>
                  <span className="total">{money.format(total)}</span>
                </div>
              </div>

              <div className="dialog__section">
                <div className="dialog__label">Data pelanggan</div>
                <div className="formGrid">
                  <label className="field">
                    <span className="field__label">Nama lengkap</span>
                    <input
                      className="input"
                      value={customer.name}
                      onChange={(e) => setCustomer((c) => ({ ...c, name: e.target.value }))}
                      placeholder="Nama Anda"
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field__label">Email</span>
                    <input
                      className="input"
                      type="email"
                      value={customer.email}
                      onChange={(e) => setCustomer((c) => ({ ...c, email: e.target.value }))}
                      placeholder="anda@example.com"
                      required
                    />
                  </label>
                </div>
                <div className="muted small">
                  Data ini dipakai hanya untuk demonstrasi alur checkout. Lihat Kebijakan Privasi untuk detail.
                </div>
              </div>

              <div className="dialog__actions">
                <button className="btn btnPrimary" type="submit" disabled={cartItems.length === 0}>
                  Buat Pesanan
                </button>
                <button className="btn btnGhost" type="button" onClick={closeCheckout}>
                  Batal
                </button>
              </div>
            </div>
          )}
        </form>
      </dialog>
    </div>
  )
}

