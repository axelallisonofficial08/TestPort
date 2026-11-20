# Portofolio Arsitektur — Budi Santoso, S.Ars (Universitas Tarumanagara)

Website portofolio arsitektur interaktif berestetika **Dark Blueprint & Brutalist** yang dirancang khusus untuk menarik perhatian *hiring manager*, *principal architect*, dan *recruiter* biro arsitektur terkemuka dalam **2-3 menit pertama review**.

Dibuat menggunakan arsitektur **Clean Static (HTML5 + Modern Tailwind CSS + Vanilla JS)** sehingga **100% siap langsung dipublikasikan via GitHub Pages tanpa perlu build step atau konfigurasi rumit**.

---

## 🏛️ Fitur Utama & Keunggulan Desain

1. **Asetika Dark Blueprint & Brutalist**:
   - Skema warna *deep obsidian* dengan garis kisi teknis CAD (*blueprint grid lines*), tanda silang (*corner crosshair markers*), dan tipografi monospaced (*JetBrains Mono*) yang mencerminkan ketelitian teknis arsitek.
   - Menghasilkan kontras visual tinggi yang membuat gambar kerja, diagram isometrik, dan render 3D tampak menonjol dan dramatis.

2. **Kurasi 5 Tipologi Proyek Representatif**:
   - **The Urban Living Monolith (Tugas Akhir UNTAR)**: *High-density TOD Transit Hub* Manggarai (Revit BIM LOD 350, Rhino, Analisis Angin & Radiasi Surya).
   - **Rumah Lentera Tropis (Hunian Residensial)**: Eksplorasi pendinginan pasif (*stack effect*), dinding bata tanah liat berongga (*second skin*), dan taman *courtyard*.
   - **Ruang Temu Komunal Pasar Baru (Juara 2 Sayembara Nasional IAI)**: *Adaptive reuse* kawasan cagar budaya kolonial dengan kanopi parametrik modular ramah pejalan kaki.
   - **Verdant Spire & Collaborative Hub (Komersial & Mixed-Use)**: Menara perkantoran 28 lantai dengan teras taman biophilic bersertifikasi *Greenship Platinum*.
   - **The Biomorphic Timber Pavilion (Riset Parametrik & Fabrikasi)**: Struktur cangkang kayu lengkung ganda (*gridshell*) dengan algoritma Grasshopper dan sambungan *finger-joint* mesin CNC.

3. **Interactive Deep-Dive Modal (Proses Desain Komprehensif)**:
   - Recruiter dapat membuka detail tiap proyek dalam 4 tab proses terstruktur:
     - `01. Konsep & Analisis Tapak`
     - `02. Diagram Arsitektur & Transformasi Bentuk`
     - `03. Gambar Kerja, Denah & Potongan Teknis (CAD/BIM)`
     - `04. Render 3D Fotorealistik & Maket Fisik`
   - Dilengkapi *Sidebar Recruiter Fast-Facts*: transparansi atribusi peran, dosen pembimbing, serta rincian software yang digunakan.

4. **Recruiter Fast Actions (Konversi Wawancara Cepat)**:
   - **1-Click Download CV & Portofolio PDF**: Tombol unduh langsung di header dan footer.
   - **1-Click Copy Email**: Salin alamat email dengan notifikasi *toast popup* interaktif.
   - **Direct WhatsApp Chat**: Tombol obrolan langsung dengan template pesan undangan *interview*.
   - **Filter Kategori Interaktif**: Memudahkan kurasi cepat sesuai minat spesifik biro arsitektur (Akademik, Sayembara, Hunian, Komersial, Riset).

5. **Kepatuhan Web Interface & Aksesibilitas**:
   - Rasio kontras teks di atas standar WCAG AAA (>10:1).
   - Navigasi keyboard penuh (`Tab`, `Enter`, dan `ESC` untuk menutup modal proyek).
   - *Mobile-first responsive layout* yang nyaman dibuka di smartphone maupun layar monitor studio besar.

---

## 🚀 Cara Publikasi ke GitHub Pages (Hanya 2 Menit)

Website ini tidak memerlukan `npm install`, Node.js, atau *build tools* apa pun. Anda bisa langsung mengunggahnya ke GitHub:

### Langkah 1: Buat Repositori di GitHub
1. Buka [github.com](https://github.com) dan login ke akun Anda.
2. Klik tombol **New Repository**.
3. Beri nama repositori, contoh: `portofolio-arsitektur` atau `<username>.github.io` (jika ingin menjadi domain utama).
4. Pilih **Public**, lalu klik **Create repository**.

### Langkah 2: Upload File
Unggah 3 file berikut langsung ke root repositori:
- `index.html`
- `styles.css`
- `script.js`

*(Atau gunakan perintah Git di terminal):*
```bash
git init
git add .
git commit -m "Initial commit: Architecture Portfolio Budi Santoso UNTAR"
git branch -M main
git remote add origin https://github.com/<username>/<nama-repo>.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Di halaman repositori GitHub Anda, klik tab **Settings**.
2. Pada menu sebelah kiri, pilih **Pages**.
3. Di bawah bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`
   - **Branch**: Pilih `main` dan folder `/ (root)`
   - Klik tombol **Save**.
4. Tunggu sekitar 1-2 menit. Halaman website portofolio Anda akan aktif di:
   ```text
   https://<username>.github.io/<nama-repo>/
   ```

---

## ✏️ Cara Kustomisasi Data Portofolio

Semua data proyek, kontak, dan riwayat akademis tersusun rapi dan mudah disesuaikan:

1. **Ubah Data Proyek & Foto**:
   - Buka file [script.js](file:///d:/Axel/proj3/script.js).
   - Edit array `projectsData`: ganti judul, tahun, lokasi, teks deskripsi, daftar software, dan link gambar render Anda sendiri.
2. **Ubah Informasi Kontak & Nama**:
   - Buka file [index.html](file:///d:/Axel/proj3/index.html).
   - Ganti nomor WhatsApp pada tautan `https://wa.me/6281234567890`.
   - Ganti alamat email pada fungsi `copyEmailToClipboard()` di [script.js](file:///d:/Axel/proj3/script.js).
3. **Mengganti File CV Asli**:
   - Tempatkan file resume arsitektur asli Anda (misalnya `CV_Budi_Santoso.pdf`) di folder yang sama.
   - Ubah atribut tombol download pada `index.html` menjadi `<a href="CV_Budi_Santoso.pdf" download ...>`.

---

## 📐 Struktur Direktori
```text
proj3/
├── index.html       # Struktur semantik HTML5, hero section, grid proyek & modal dialog
├── styles.css       # Blueprint CAD grid pattern, crosshair corner marks, scrollbar & font
├── script.js        # Dataset 5 proyek arsitektur, logic filter, switcher tab modal & toast
└── README.md        # Panduan penggunaan dan deploy GitHub Pages
```
