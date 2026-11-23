# Portofolio Arsitektur — Steven Nata, S.Ars (Universitas Tarumanagara)

Website portofolio arsitektur interaktif berestetika **Dark Blueprint & Brutalist CAD** yang dirancang khusus untuk memukau *hiring manager*, *principal architect*, dan *recruiter* biro arsitektur terkemuka dalam **2-3 menit pertama review**.

Dibuat menggunakan arsitektur **Clean Static (HTML5 + Modern Tailwind CSS + Vanilla JS)** dan di-hosting via **GitHub Pages**.

---

## 🏛️ Fitur Teknis & Interaktif Khusus Arsitek

1. **Live CAD HUD Coordinates & Inversion Mode**:
   - Menampilkan koordinat kursor arsitektur secara real-time (`X`, `Y`, `AZIMUTH`, `SCALE 1:100`).
   - Tombol **TOGGLE BLUEPRINT**: Mengubah tampilan seketika menjadi kertas cetak biru *Cyan Drafting Blueprint* khas studio arsitektur.
   - **Web Audio FX Synthesizer**: Menghasilkan umpan balik suara klik dan *snap* mekanik presisi tinggi tanpa memerlukan file audio eksternal.

2. **Simulator Mikroklimat & Lintasan Matahari Interaktif (GUNSAR HUB)**:
   - Recruiter dapat menggeser parameter waktu matahari Jakarta (08:00 - 17:00 WIB), kerapatan kanopi biofilik (0% - 100%), dan kecepatan ventilasi alami.
   - Diagram SVG reaktif yang menampilkan pergerakan orbit matahari, kalkulasi panjang bayangan bangunan berpori, dan tabel reduksi beban panas perkotaan (*Urban Heat Island Mitigation*).

3. **Format Kop Gambar Formal (Architectural Title Block)**:
   - Setiap kartu proyek dan modal detail dilengkapi lembar nomor (`SHEET A-101`), skala perancangan (`1:200 @ A1`), garis dimensi CAD, serta anotasi struktural presisi (`C1 Core Shear Wall`, `C2 Biophilic Canopy`, `C3 Evaporative Pool`).

4. **Karya Nyata Tugas Akhir & Publikasi Ilmiah**:
   - **GUNSAR HUB**: *Community Placemaking & Biophilic Urban Center in Gunung Sahari*, diterbitkan di **Jurnal STUPA (Sains, Teknologi, Urban, Perancangan, Arsitektur)**, Vol. 6 No. 2, Oktober 2024, bersama dosen pembimbing Agnatasya Listianti Mustaram, S.T., M.Sc.

---

## 🚀 Status Live Deployment

Portofolio aktif di:
**[https://axelallisonofficial08.github.io/TestPort/](https://axelallisonofficial08.github.io/TestPort/)**

### Struktur File:
```text
proj3/
├── index.html       # Struktur semantik HTML5, CAD HUD, simulator biofilik & modal
├── styles.css       # Grid CAD, corner marks, tema cyan blueprint & animasi scanline
├── script.js        # Engine simulator mikroklimat, Web Audio FX, koordinat HUD & data proyek
└── README.md        # Dokumentasi fitur portofolio
```
