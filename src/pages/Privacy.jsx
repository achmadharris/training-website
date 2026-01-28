import { Link } from 'react-router-dom'

function PolicySection({ title, children }) {
  return (
    <section className="policySection">
      <h2 className="h2">{title}</h2>
      <div className="policySection__body">{children}</div>
    </section>
  )
}

export default function Privacy() {
  return (
    <div className="page">
      <div className="container page__head">
        <div className="kicker">Keamanan, kredibilitas, dan kejelasan</div>
        <h1 className="h1">Kebijakan Privasi</h1>
        <p className="lead">
          Training menjunjung tinggi kepercayaan pelanggan. Kebijakan ini menjelaskan cara kami mengumpulkan, menggunakan,
          dan melindungi informasi pribadi, serta bagaimana kami menangani data yang terkait dengan transaksi.
        </p>
      </div>

      <div className="container policy">
        <PolicySection title="1. Informasi yang Kami Kumpulkan">
          <ul className="list">
            <li>
              <strong>Data pelanggan</strong> (seperti nama dan email) saat Anda mengirim pembelian atau permintaan dukungan.
            </li>
            <li>
              <strong>Data penggunaan</strong> (analitik dasar) untuk memahami halaman dan produk yang paling dibutuhkan.
            </li>
            <li>
              <strong>Data perangkat dan browser</strong> untuk keamanan, troubleshooting, dan peningkatan keandalan.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="2. Cara Kami Menggunakan Informasi">
          <ul className="list">
            <li>Memberikan dukungan pelanggan dan menjawab pertanyaan.</li>
            <li>Memproses pesanan dan memberikan akses ke video training yang dibeli.</li>
            <li>Menjaga keamanan website, mencegah fraud, dan melindungi akun pelanggan.</li>
            <li>Meningkatkan kejelasan konten, navigasi, dan informasi produk.</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. Keamanan Transaksi">
          <p className="muted">
            Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi data terkait transaksi. Ketika fitur
            pembayaran diaktifkan, transaksi seharusnya diproses oleh penyedia pembayaran tepercaya melalui koneksi terenkripsi
            (HTTPS/TLS).
          </p>
          <p className="muted">
            Harap dipahami bahwa tidak ada metode transmisi atau penyimpanan yang 100% aman. Kami akan terus meningkatkan
            perlindungan sesuai praktik industri yang berlaku.
          </p>
        </PolicySection>

        <PolicySection title="4. Berbagi Data & Pihak Ketiga">
          <p className="muted">Kami tidak menjual informasi pribadi. Kami hanya membagikan data bila diperlukan:</p>
          <ul className="list">
            <li>Kepada penyedia layanan yang membantu operasional website (hosting, analitik, pengiriman email).</li>
            <li>Kepada penyedia pembayaran untuk menyelesaikan transaksi (jika berlaku).</li>
            <li>Ketika diwajibkan oleh hukum, regulasi, atau proses hukum yang sah.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. Retensi Data">
          <p className="muted">
            Kami menyimpan informasi pribadi hanya selama diperlukan untuk menyediakan layanan, memenuhi kewajiban hukum,
            menyelesaikan sengketa, dan menegakkan perjanjian.
          </p>
        </PolicySection>

        <PolicySection title="6. Hak dan Pilihan Anda">
          <ul className="list">
            <li>Anda dapat meminta akses, koreksi, atau penghapusan informasi pribadi.</li>
            <li>Anda dapat memilih untuk tidak menerima komunikasi non-esensial.</li>
          </ul>
        </PolicySection>

        <PolicySection title="7. Kontak">
          <p className="muted">
            Untuk pertanyaan atau permintaan terkait privasi, hubungi: <a href="mailto:privacy@training.example">privacy@training.example</a>
          </p>
          <p className="muted">
            Jika Anda membutuhkan bantuan umum, silakan kunjungi halaman <Link to="/about">Tentang</Link> atau email{' '}
            <a href="mailto:support@training.example">support@training.example</a>.
          </p>
        </PolicySection>

        <div className="muted small policy__updated">Terakhir diperbarui: 28 Jan 2026</div>
      </div>
    </div>
  )
}

