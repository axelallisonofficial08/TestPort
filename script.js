/**
 * Portofolio Arsitektur - Steven Nata, S.Ars (Universitas Tarumanagara)
 * Dark Blueprint & Brutalist Interactive Architecture Engine
 * Features: Live CAD HUD, Sun-Path & Biophilic Simulator, Web Audio FX, Blueprint Inversion
 */

// ==========================================
// 1. DATASET PROYEK ARSITEKTUR TERKURASI
// ==========================================
const projectsData = [
  {
    id: "proj-1",
    title: "GUNSAR HUB",
    subtitle: "Community Placemaking & Biophilic Urban Center in Gunung Sahari",
    category: "akademik",
    categoryLabel: "Tugas Akhir UNTAR",
    year: "2024",
    location: "Kawasan Gunung Sahari, Jakarta Pusat",
    sheetNo: "A-101",
    scale: "1:200",
    role: "Desainer Utama & Penulis Skripsi (NIM 315190059)",
    advisor: "Agnatasya Listianti Mustaram, S.T., M.Sc. (Publikasi Jurnal STUPA)",
    software: ["Autodesk Revit BIM", "Rhino 3D", "Ladybug Solar Tools", "Enscape", "AutoCAD"],
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    summary: "Proyek Tugas Akhir Sarjana Arsitektur UNTAR (2024) yang diterbitkan di Jurnal Ilmiah STUPA. Menjawab kemunduran fungsi dan degradasi koridor komersial Gunung Sahari melalui strategi 'Placemaking' dan 14 pola 'Desain Biofilik'. Menghasilkan ruang publik terintegrasi yang mampu menurunkan panas radiasi perkotaan hingga 4.2°C.",
    stats: [
      { label: "GFA (Luas Lantai)", value: "34.800 m²", unit: "Area Terbina" },
      { label: "Metodologi", value: "Placemaking", unit: "14 Pola Biofilik" },
      { label: "Publikasi Ilmiah", value: "Jurnal STUPA", unit: "Vol. 6 No. 2 (2024)" },
      { label: "Mitigasi Termal", value: "-4.2°C", unit: "Urban Heat Island" }
    ],
    technicalCallouts: [
      { id: "C1", label: "Core Struktural", desc: "Shear wall 450mm mutu f'c 40 MPa terintegrasi jalur evakuasi kebakaran dan core utilitas MEP." },
      { id: "C2", label: "Kanopi Biofilik", desc: "Kisi-kisi peneduh parametrik kayu rekayasa dengan sudut kemiringan 32° sesuai lintasan matahari Jakarta." },
      { id: "C3", label: "Kolam Evaporatif", desc: "Water feature resirkulasi air hujan untuk mendinginkan udara panas sebelum memasuki atrium publik." }
    ],
    tabs: {
      overview: {
        heading: "Revitalisasi Koridor Gunung Sahari Melalui Placemaking",
        paragraphs: [
          "Kawasan Gunung Sahari di Jakarta Pusat memiliki sejarah panjang sebagai simpul bisnis dan pemerintahan, namun dalam dekade terakhir mengalami degradasi fungsi dan minimnya ruang interaksi publik yang inklusif.",
          "GUNSAR HUB dirancang sebagai 'oasis perkotaan' dengan menerapkan 14 pola desain biofilik (Biophilic Design). Bentuk massa bangunan berpori (porous architecture) memaksimalkan penetrasi angin muson dan menciptakan koridor peneduh alami sehingga pejalan kaki terlindungi dari teriknya panas matahari Jakarta Pusat."
        ],
        highlights: [
          "Integrasi unsur alami: vegetasi tropis bertingkat, kolam mikroklimat pendingin, dan material kayu daur ulang.",
          "Podium interaktif terbuka multi-generasi untuk UMKM kreatif, ruang komunal seni, dan amphitheater publik.",
          "Diterbitkan di Jurnal Sains, Teknologi, Urban, Perancangan, Arsitektur (STUPA), Vol. 6 No. 2, Oktober 2024."
        ]
      },
      diagrams: {
        heading: "Analisis Tapak, Matriks Biofilik & Transformasi Massa",
        description: "Metodologi perancangan kuantitatif berbasis data mikroklimat Jakarta Pusat dan pemodelan radiasi matahari Ladybug Tools.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            caption: "Diagram Konsep Placemaking: Menghubungkan Koridor Pejalan Kaki dengan Kantong Ruang Komunitas Hijau"
          },
          {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            caption: "Simulasi Ladybug Tools: Penurunan Beban Radiasi Surya dengan Fasad Vegetasi Biofilik"
          }
        ]
      },
      drawings: {
        heading: "Gambar Kerja, Denah Ruang Publik & Potongan Teknis (BIM LOD 350)",
        description: "Dokumentasi gambar kerja yang mengintegrasikan bentang lebar struktur komposit dan sistem irigasi lansekap vertikal terpadu.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            caption: "Denah Lantai Dasar: Konektivitas Sirkulasi Terbuka Antara Jalan Utama Gunung Sahari dan Amphitheater"
          },
          {
            url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
            caption: "Potongan Melintang: Efek Ventilasi Silang Alami dan Integrasi Water Feature Evaporatif"
          }
        ]
      },
      renders: {
        heading: "Visualisasi 3D Suasana & Studi Integrasi Ruang Terbuka",
        description: "Visualisasi interaksi komunitas warga kota di ruang publik bervegetasi rindang waktu sore hari.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
            caption: "Perspektif Eksterior Senja: Plaza Terbuka GUNSAR HUB yang Mengundang Interaksi Publik"
          },
          {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            caption: "Interior Atrium Biofilik dengan Cahaya Alami Difus dan Taman Dalam Ruang"
          }
        ]
      }
    }
  },
  {
    id: "proj-2",
    title: "Rumah Lentera Tropis",
    subtitle: "Passive-Cooling Courtyard House with Perforated Clay Screen",
    category: "residential",
    categoryLabel: "Hunian Tropis",
    year: "2023",
    location: "BSD City, Tangerang Selatan",
    sheetNo: "A-204",
    scale: "1:100",
    role: "Lead Architectural Designer (Studio Praktek Mandiri)",
    advisor: "Kolaborasi Praktik Studio Arsitektur",
    software: ["AutoCAD", "SketchUp", "Lumion 12", "Photoshop", "Climate Consultant"],
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    summary: "Hunian tapak 2 lantai yang mengeksplorasi material lokal bata terakota berongga sebagai 'second skin'. Dirancang untuk meminimalkan ketergantungan pada pendingin udara buatan (AC) hingga 65% melalui courtyard dalam dan efek cerobong udara (stack effect).",
    stats: [
      { label: "Luas Lahan", value: "240 m²", unit: "Tapak Tanah" },
      { label: "Luas Bangunan", value: "285 m²", unit: "2 Lantai" },
      { label: "Konsumsi AC", value: "Turun 65%", unit: "Energi Hemat" },
      { label: "Tipe Ruang", value: "Courtyard", unit: "Inner Garden" }
    ],
    technicalCallouts: [
      { id: "C1", label: "Double Brick Skin", desc: "Anyaman bata terakota berongga dengan celah 40mm penyaring 70% silau panas matahari barat." },
      { id: "C2", label: "Courtyard Void", desc: "Void pusat 4x6m dengan kolam refleksi dangkal penghasil efek pendinginan adiabatik." }
    ],
    tabs: {
      overview: {
        heading: "Filosofi: Menghirup Udara Tropis",
        paragraphs: [
          "Di tengah iklim tropis lembap Tangerang, rumah ini menghindari pendekatan kotak kaca tertutup. Sebagai gantinya, fasad depan dirancang seperti lentera menggunakan anyaman bata tanah liat lokal yang disusun dengan celah presisi 40mm.",
          "Celah ini menyaring cahaya matahari tropis yang terik menjadi pola bayangan dramatis di dalam rumah, sekaligus membiarkan semilir angin terus mengalir ke dalam kolam refleksi dan taman tengah (courtyard)."
        ],
        highlights: [
          "Penerapan cross ventilation aktif dari taman depan melintasi living room ke void belakang.",
          "Material ramah lingkungan: Bata lokal tanpa plester, lantai semen ekspos teraso, dan kayu jati daur ulang.",
          "Pemanenan air hujan (rainwater harvesting) untuk menyiram tanaman courtyard dan flushing sanitasi."
        ]
      },
      diagrams: {
        heading: "Diagram Termal & Sirkulasi Aliran Udara",
        description: "Simulasi pendinginan pasif memanfaatkan perbedaan tekanan udara dan kolam air evaporatif.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
            caption: "Diagram Stack Effect: Udara panas terdorong ke skylight atap louvers"
          }
        ]
      },
      drawings: {
        heading: "Denah Terbuka & Detail Dinding Bata",
        description: "Gambar arsitektur presisi menunjukkan pola ikatan bata dan detail pertemuan kusen kayu tersembunyi.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            caption: "Denah Lantai 1 dengan Alur Terbuka Living-Dining terhubung ke Taman Courtyard"
          }
        ]
      },
      renders: {
        heading: "Fotografi & Visualisasi Ruang",
        description: "Interaksi cahaya alami bertekstur pada dinding bata di siang hari dan efek lentera berpendar di malam hari.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
            caption: "Fasad Depan Waktu Malam: Pendar Cahaya Interior menembus Kisi-kisi Bata"
          },
          {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            caption: "Ruang Keluarga Terbuka dengan pemandangan langsung ke kolam inner court"
          }
        ]
      }
    }
  },
  {
    id: "proj-3",
    title: "Ruang Temu Komunal: Pasar Baru",
    subtitle: "Adaptive Reuse & Pedestrian Heritage Revitalization",
    category: "sayembara",
    categoryLabel: "Juara 2 Sayembara Nasional IAI",
    year: "2023",
    location: "Kawasan Bersejarah Pasar Baru, Jakarta Pusat",
    sheetNo: "C-302",
    scale: "1:500",
    role: "Team Leader / Concept & 3D Visualization",
    advisor: "Sayembara Terbuka Ikatan Arsitek Indonesia (IAI)",
    software: ["Rhino 3D", "Grasshopper", "Twinmotion", "AutoCAD", "Adobe InDesign"],
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    summary: "Proposal sayembara revitalisasi koridor bersejarah Pasar Baru Jakarta yang memenangkan Juara 2 Nasional. Mempertahankan fasad cagar budaya kolonial Art Deco sembari menyisipkan kanopi kanvas tarik parametrik untuk menaungi pejalan kaki dan ruang seni seniman lokal.",
    stats: [
      { label: "Peringkat", value: "Juara 2 Nasional", unit: "Sayembara IAI" },
      { label: "Panjang Koridor", value: "450 Meter", unit: "Zonasi Pejalan Kaki" },
      { label: "Bebas Kendaraan", value: "100%", unit: "Car-Free Pedestrian" },
      { label: "Cagar Budaya", value: "18 Fasad", unit: "Konservasi Terjaga" }
    ],
    technicalCallouts: [
      { id: "C1", label: "Tensegrity Mast", desc: "Tiang baja mandiri (independent column) bebas dari dinding bersejarah cagar budaya." },
      { id: "C2", label: "PTFE Membrane", desc: "Membran peneduh berdaya pantul panas 85% dengan sistem talang air hujan terintegrasi." }
    ],
    tabs: {
      overview: {
        heading: "Menghidupkan Kembali Jiwa Passer Baroe",
        paragraphs: [
          "Pasar Baru memiliki nilai historis sejak 1820 namun mengalami degradasi akibat dominasi kendaraan bermotor, panas tropis, dan kurangnya ruang jeda bagi warga kota.",
          "Proposal kami mengusulkan restrukturisasi total menjadi zona pejalan kaki berkanopi parametrik peneduh modular. Setiap segmen kanopi mengintegrasikan panel penangkap air hujan dan pencahayaan aksen yang menonjolkan ornamen fasad bersejarah tanpa merusak struktur aslinya."
        ],
        highlights: [
          "Strategi adaptive reuse: mengubah gang sempit terbengkalai menjadi galeri seni pop-up.",
          "Desain street furniture modular dari daur ulang limbah plastik kota Jakarta.",
          "Integrasi jalur pedestrian ramah disabilitas dan lansia dengan guiding block taktil kontras."
        ]
      },
      diagrams: {
        heading: "Masterplan Zonasi & Diagram Regenerasi Urban",
        description: "Pembagian 3 zona fungsional: Gerbang Sejarah, Koridor Kuliner & Kerajinan, serta Amphitheater Seni Terbuka.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            caption: "Diagram Regenerasi Koridor: Dari Jalan Terbengkalai Menjadi Ruang Komunal Berkelanjutan"
          }
        ]
      },
      drawings: {
        heading: "Elevasi Jalan Komparatif & Detail Modul Kanopi",
        description: "Gambar teknik elevasi fasad cagar budaya bersebelahan dengan struktur baja ringan kanopi terlepas (independent structural frame).",
        images: [
          {
            url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            caption: "Gambar Elevasi Koridor Fasad Art Deco & Detail Sambungan Struktur Mandiri Kanopi"
          }
        ]
      },
      renders: {
        heading: "Visualisasi Suasana Koridor & Festival Malam",
        description: "Simulasi keramaian pejalan kaki saat sore dan festival kuliner malam hari dengan tata cahaya arsitektural dramatis.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
            caption: "Perspektif Suasana Senja: Pejalan Kaki Menikmati Koridor Berkanopi Tanpa Polusi Asap"
          }
        ]
      }
    }
  },
  {
    id: "proj-4",
    title: "Verdant Spire & Creative Hub",
    subtitle: "Biophilic Mixed-Use Commercial Tower & Co-Working Ecosystem",
    category: "komersial",
    categoryLabel: "Komersial & Mixed-Use",
    year: "2023",
    location: "TB Simatupang Business Corridor, Jakarta Selatan",
    sheetNo: "A-410",
    scale: "1:250",
    role: "Junior Architect Intern (Design & BIM Modeling)",
    advisor: "Kolaborasi Tim Sayembara Arsitektur Komersial",
    software: ["Autodesk Revit BIM", "Ladybug Analysis", "V-Ray 6", "Rhino 3D"],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    summary: "Menara perkantoran komersial 28 lantai bersertifikasi Greenship Platinum yang memadukan ruang kerja fleksibel era hybrid dengan teras kantilever biophilic bertingkat di setiap interval 4 lantai.",
    stats: [
      { label: "GFA", value: "36.200 m²", unit: "Gross Floor Area" },
      { label: "Sertifikasi Hijau", value: "Greenship", unit: "Peringkat Platinum" },
      { label: "Area Hijau", value: "4.200 m²", unit: "Vegetasi Vertikal" },
      { label: "Sistem Struktur", value: "Diagrid Steel", unit: "RC Core Lift" }
    ],
    technicalCallouts: [
      { id: "C1", label: "External Diagrid", desc: "Struktur eksoskeleton baja tubular hemat ruang dalam dan tahan guncangan gempa." },
      { id: "C2", label: "Sky Terrace Planter", desc: "Sistem planter box kantilever dengan media tanam hidroponik ringan dan irigasi tetes otomatis." }
    ],
    tabs: {
      overview: {
        heading: "Redefinisi Ruang Kerja Pasca-Pandemi",
        paragraphs: [
          "Bekerja di gedung tinggi Jakarta sering kali membuat karyawan terisolasi dari alam. Verdant Spire memecah paradigma ini dengan menyematkan teras taman terbuka berlantai ganda (double-height sky terrace) setiap 4 lantai.",
          "Karyawan dapat mengadakan rapat santai di ruang terbuka berangin alami sambil menikmati panorama kota tanpa harus turun ke lantai dasar. Sirkulasi vertikal didukung lift hemat energi regeneratif."
        ],
        highlights: [
          "Sirip peneduh fasad (vertical sun louvers) yang dioptimalkan sesuai lintasan matahari khatulistiwa.",
          "Pengurangan beban pendingin udara hingga 28% berkat vegetasi penyerap panas di balkon.",
          "Podium retail terhubung langsung dengan pedestrian walk koridor TB Simatupang."
        ]
      },
      diagrams: {
        heading: "Diagram Kinerja Energi & Teras Biophilic",
        description: "Simulasi insolation matahari dan distribusi pendinginan alami antar lantai perkantoran.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            caption: "Diagram Alur Angin & Penyerapan Panas oleh Teras Hijau Bertingkat"
          }
        ]
      },
      drawings: {
        heading: "Denah Tipikal Fleksibel & Detail Curtain Wall",
        description: "Gambar potongan detail curtain wall double-glazing dan integrasi planter box otomatis.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
            caption: "Potongan Isometrik Detail Sambungan Fasad Kaca dan Sistem Irigasi Tetes Otomatis"
          }
        ]
      },
      renders: {
        heading: "Visual Fasad Menara & Suasana Sky Garden",
        description: "Visualisasi 3D atmosferik yang menunjukkan artikulasi fasad hijau menara di cakrawala Jakarta.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
            caption: "Perspektif Sudut Bawah Fasad: Tekstur Geometris Berpadu Tanaman Tropis Menggantung"
          }
        ]
      }
    }
  },
  {
    id: "proj-5",
    title: "The Biomorphic Timber Pavilion",
    subtitle: "Parametric Design, Algorithmic Joinery & Physical Scale Model",
    category: "riset",
    categoryLabel: "Riset Parametrik & Fabrikasi",
    year: "2024",
    location: "Plaza Kampus 1 Universitas Tarumanagara, Grogol",
    sheetNo: "R-501",
    scale: "1:20 Mockup",
    role: "Computational Design & Digital Fabrication Lead",
    advisor: "Studio Perancangan Komputasional Arsitektur UNTAR",
    software: ["Rhino 7", "Grasshopper", "Karamba3D FEA", "CNC Mill Scripting", "Laser Cutter"],
    heroImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    summary: "Eksplorasi struktur cangkang kayu lengkung ganda (gridshell) menggunakan algoritma komputasional Grasshopper. Setiap elemen sambungan kayu lapis interlocking dipotong menggunakan mesin CNC tanpa baut logam, diuji dengan model fisik skala 1:10 dan 1:1 mockup.",
    stats: [
      { label: "Bentang Struktur", value: "9.2 Meter", unit: "Bebas Kolom" },
      { label: "Komponen Unik", value: "384 Keping", unit: "Pola Fabrikasi CNC" },
      { label: "Sambungan", value: "Friction Lock", unit: "Zero-Bolt Joint" },
      { label: "Toleransi", value: "±0.5 mm", unit: "Akurasi Mesin" }
    ],
    technicalCallouts: [
      { id: "C1", label: "Interlocking Joint", desc: "Sambungan celah lidah-alur presisi tinggi yang mengunci mandiri akibat gaya gravitasi struktur." },
      { id: "C2", label: "Double-Curvature Rib", desc: "Rusuk kayu lapis birch multi-layer dengan ketebalan 18mm teruji beban lendutan Karamba3D." }
    ],
    tabs: {
      overview: {
        heading: "Perpaduan Algoritma Digital & Kerajinan Kayu Nusantara",
        paragraphs: [
          "Paviliun eksperimental ini mengkaji potensi kayu rekayasa ramah lingkungan untuk menciptakan bentang bebas kolom dengan efisiensi material tinggi.",
          "Dengan memanfaatkan parametric scripting, bentuk kurva dioptimalkan berdasarkan gaya aksial tekan murni sehingga ketebalan kayu dapat ditekan hingga 18mm saja. Seluruh komponen diberi kode penomoran otomatis untuk kemudahan perakitan di lapangan."
        ],
        highlights: [
          "Optimasi topologi geometri berbasis analisis tegangan Karamba3D.",
          "Sistem sambungan finger-joint presisi hasil fabrikasi digital mesin CNC 3-axis.",
          "Pembuatan maket model fisik presisi skala 1:20 menggunakan laser cutting kayu balsa."
        ]
      },
      diagrams: {
        heading: "Algoritma Grasshopper & Diagram Tegangan",
        description: "Visualisasi node script Grasshopper, relaksasi bentuk (Kangaroo physics), dan peta distribusi beban.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            caption: "Alur Script Parametrik: Dari Kurva Bebas Menjadi Pola Sambungan Siap Potong CNC"
          }
        ]
      },
      drawings: {
        heading: "Drawing Detail Sambungan & Pola Unrolling CNC",
        description: "Gambar fabrikasi detail toleransi pemotongan kayu lapis birch dan diagram susunan perakitan cepat.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            caption: "Unrolling Pattern untuk Nesting CNC Sheet Kayu dengan Minimal Waste (<6%)"
          }
        ]
      },
      renders: {
        heading: "Model Fisik Skala & Mock-Up Realitas",
        description: "Dokumentasi maket studio arsitektur UNTAR dan visualisasi paviliun terpasang di plaza kampus.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
            caption: "Maket Fisik Skala 1:20: Detail Anyaman Rusuk Kayu dan Penetrasi Bayangan Akustik"
          }
        ]
      }
    }
  }
];

