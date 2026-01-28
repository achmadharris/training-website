# Training Website

Website untuk brand **Training** (video pelatihan baseball) dengan karakter:

- Minimalis, dominan **merah**
- Klasik / old-fashioned
- Aman & terpercaya (kredibilitas, bahasa formal, halaman privasi)
- Fokus ke customer support dan kemudahan akses informasi

## Halaman

- `/` — Landing Page (hero + CTA + highlight + tim)
- `/about` — About Page (cerita perusahaan, filosofi, sejarah & pencapaian, profil tim)
- `/shop` — Shop Page (katalog video, detail produk, Add to Cart, Checkout demo)
- `/privacy` — Privacy Policy Page (formal & jelas)

## Fitur

- Navigasi sederhana & intuitif
- CTA pembelian yang jelas (tombol “Beli Sekarang / Beli Video Training”)
- Cart sederhana dengan penyimpanan `localStorage`
- Routing menggunakan `HashRouter` (lebih aman untuk deploy statis tanpa konfigurasi server)

## Menjalankan Project

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```
