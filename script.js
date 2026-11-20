/**
 * Portofolio Arsitektur - Budi Santoso (Universitas Tarumanagara)
 * Dark Blueprint & Brutalist Interactive Architecture Engine
 */

const projectsData = [
  {
    id: "proj-1",
    title: "The Urban Living Monolith",
    subtitle: "TOD Transit-Oriented Development & Vertical Housing",
    category: "akademik",
    categoryLabel: "Tugas Akhir UNTAR",
    year: "2024",
    location: "Kawasan TOD Manggarai, Jakarta Selatan",
    role: "Desainer Utama (Individual Thesis)",
    advisor: "Ir. Rudy Trisno, M.T. / Jurusan Arsitektur UNTAR",
    software: ["Autodesk Revit BIM", "Rhino 3D", "Enscape", "AutoCAD", "Photoshop"],
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    summary: "Proyek Tugas Akhir Sarjana Arsitektur UNTAR yang merespons kompleksitas transit hub Manggarai. Mengintegrasikan hunian vertikal terjangkau berkepadatan tinggi dengan stasiun sentral kereta komuter melalui 'volumetric porous carving' untuk ventilasi alami maksimal di iklim mikro Jakarta.",
    stats: [
      { label: "GFA (Luas Lantai)", value: "48.500 m²" },
      { label: "Ketinggian", value: "32 Lantai / 118 m" },
      { label: "Efisiensi Energi", value: "-34% Cooling Load" },
      { label: "Kapasitas Hunian", value: "420 Unit Apartemen" }
    ],
    tabs: {
      overview: {
        heading: "Konsep & Tantangan Perancangan",
        paragraphs: [
          "Stasiun Manggarai merupakan simpul transit tersibuk di Jabodetabek dengan lalu lintas lebih dari 150.000 penumpang per hari. Tantangan utama perancangan adalah menghubungkan sirkulasi pejalan kaki komuter dengan hunian vertikal tanpa mengorbankan privasi residensial.",
          "Massa bangunan dipecah menjadi tiga menara ramping yang dihubungkan oleh 'Sky Concourse' publik pada lantai 4. Strategi orientasi massa diagonal meminimalkan radiasi matahari fasad barat-timur sekaligus menangkap koridor angin alami dari arah utara."
        ],
        highlights: [
          "Integrasi langsung jembatan layang pejalan kaki ke concourse stasiun LRT & KRL.",
          "Podium terbuka 4 lantai sebagai ruang komunal publik dan UMKM lokal.",
          "Penerapan fasad kinetic louvers adaptif terhadap pergerakan matahari Jakarta."
        ]
      },
      diagrams: {
        heading: "Analisis Tapak, Sirkulasi & Diagram Bentuk",
        description: "Metodologi perancangan berbasis data iklim dan pemetaan kepadatan sirkulasi transit publik.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            caption: "Diagram Transformasi Massa: Porous Volumetric Carving & Koridor Angin Vertikal"
          },
          {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            caption: "Analisis Radiasi Matahari & Pemetaan Fasad Shading dengan Honeybee/Ladybug"
          }
        ]
      },
      drawings: {
        heading: "Gambar Kerja, Denah & Potongan Teknis",
        description: "Dokumentasi gambar arsitektur standar BIM LOD 350 dengan penekanan pada integrasi struktur diagrid dan jalur utilitas MEP.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            caption: "Denah Lantai Tipikal Hunian Vertikal & Core Lift Efisiensi 82%"
          },
          {
            url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
            caption: "Potongan Melintang Utama memperlihatkan koneksi stasiun ke sky lobby publik"
          }
        ]
      },
      renders: {
        heading: "Visualisasi 3D Fotorealistik & Studi Material",
        description: "Render atmosferik waktu senja dan studi material beton ekspos, kaca hemat energi low-E, dan aluminium perforated panels.",
        images: [
          {
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
            caption: "Perspektif Eksterior Senja: Siluet Menara dan Podium Terbuka Manggarai"
          },
          {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            caption: "Interior Atrium Sky Concourse dengan pencahayaan alami difus"
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
    role: "Lead Architectural Designer (Project Freelance/Studio)",
    advisor: "Kolaborasi Studio Praktek Mandiri",
    software: ["AutoCAD", "SketchUp", "Lumion 12", "Photoshop", "Climate Consultant"],
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    summary: "Hunian tapak 2 lantai yang mengeksplorasi material lokal bata terakota berongga sebagai 'second skin'. Dirancang untuk meminimalkan ketergantungan pada pendingin udara buatan (AC) hingga 65% melalui courtyard dalam dan efek cerobong udara (stack effect).",
    stats: [
      { label: "Luas Lahan", value: "240 m²" },
      { label: "Luas Bangunan", value: "285 m²" },
      { label: "Konsumsi AC", value: "Turun 65%" },
      { label: "Tipe Ruang", value: "Courtyard Inner Garden" }
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
    role: "Team Leader / Concept & 3D Visualization",
    advisor: "Sayembara Terbuka Ikatan Arsitek Indonesia (IAI)",
    software: ["Rhino 3D", "Grasshopper", "Twinmotion", "AutoCAD", "Adobe InDesign"],
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    summary: "Proposal sayembara revitalisasi koridor bersejarah Pasar Baru Jakarta yang memenangkan Juara 2 Nasional. Mempertahankan fasad cagar budaya kolonial Art Deco sembari menyisipkan kanopi kanvas tarik parametrik untuk menaungi pejalan kaki dan ruang seni seniman lokal.",
    stats: [
      { label: "Peringkat", value: "Juara 2 / 1st Runner Up" },
      { label: "Panjang Koridor", value: "450 Meter" },
      { label: "Zonasi Pejalan Kaki", value: "100% Car-Free Zone" },
      { label: "Konservasi Cagar Budaya", value: "18 Bangunan Bersejarah" }
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
    role: "Junior Architect Intern (Design & BIM Modeling)",
    advisor: "Kolaborasi Tim Sayembara Arsitektur Komersial",
    software: ["Autodesk Revit BIM", "Ladybug Analysis", "V-Ray 6", "Rhino 3D"],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    summary: "Menara perkantoran komersial 28 lantai bersertifikasi Greenship Platinum yang memadukan ruang kerja fleksibel era hybrid dengan teras kantilever biophilic bertingkat di setiap interval 4 lantai.",
    stats: [
      { label: "GFA", value: "36.200 m²" },
      { label: "Target Green Building", value: "Greenship Platinum" },
      { label: "Area Hijau Vertikal", value: "4.200 m²" },
      { label: "Struktur", value: "Composite Steel & RC Core" }
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
    role: "Computational Design & Digital Fabrication Lead",
    advisor: "Studio Perancangan Komputasional Arsitektur UNTAR",
    software: ["Rhino 7", "Grasshopper", "Karamba3D FEA", "CNC Mill Scripting", "Laser Cutter"],
    heroImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    summary: "Eksplorasi struktur cangkang kayu lengkung ganda (gridshell) menggunakan algoritma komputasional Grasshopper. Setiap elemen sambungan kayu lapis interlocking dipotong menggunakan mesin CNC tanpa baut logam, diuji dengan model fisik skala 1:10 dan 1:1 mockup.",
    stats: [
      { label: "Bentang Struktur", value: "9.2 Meter" },
      { label: "Jumlah Komponen Unik", value: "384 Keping Kayu" },
      { label: "Metode Sambungan", value: "Zero-Bolt Friction Interlock" },
      { label: "Toleransi Presisi", value: "±0.5 mm" }
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

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  setupFilterButtons();
  setupModalEvents();
  setupRecruiterActions();
  setupKeyboardShortcuts();
});

// Render Project Grid
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map((project, index) => {
    return `
      <article 
        class="project-card group relative bg-zinc-950/80 border border-zinc-800 hover:border-sky-500/60 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
        onclick="openProjectModal('${project.id}')"
        tabindex="0"
        role="button"
        aria-label="Lihat detail proyek ${project.title}"
        onkeydown="if(event.key==='Enter'||event.key===' ') { openProjectModal('${project.id}'); event.preventDefault(); }"
      >
        <!-- Technical Crosshair Marks -->
        <span class="absolute top-2 left-2 text-zinc-600 font-mono text-[10px] pointer-events-none select-none">+[${String(index + 1).padStart(2, '0')}]</span>
        <span class="absolute top-2 right-2 text-zinc-600 font-mono text-[10px] pointer-events-none select-none">${project.year}</span>

        <!-- Image Container -->
        <div class="relative w-full h-64 md:h-72 overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
          <img 
            src="${project.heroImage}" 
            alt="Proyek Arsitektur: ${project.title} - ${project.subtitle}" 
            class="project-thumb w-full h-full object-cover transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
          
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span class="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase bg-zinc-900/90 text-sky-400 border border-sky-500/30 rounded backdrop-blur-sm">
              ${project.categoryLabel}
            </span>
            <span class="text-xs font-mono text-zinc-400 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
              ${project.location.split(',')[0]}
            </span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
              ${project.title}
            </h3>
            <p class="text-xs font-mono text-zinc-400 tracking-wide uppercase mb-3">
              ${project.subtitle}
            </p>
            <p class="text-zinc-300 text-sm leading-relaxed line-clamp-3 mb-4">
              ${project.summary}
            </p>
          </div>

          <!-- Bottom Metadata & Tech Stack -->
          <div class="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap gap-1.5">
              ${project.software.slice(0, 3).map(tool => `
                <span class="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
                  ${tool}
                </span>
              `).join('')}
              ${project.software.length > 3 ? `
                <span class="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
                  +${project.software.length - 3}
                </span>
              ` : ''}
            </div>

            <span class="inline-flex items-center text-xs font-mono text-sky-400 group-hover:translate-x-1 transition-transform">
              Buka Studi Kasus &rarr;
            </span>
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

// Global active modal project tracking
let currentActiveProjectId = null;
let currentActiveTab = "overview";

// Open Project Modal
window.openProjectModal = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  currentActiveProjectId = projectId;
  currentActiveTab = "overview";

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  renderModalContent(project);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden"; // lock scroll

  // Focus trap to close button
  setTimeout(() => {
    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) closeBtn.focus();
  }, 50);
};

// Close Project Modal
window.closeProjectModal = function() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
  currentActiveProjectId = null;
};

// Switch Modal Tab
window.switchModalTab = function(tabKey) {
  currentActiveTab = tabKey;
  const project = projectsData.find(p => p.id === currentActiveProjectId);
  if (!project) return;

  // Update Tab buttons appearance
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

  // Update dynamic tab content pane
  const pane = document.getElementById("modal-tab-content");
  if (!pane) return;

  pane.innerHTML = renderTabBody(project, tabKey);
};

// Render Full Modal Body
function renderModalContent(project) {
  const container = document.getElementById("modal-container");
  if (!container) return;

  container.innerHTML = `
    <!-- Modal Header Toolbar -->
    <div class="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/90 backdrop-blur sticky top-0 z-20">
      <div class="flex items-center space-x-3">
        <span class="font-mono text-xs uppercase px-2.5 py-1 bg-sky-950/80 text-sky-400 border border-sky-800/80 rounded">
          ${project.categoryLabel}
        </span>
        <span class="text-zinc-500 font-mono text-xs">/</span>
        <span class="text-xs font-mono text-zinc-400">${project.year} • ${project.location}</span>
      </div>

      <button 
        id="modal-close-btn"
        onclick="closeProjectModal()" 
        class="text-zinc-400 hover:text-white hover:bg-zinc-800 p-2 rounded transition-colors text-sm font-mono flex items-center space-x-1"
        aria-label="Tutup jendela detail proyek (ESC)"
      >
        <span>[ESC]</span>
        <svg class="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Modal Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
      
      <!-- Left / Top: Visual & Deep-Dive Workspace (8 Cols) -->
      <div class="lg:col-span-8 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-zinc-800 space-y-6 overflow-y-auto max-h-[80vh]">
        <!-- Title & Subtitle -->
        <div>
          <h2 class="font-display text-2xl md:text-4xl font-bold text-white mb-2">
            ${project.title}
          </h2>
          <p class="font-mono text-sm text-sky-400 tracking-wide">
            ${project.subtitle}
          </p>
        </div>

        <!-- Architectural Key Stats Box -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-zinc-900/60 border border-zinc-800 rounded">
          ${project.stats.map(s => `
            <div>
              <span class="block text-[10px] font-mono uppercase text-zinc-400 tracking-wider">${s.label}</span>
              <span class="block text-sm md:text-base font-bold text-white font-mono mt-0.5">${s.value}</span>
            </div>
          `).join('')}
        </div>

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
        <div id="modal-tab-content" class="pt-2 animate-fade-in">
          ${renderTabBody(project, "overview")}
        </div>
      </div>

      <!-- Right Sidebar: Recruiter Info, Role Attribution & Software Specs (4 Cols) -->
      <div class="lg:col-span-4 p-6 md:p-8 bg-zinc-950/70 space-y-6 overflow-y-auto max-h-[80vh]">
        <!-- Recruiter Quick Summary -->
        <div class="border border-zinc-800 p-4 rounded bg-zinc-900/40">
          <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center">
            <span class="w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse"></span>
            Recruiter Fast-Facts
          </h4>
          <p class="text-xs text-zinc-300 leading-relaxed">
            Proyek ini membuktikan kemampuan Budi Santoso dalam menyelesaikan masalah spasial kompleks, pemahaman regulasi tata ruang Jakarta, serta kecakapan teknis BIM hingga visualisasi tingkat lanjut.
          </p>
        </div>

        <!-- Authorship & Role -->
        <div class="space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-400">Atribusi & Peran Desain</h4>
          <div class="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded space-y-2">
            <div>
              <span class="text-[11px] text-zinc-400 block font-mono">Peran Spesifik:</span>
              <span class="text-sm font-semibold text-white">${project.role}</span>
            </div>
            <div>
              <span class="text-[11px] text-zinc-400 block font-mono">Dosen Pembimbing / Konteks:</span>
              <span class="text-xs text-zinc-300">${project.advisor}</span>
            </div>
          </div>
        </div>

        <!-- Software Stack Used -->
        <div class="space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-400">Software & Tools Digunakan</h4>
          <div class="flex flex-wrap gap-2">
            ${project.software.map(tool => `
              <span class="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-sky-300 border border-zinc-800 rounded flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5"></span>
                ${tool}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Direct Contact Action -->
        <div class="pt-4 border-t border-zinc-800 space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-400">Tertarik Mendiskusikan Proyek Ini?</h4>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Budi%20Santoso,%20saya%20melihat%20portofolio%20arsitektur%20Anda%20proyek%20${encodeURIComponent(project.title)}%20dan%20tertarik%20mengundang%20interview."
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-black font-semibold text-xs font-mono uppercase tracking-wider rounded text-center block transition-colors"
          >
            Chat WhatsApp Recruiter &rarr;
          </a>
          <button 
            onclick="copyEmailToClipboard()"
            class="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-mono uppercase tracking-wider rounded transition-colors text-center block"
          >
            Salin Email Budi
          </button>
        </div>

      </div>
    </div>
  `;
}

// Render Tab Body Content
function renderTabBody(project, tabKey) {
  const tab = project.tabs[tabKey];
  if (!tab) return "";

  if (tabKey === "overview") {
    return `
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-white font-display">${tab.heading}</h3>
        ${tab.paragraphs.map(p => `
          <p class="text-zinc-300 text-sm leading-relaxed">${p}</p>
        `).join('')}

        <div class="mt-6 p-4 bg-zinc-900/40 border-l-2 border-sky-400 rounded-r">
          <h4 class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Poin Inovasi Desain:</h4>
          <ul class="space-y-2">
            ${tab.highlights.map(h => `
              <li class="text-xs text-zinc-300 flex items-start">
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
            <div class="relative max-h-[500px] overflow-hidden bg-black flex items-center justify-center">
              <img 
                src="${img.url}" 
                alt="${img.caption}" 
                class="w-full h-auto object-contain max-h-[500px]"
                loading="lazy"
              />
            </div>
            <figcaption class="p-3 border-t border-zinc-800/80 bg-zinc-950 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span><strong class="text-sky-400 mr-1.5">[FIG.0${i + 1}]</strong> ${img.caption}</span>
              <a href="${img.url}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline text-[11px] whitespace-nowrap ml-2">Lihat Resolusi Penuh ↗</a>
            </figcaption>
          </figure>
        `).join('')}
      </div>
    </div>
  `;
}

// Modal Click Outside & Key Listeners
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

// Recruiter Quick Actions
function setupRecruiterActions() {
  // Email Copy Button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyEmailToClipboard);
  }

  // Resume Download Button
  const downloadCvBtn = document.getElementById("download-cv-btn");
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", (e) => {
      e.preventDefault();
      triggerPortfolioDownload();
    });
  }
}

// Clipboard Action with Feedback Toast
window.copyEmailToClipboard = function() {
  const email = "budi.santoso.arch@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email berhasil disalin: " + email);
  }).catch(() => {
    showToast("Email: " + email);
  });
};

// Simulation of Portfolio PDF Download
function triggerPortfolioDownload() {
  showToast("Mengunduh CV & Portfolio Budi Santoso (UNTAR)...");
  
  // Create a simulated downloadable text/markdown architectural summary
  const content = `=====================================================
CURRICULUM VITAE & SELECTED WORKS
BUDI SANTOSO, S.Ars (Candidate)
Jurusan Arsitektur, Universitas Tarumanagara (UNTAR)
Jakarta, Indonesia | budi.santoso.arch@gmail.com | +62 812 3456 7890
=====================================================

PROFIL SINGKAT:
Mahasiswa tingkat akhir Arsitektur Universitas Tarumanagara dengan fokus kuat pada
desain berkelanjutan (sustainable architecture), pemodelan Building Information 
Modeling (BIM Revit), dan eksplorasi komputasional parametrik. Memiliki rekam jejak
prestasi sayembara nasional IAI dan pengalaman kerja magang komersial.

PENDIDIKAN:
- S1 Arsitektur - Universitas Tarumanagara (2020 - 2024)
  IPK: 3.82 / 4.00
  Penerima Beasiswa Prestasi Akademik UNTAR

KOMPETENSI SOFTWARE:
- BIM & CAD: Autodesk Revit (LOD 350), AutoCAD, ArchiCAD
- 3D Modeling & Parametrik: Rhino 3D, Grasshopper, SketchUp Pro
- Render & Simulasi: Enscape, Lumion, V-Ray, Twinmotion, Ladybug Solar Tools
- Post-Production: Adobe Photoshop, Illustrator, InDesign

PROYEK UNGGULAN:
1. The Urban Living Monolith - Tugas Akhir TOD Manggarai, Jakarta (Revit BIM & Rhino)
2. Rumah Lentera Tropis - Courtyard Residence BSD (Passive Cooling Strategy)
3. Ruang Temu Komunal Pasar Baru - Juara 2 Sayembara Nasional IAI 2023
4. Verdant Spire - High-Rise Commercial Office TB Simatupang (Greenship Focus)
5. The Biomorphic Timber Pavilion - Computational & CNC Fabrication UNTAR Studio

PENGHARGAAN:
- Juara 2 (1st Runner Up) - Sayembara Nasional Revitalisasi Kawasan IAI 2023
- Finalist - Archstorming International Sustainable Competition 2022
- Best Studio Project Exhibition - Pameran Arsitektur UNTAR 2023

Kontak Langsung:
Email: budi.santoso.arch@gmail.com
WhatsApp: +62 812-3456-7890
LinkedIn: linkedin.com/in/budisantoso-untar
GitHub Portfolio: https://github.com/budisantoso-arch
=====================================================`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CV_Budi_Santoso_Arsitektur_UNTAR.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-5 right-5 z-50 bg-sky-500 text-black px-4 py-3 rounded shadow-2xl font-mono text-xs flex items-center space-x-2 border border-sky-300 transform transition-all duration-300 translate-y-20 opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
    <span>${message}</span>
  `;

  // Animate in
  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3500);
}