// ==========================================
// 2. WEB AUDIO SYNTHESIZER (TECHNICAL AUDIO FX)
// ==========================================
let audioContext = null;
let soundEnabled = false;

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playCadSound(type = "tick") {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);

    const now = audioContext.currentTime;

    if (type === "tick") {
      // Subtle precision tick
      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.03);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === "blip") {
      // High-tech CAD snap sound
      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(1760, now + 0.04);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Audio context fallback safe
  }
}

window.toggleSound = function() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    initAudio();
    playCadSound("blip");
    showToast("CAD Audio Feedback: AKTIF");
  } else {
    showToast("CAD Audio Feedback: NON-AKTIF");
  }
  const btn = document.getElementById("sound-toggle-btn");
  if (btn) {
    btn.innerHTML = soundEnabled 
      ? `<span class="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>AUDIO: ON`
      : `<span class="w-2 h-2 rounded-full bg-zinc-600 mr-1.5"></span>AUDIO: OFF`;
  }
};

// ==========================================
// 3. BLUEPRINT THEME INVERSION ENGINE
// ==========================================
window.toggleBlueprintMode = function() {
  playCadSound("blip");
  document.body.classList.toggle("blueprint-mode");
  const isBlueprint = document.body.classList.contains("blueprint-mode");
  
  const modeText = document.getElementById("hud-mode-text");
  if (modeText) {
    modeText.innerText = isBlueprint ? "MODE: CYAN DRAFTING BLUEPRINT" : "MODE: CAD OBSIDIAN SLATE";
  }

  showToast(isBlueprint ? "Tema beralih: Cyan Drafting Blueprint" : "Tema beralih: Dark Obsidian Slate");
};

// ==========================================
// 4. LIVE CAD COORDINATES HUD TRACKER
// ==========================================
function setupCadHud() {
  const hudElement = document.getElementById("cad-coords-live");
  if (!hudElement) return;

  let lastX = 0;
  let lastY = 0;

  window.addEventListener("mousemove", (e) => {
    // Calculate simulated architectural meters based on viewport
    const archX = ((e.clientX / window.innerWidth) * 120 - 60).toFixed(2);
    const archY = (((window.innerHeight - e.clientY) / window.innerHeight) * 80).toFixed(2);
    const azimuth = (Math.atan2(e.clientX - window.innerWidth/2, e.clientY - window.innerHeight/2) * (180 / Math.PI) + 180).toFixed(1);

    hudElement.innerHTML = `X: <span class="text-sky-400">${archX > 0 ? '+' : ''}${archX}m</span> &nbsp; Y: <span class="text-sky-400">+${archY}m</span> &nbsp; AZM: <span class="text-amber-400">${azimuth}°</span> &nbsp; SCALE: <span class="text-white">1:100</span>`;
  });
}

// ==========================================
// 5. BIOPHILIC & SUN-PATH SIMULATOR (GUNSAR HUB)
// ==========================================
function setupBiophilicSimulator() {
  const sunSlider = document.getElementById("sim-sun-hour");
  const canopySlider = document.getElementById("sim-canopy-density");
  const windSlider = document.getElementById("sim-wind-speed");

  if (!sunSlider || !canopySlider || !windSlider) return;

  function recalculateSimulation() {
    playCadSound("tick");

    const hour = parseFloat(sunSlider.value);
    const canopy = parseFloat(canopySlider.value);
    const wind = parseFloat(windSlider.value);

    // Update labels
    const hourFormatted = `${Math.floor(hour).toString().padStart(2, '0')}:${(Math.round((hour % 1) * 60)).toString().padStart(2, '0')} WIB`;
    document.getElementById("sim-sun-label").innerText = hourFormatted;
    document.getElementById("sim-canopy-label").innerText = `${canopy}%`;
    document.getElementById("sim-wind-label").innerText = `${wind.toFixed(1)} m/s`;

    // Calculate solar elevation angle (Peak at 12:00)
    // Range approx 25° at 08:00 to 86° at 12:00 to 20° at 17:00
    const hoursFromNoon = Math.abs(hour - 12);
    const solarElevation = Math.max(15, 88 - (hoursFromNoon * 14.5));

    // Base urban ambient temperature in Central Jakarta
    let baseUrbanTemp = 31.0 + (5.5 * Math.sin((hour - 8) / 9 * Math.PI));
    if (baseUrbanTemp < 28) baseUrbanTemp = 28;

    // Direct solar insolation (W/m2)
    const baseInsolation = Math.max(80, Math.sin((solarElevation * Math.PI) / 180) * 980);
    const actualInsolation = baseInsolation * (1 - (canopy * 0.0075));

    // Biophilic thermal reduction (Placemaking formula from Steven Nata's thesis)
    const canopyCooling = (canopy / 100) * 3.4; // up to 3.4°C cooling
    const windCooling = (wind / 5) * 1.5;       // up to 1.5°C cooling
    const totalReduction = canopyCooling + windCooling;

    const microclimateTemp = (baseUrbanTemp - totalReduction).toFixed(1);
    const comfortStatus = microclimateTemp <= 28.5 ? "Sangat Nyaman (Biofilik Sejuk)" : microclimateTemp <= 31 ? "Zona Nyaman Termal Tropis" : "Beban Panas Sedang";

    // Update UI Stats
    document.getElementById("sim-res-urban").innerText = `${baseUrbanTemp.toFixed(1)}°C`;
    document.getElementById("sim-res-micro").innerText = `${microclimateTemp}°C`;
    document.getElementById("sim-res-delta").innerText = `-${totalReduction.toFixed(1)}°C`;
    document.getElementById("sim-res-lux").innerText = `${Math.round(actualInsolation)} W/m²`;
    document.getElementById("sim-res-status").innerText = comfortStatus;

    // Update Reactive SVG Sun & Shadow Diagram
    updateSimulationSvg(solarElevation, hour, canopy, totalReduction);
  }

  function updateSimulationSvg(elevation, hour, canopy, delta) {
    const sunOrb = document.getElementById("svg-sun-orb");
    const shadowPolygon = document.getElementById("svg-shadow");
    const canopyMesh = document.getElementById("svg-canopy-layer");

    if (!sunOrb || !shadowPolygon || !canopyMesh) return;

    // Sun arc trajectory
    const progress = (hour - 8) / 9; // 0 to 1
    const sunX = 50 + progress * 260; // 50 to 310
    const sunY = 160 - Math.sin(progress * Math.PI) * 120; // Arc height

    sunOrb.setAttribute("cx", sunX);
    sunOrb.setAttribute("cy", sunY);

    // Shadow calculation
    const buildingHeight = 70;
    const shadowLength = (buildingHeight / Math.tan((elevation * Math.PI) / 180)) * (hour < 12 ? -1 : 1);
    const shadowEndX = Math.min(340, Math.max(20, 180 + shadowLength));

    shadowPolygon.setAttribute("points", `140,160 220,160 ${shadowEndX},160`);
    shadowPolygon.setAttribute("opacity", (0.2 + (canopy / 100) * 0.4).toFixed(2));

    // Canopy opacity
    canopyMesh.setAttribute("opacity", (canopy / 100).toFixed(2));
  }

  sunSlider.addEventListener("input", recalculateSimulation);
  canopySlider.addEventListener("input", recalculateSimulation);
  windSlider.addEventListener("input", recalculateSimulation);

  // Initial trigger
  recalculateSimulation();
}

// ==========================================
// 6. RENDER PROJECT GRID DENGAN KOP GAMBAR
// ==========================================
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map((project, index) => {
    return `
      <article 
        class="project-card group relative bg-zinc-950/90 border border-zinc-800 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer corner-marks"
        onclick="openProjectModal('${project.id}')"
        tabindex="0"
        role="button"
        aria-label="Buka gambar kerja dan studi kasus ${project.title}"
        onkeydown="if(event.key==='Enter'||event.key===' ') { openProjectModal('${project.id}'); event.preventDefault(); }"
        onmouseenter="playCadSound('tick')"
      >
        <!-- Top CAD Title Strip (Header Gambar Kerja) -->
        <div class="px-3 py-1.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between font-mono text-[11px] text-zinc-400">
          <div class="flex items-center space-x-2">
            <span class="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></span>
            <span class="text-white font-bold">SHEET: ${project.sheetNo}</span>
            <span class="text-zinc-600">|</span>
            <span>SCALE ${project.scale}</span>
          </div>
          <span class="text-sky-400 uppercase text-[10px] tracking-wider">${project.year}</span>
        </div>

        <!-- Image Container with Scanline effect -->
        <div class="relative w-full h-64 sm:h-72 overflow-hidden bg-black border-b border-zinc-800/80">
          <div class="scanline"></div>
          <img 
            src="${project.heroImage}" 
            alt="Proyek Arsitektur: ${project.title} - ${project.subtitle}" 
            class="project-thumb w-full h-full object-cover transition-transform duration-700 ease-out brightness-90 group-hover:brightness-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity"></div>
          
          <!-- Bottom Badges on Image -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span class="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase bg-zinc-900/95 text-sky-400 border border-sky-400/40 rounded backdrop-blur">
              ${project.categoryLabel}
            </span>
            <span class="text-[11px] font-mono text-zinc-300 bg-black/80 px-2 py-0.5 rounded border border-zinc-700">
              ${project.location.split(',')[0]}
            </span>
          </div>
        </div>

        <!-- Technical Dimension Bar -->
        <div class="px-6 pt-3">
          <div class="dimension-line">
            <span>◄ DIM: ${(30 + index * 12).toFixed(1)}m ►</span>
            <span>LEVEL ±0.00</span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-6 pt-3 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
              ${project.title}
            </h3>
            <p class="text-xs font-mono text-sky-400 tracking-wide mb-3">
              ${project.subtitle}
            </p>
            <p class="text-zinc-300 text-sm leading-relaxed line-clamp-3 mb-4">
              ${project.summary}
            </p>
          </div>

          <!-- Bottom Technical Spec Block (Mini Kop Gambar) -->
          <div class="pt-4 border-t border-zinc-800/80 space-y-3">
            <div class="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div class="p-1.5 bg-zinc-900/60 border border-zinc-800 rounded">
                <span class="text-zinc-500 block text-[9px] uppercase">PARAMETER UTAMA</span>
                <span class="text-white font-bold">${project.stats[0].label}: ${project.stats[0].value}</span>
              </div>
              <div class="p-1.5 bg-zinc-900/60 border border-zinc-800 rounded">
                <span class="text-zinc-500 block text-[9px] uppercase">KINERJA DESAIN</span>
                <span class="text-amber-400 font-bold">${project.stats[3].label}: ${project.stats[3].value}</span>
              </div>
            </div>

            <div class="flex items-center justify-between text-xs font-mono pt-1">
              <span class="text-zinc-400 flex items-center">
                <svg class="w-3.5 h-3.5 mr-1 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                Inspeksi Gambar CAD
              </span>
              <span class="text-sky-400 group-hover:translate-x-1 transition-transform inline-flex items-center font-bold">
                Buka Lembar Detail &rarr;
              </span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Setup Category Filter Buttons
function setupFilterButtons() {
  const buttons = document.querySelectorAll("[data-filter]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      playCadSound("blip");
      buttons.forEach(b => {
        b.classList.remove("bg-sky-500", "text-black", "border-sky-400", "font-semibold");
        b.classList.add("bg-zinc-900/80", "text-zinc-300", "border-zinc-700");
      });
      btn.classList.remove("bg-zinc-900/80", "text-zinc-300", "border-zinc-700");
      btn.classList.add("bg-sky-500", "text-black", "border-sky-400", "font-semibold");

      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// ==========================================
// 7. MODAL DEEP-DIVE DENGAN INSPEKTOR CAD
// ==========================================
let currentActiveProjectId = null;
let currentActiveTab = "overview";

window.openProjectModal = function(projectId) {
  playCadSound("blip");
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  currentActiveProjectId = projectId;
  currentActiveTab = "overview";

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  renderModalContent(project);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) closeBtn.focus();
  }, 50);
};

window.closeProjectModal = function() {
  playCadSound("tick");
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
  currentActiveProjectId = null;
};

window.switchModalTab = function(tabKey) {
  playCadSound("tick");
  currentActiveTab = tabKey;
  const project = projectsData.find(p => p.id === currentActiveProjectId);
  if (!project) return;

  const tabBtns = document.querySelectorAll(".modal-tab-btn");
  tabBtns.forEach(b => {
    if (b.getAttribute("data-tab") === tabKey) {
      b.classList.add("text-sky-400", "border-b-2", "border-sky-400", "bg-zinc-900/80");
      b.classList.remove("text-zinc-400", "border-transparent");
    } else {
      b.classList.remove("text-sky-400", "border-b-2", "border-sky-400", "bg-zinc-900/80");
      b.classList.add("text-zinc-400", "border-transparent");
    }
  });

  const pane = document.getElementById("modal-tab-content");
  if (!pane) return;

  pane.innerHTML = renderTabBody(project, tabKey);
};

function renderModalContent(project) {
  const container = document.getElementById("modal-container");
  if (!container) return;

  container.innerHTML = `
    <!-- Top Architectural Title Block (Kop Gambar Header) -->
    <div class="px-6 py-3 border-b border-zinc-800 flex flex-wrap items-center justify-between bg-zinc-950/95 sticky top-0 z-20 font-mono text-xs">
      <div class="flex items-center space-x-3">
        <span class="px-2.5 py-1 bg-sky-950 text-sky-400 border border-sky-600 rounded font-bold">
          SHEET ${project.sheetNo}
        </span>
        <span class="text-zinc-400 hidden sm:inline">PROYEK: ${project.title}</span>
        <span class="text-zinc-600 hidden sm:inline">|</span>
        <span class="text-amber-400">${project.scale}</span>
      </div>

      <div class="flex items-center space-x-3">
        <button 
          id="modal-close-btn"
          onclick="closeProjectModal()" 
          class="text-zinc-400 hover:text-white hover:bg-zinc-800 px-3 py-1.5 rounded transition-colors text-xs font-mono flex items-center space-x-1 border border-zinc-800"
          aria-label="Tutup jendela (ESC)"
        >
          <span>[ESC] TUTUP</span>
          <svg class="w-4 h-4 ml-1 inline text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] overflow-hidden">
      
      <!-- Workspace 8 Kolom: Tabbed Process Explorer -->
      <div class="lg:col-span-8 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-zinc-800 space-y-6 overflow-y-auto max-h-[82vh]">
        
        <div>
          <span class="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-1">
            // LEMBAR ARSITEKTURAL ${project.sheetNo} • ${project.categoryLabel}
          </span>
          <h2 class="font-display text-2xl md:text-4xl font-bold text-white mb-2">
            ${project.title}
          </h2>
          <p class="font-mono text-sm text-sky-300">
            ${project.subtitle}
          </p>
        </div>

        <!-- Architectural Key Stats Box -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-zinc-900/60 border border-zinc-800 rounded">
          ${project.stats.map(s => `
            <div>
              <span class="block text-[10px] font-mono uppercase text-zinc-400 tracking-wider">${s.label}</span>
              <span class="block text-sm md:text-base font-bold text-white font-mono mt-0.5">${s.value}</span>
              <span class="block text-[10px] font-mono text-sky-400 mt-0.5">${s.unit}</span>
            </div>
          `).join('')}
        </div>

        <!-- Technical Callout Highlights -->
        ${project.technicalCallouts ? `
          <div class="p-3 bg-zinc-900/40 border-l-2 border-amber-400 rounded-r text-xs font-mono space-y-1">
            <span class="text-amber-400 font-bold block uppercase tracking-wider">Anotasi Struktur & Spesifikasi Utama:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              ${project.technicalCallouts.map(c => `
                <div class="p-2 bg-black/50 border border-zinc-800 rounded">
                  <span class="text-sky-400 font-bold">[${c.id}] ${c.label}:</span>
                  <p class="text-zinc-300 text-[11px] font-sans mt-0.5">${c.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Process Tabs Header -->
        <div class="border-b border-zinc-800 flex flex-wrap gap-1">
          <button 
            data-tab="overview" 
            onclick="switchModalTab('overview')"
            class="modal-tab-btn px-4 py-2.5 font-mono text-xs text-sky-400 border-b-2 border-sky-400 bg-zinc-900/80 transition-colors"
          >
            01. Konsep & Analisis
          </button>
          <button 
            data-tab="diagrams" 
            onclick="switchModalTab('diagrams')"
            class="modal-tab-btn px-4 py-2.5 font-mono text-xs text-zinc-400 border-b-2 border-transparent hover:text-zinc-200 transition-colors"
          >
            02. Diagram Arsitektur
          </button>
          <button 
            data-tab="drawings" 
            onclick="switchModalTab('drawings')"
            class="modal-tab-btn px-4 py-2.5 font-mono text-xs text-zinc-400 border-b-2 border-transparent hover:text-zinc-200 transition-colors"
          >
            03. Gambar Denah & Potongan
          </button>
          <button 
            data-tab="renders" 
            onclick="switchModalTab('renders')"
            class="modal-tab-btn px-4 py-2.5 font-mono text-xs text-zinc-400 border-b-2 border-transparent hover:text-zinc-200 transition-colors"
          >
            04. Render & Maket Fisik
          </button>
        </div>

        <!-- Dynamic Content Pane -->
        <div id="modal-tab-content" class="pt-2">
          ${renderTabBody(project, "overview")}
        </div>
      </div>

      <!-- Right Sidebar: Recruiter Info, Role Attribution & Software Specs (4 Kolom) -->
      <div class="lg:col-span-4 p-6 md:p-8 bg-zinc-950/80 space-y-6 overflow-y-auto max-h-[82vh] font-mono">
        
        <!-- Recruiter Fast-Facts Callout -->
        <div class="border border-zinc-800 p-4 rounded bg-zinc-900/40">
          <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center">
            <span class="w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse"></span>
            Recruiter Fast-Facts
          </h4>
          <p class="text-xs text-zinc-300 leading-relaxed font-sans">
            Membuktikan keahlian Steven Nata dalam menyelesaikan permasalahan spasial perkotaan yang nyata, integrasi placemaking dengan sains iklim terukur, serta kapabilitas langsung masuk tim produksi gambar BIM Revit.
          </p>
        </div>

        <!-- Technical Title Block Data (Kop Gambar Formal) -->
        <div class="border border-zinc-800 bg-black/60 rounded p-3 text-xs space-y-2">
          <div class="border-b border-zinc-800 pb-1 text-sky-400 font-bold uppercase text-[10px]">
            DATA DOKUMEN PROYEK (KOP GAMBAR)
          </div>
          <div class="space-y-1 text-[11px]">
            <div class="flex justify-between"><span class="text-zinc-500">NOMOR LEMBAR:</span><span class="text-white">${project.sheetNo}</span></div>
            <div class="flex justify-between"><span class="text-zinc-500">SKALA:</span><span class="text-white">${project.scale} @ A1</span></div>
            <div class="flex justify-between"><span class="text-zinc-500">LOKASI:</span><span class="text-white">${project.location.split(',')[0]}</span></div>
            <div class="flex justify-between"><span class="text-zinc-500">TAHUN DIBUAT:</span><span class="text-white">${project.year}</span></div>
          </div>
        </div>

        <!-- Authorship & Role -->
        <div class="space-y-3">
          <h4 class="text-xs uppercase tracking-wider text-zinc-400">Atribusi & Peran Desain</h4>
          <div class="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded space-y-2 text-xs">
            <div>
              <span class="text-[11px] text-zinc-500 block">Peran Spesifik:</span>
              <span class="text-sm font-semibold text-white font-sans">${project.role}</span>
            </div>
            <div>
              <span class="text-[11px] text-zinc-500 block">Dosen Pembimbing / Konteks:</span>
              <span class="text-xs text-zinc-300 font-sans">${project.advisor}</span>
            </div>
          </div>
        </div>

        <!-- Software Stack Used -->
        <div class="space-y-3">
          <h4 class="text-xs uppercase tracking-wider text-zinc-400">Software & Tools Digunakan</h4>
          <div class="flex flex-wrap gap-2">
            ${project.software.map(tool => `
              <span class="px-2.5 py-1 text-xs bg-zinc-900 text-sky-300 border border-zinc-800 rounded flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5"></span>
                ${tool}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Direct Contact Action -->
        <div class="pt-4 border-t border-zinc-800 space-y-3">
          <h4 class="text-xs uppercase tracking-wider text-zinc-400">Tertarik Mengundang Wawancara?</h4>
          <a 
            href="https://www.linkedin.com/in/steven-nata-aa8a50403/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-black font-semibold text-xs uppercase tracking-wider rounded text-center block transition-colors"
          >
            Kunjungi LinkedIn Steven &rarr;
          </a>
          <button 
            onclick="copyEmailToClipboard()"
            class="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs uppercase tracking-wider rounded transition-colors text-center block"
          >
            Salin Alamat Email
          </button>
        </div>

      </div>
    </div>
  `;
}

function renderTabBody(project, tabKey) {
  const tab = project.tabs[tabKey];
  if (!tab) return "";

  if (tabKey === "overview") {
    return `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-white font-display">${tab.heading}</h3>
        ${tab.paragraphs.map(p => `
          <p class="text-zinc-300 text-sm leading-relaxed font-sans">${p}</p>
        `).join('')}

        <div class="mt-6 p-4 bg-zinc-900/40 border-l-2 border-sky-400 rounded-r">
          <h4 class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Poin Inovasi Desain:</h4>
          <ul class="space-y-2">
            ${tab.highlights.map(h => `
              <li class="text-xs text-zinc-300 flex items-start font-sans">
                <span class="text-sky-400 mr-2 font-mono">▹</span>
                ${h}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Gallery tabs (diagrams, drawings, renders)
  return `
    <div class="space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white font-display mb-1">${tab.heading}</h3>
        <p class="text-xs text-zinc-400 font-mono">${tab.description}</p>
      </div>

      <div class="space-y-6 pt-2">
        ${tab.images.map((img, i) => `
          <figure class="border border-zinc-800 bg-zinc-900/50 rounded overflow-hidden">
            <div class="relative max-h-[500px] overflow-hidden bg-black flex items-center justify-center crosshair-target group">
              <img 
                src="${img.url}" 
                alt="${img.caption}" 
                class="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div class="absolute top-2 right-2 px-2 py-0.5 bg-black/80 font-mono text-[10px] text-sky-400 border border-zinc-700 pointer-events-none">
                GRID ZOOM: 100%
              </div>
            </div>
            <figcaption class="p-3 border-t border-zinc-800/80 bg-zinc-950 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span><strong class="text-sky-400 mr-1.5">[FIG.${String(i + 1).padStart(2, '0')}]</strong> ${img.caption}</span>
              <a href="${img.url}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline text-[11px] whitespace-nowrap ml-2">Lihat Resolusi Penuh ↗</a>
            </figcaption>
          </figure>
        `).join('')}
      </div>
    </div>
  `;
}

function setupModalEvents() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
}

// ==========================================
// 8. RECRUITER ACTIONS (COPY EMAIL & CV DOWNLOAD)
// ==========================================
function setupRecruiterActions() {
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyEmailToClipboard);
  }

  const downloadCvBtn = document.getElementById("download-cv-btn");
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", (e) => {
      e.preventDefault();
      triggerPortfolioDownload();
    });
  }
}

window.copyEmailToClipboard = function() {
  playCadSound("blip");
  const email = "stevennata.arch@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email berhasil disalin: " + email);
  }).catch(() => {
    showToast("Email: " + email);
  });
};

function triggerPortfolioDownload() {
  playCadSound("blip");
  showToast("Mengunduh CV & Portfolio Steven Nata, S.Ars (UNTAR)...");
  
  const content = `=====================================================
CURRICULUM VITAE & SELECTED ARCHITECTURAL WORKS
STEVEN NATA, S.Ars
Jurusan Arsitektur, Fakultas Teknik, Universitas Tarumanagara (UNTAR)
NIM: 315190059 | Lulusan 2024
Jakarta, Indonesia | stevennata.arch@gmail.com | 315190059@stu.untar.ac.id
LinkedIn: https://www.linkedin.com/in/steven-nata-aa8a50403/
Portfolio Live: https://axelallisonofficial08.github.io/TestPort/
=====================================================

PROFIL SINGKAT:
Sarjana Arsitektur dari Universitas Tarumanagara (UNTAR) dengan fokus perancangan
pada Placemaking Kawasan Perkotaan, Desain Biofilik (Biophilic Design), 
Building Information Modeling (BIM Revit LOD 350), dan simulasi kenyamanan termal iklim tropis.
Penulis artikel ilmiah arsitektur yang diterbitkan dalam Jurnal STUPA (2024).

PENDIDIKAN:
- S1 Arsitektur - Universitas Tarumanagara, Jakarta (2019 - 2024)
  Gelar: Sarjana Arsitektur (S.Ars)
  Fakultas Teknik, Program Studi Sarjana Arsitektur
  Judul Tugas Akhir:
  "GUNSAR HUB: Titik Temu Komunitas untuk Menghidupkan Kawasan Gunung Sahari Melalui Placemaking"
  Pembimbing: Agnatasya Listianti Mustaram, S.T., M.Sc.

PUBLIKASI ILMIAH RESMI:
- "Penerapan Desain Biofilik Pada Perancangan Ruang Publik di Kawasan Gunung Sahari"
  Jurnal Sains, Teknologi, Urban, Perancangan, Arsitektur (STUPA), Vol. 6 No. 2, Oktober 2024.

KOMPETENSI SOFTWARE:
- BIM & CAD: Autodesk Revit (BIM LOD 350), AutoCAD, ArchiCAD
- 3D Modeling & Parametrik: Rhino 3D, Grasshopper, SketchUp Pro
- Render & Simulasi Lingkungan: Enscape, Lumion 12, V-Ray, Ladybug / Honeybee (Solar & Daylight)
- Post-Production: Adobe Photoshop, Illustrator, InDesign

PROYEK UNGGULAN:
1. GUNSAR HUB - Tugas Akhir & Publikasi Ilmiah Kawasan Gunung Sahari Jakarta (Revit & Rhino)
2. Rumah Lentera Tropis - Passive Cooling Courtyard Residence BSD City
3. Ruang Temu Komunal Pasar Baru - Juara 2 Sayembara Nasional IAI 2023
4. Verdant Spire - High-Rise Commercial Office TB Simatupang (Greenship Focus)
5. The Biomorphic Timber Pavilion - Computational & CNC Fabrication UNTAR Studio

Kontak Langsung:
Email: stevennata.arch@gmail.com / 315190059@stu.untar.ac.id
LinkedIn: https://www.linkedin.com/in/steven-nata-aa8a50403/
GitHub: https://github.com/axelallisonofficial08/TestPort
=====================================================`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CV_Steven_Nata_Arsitektur_UNTAR.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-5 right-5 z-50 bg-sky-500 text-black px-4 py-3 rounded shadow-2xl font-mono text-xs flex items-center space-x-2 border border-sky-300 transform transition-all duration-300 translate-y-20 opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 mr-1 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3500);
}

// ==========================================
// 9. DOM INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  setupFilterButtons();
  setupModalEvents();
  setupRecruiterActions();
  setupKeyboardShortcuts();
  setupCadHud();
  setupBiophilicSimulator();
});
