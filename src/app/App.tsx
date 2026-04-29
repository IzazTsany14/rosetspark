import { Sparkles, Zap, Heart, Shield, Leaf, Phone, Instagram, MapPin, Mail, User, Download, Eye, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');

      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // Close mobile menu after clicking
            setMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif', scrollBehavior: 'smooth' }}>
      {/* Navigation - Sticky with Logo */}
      <nav className="bg-[#C9184A] text-white py-3 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo di Kiri Atas */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-md overflow-hidden">
              <img 
                src="/images/logo.png" 
                alt="ROSET SPARK Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-base md:text-lg">ROSET SPARK</p>
              <p className="text-[9px] md:text-[10px] text-white/80 uppercase tracking-wide">Functional Sparkling Herbal Drink</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#hero" className="hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg transition">Beranda</a>
            <a href="#tentang" className="hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg transition">Tentang</a>
            <a href="#manfaat" className="hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg transition">Manfaat</a>
            <a href="#video" className="hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg transition">Video</a>
            <a href="#tim" className="hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg transition">Tim</a>
            <a href="#kontak" className="hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg transition">Kontak</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#C9184A] border-t border-white/20 shadow-xl">
            <div className="flex flex-col py-4">
              <a href="#hero" className="px-6 py-3 hover:bg-white/10 transition">Beranda</a>
              <a href="#tentang" className="px-6 py-3 hover:bg-white/10 transition">Tentang</a>
              <a href="#manfaat" className="px-6 py-3 hover:bg-white/10 transition">Manfaat</a>
              <a href="#video" className="px-6 py-3 hover:bg-white/10 transition">Video</a>
              <a href="#tim" className="px-6 py-3 hover:bg-white/10 transition">Tim</a>
              <a href="#kontak" className="px-6 py-3 hover:bg-white/10 transition">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Banner Style */}
      <section id="hero" className="relative bg-gradient-to-br from-[#C9184A] via-[#E0174A] to-[#FF4D6D] text-white py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Banner/Flyer Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <p className="text-lg md:text-2xl font-light tracking-wide drop-shadow-lg">Minuman Herbal Sparkling</p>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}>
                    HEALTHY<br/>ENERGY
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
                    Kesegaran Alami, Fokus Berkreasi
                  </p>
                </div>

                {/* Poin-poin Keunggulan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 py-4 md:py-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#C9184A]" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-white drop-shadow-lg">Meningkatkan Fokus</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#C9184A]" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-white drop-shadow-lg">Antioksidan Tinggi</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#C9184A]" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-white drop-shadow-lg">Tanpa Efek Samping</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#C9184A]" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-white drop-shadow-lg">Herbal Sparkling</p>
                  </div>
                </div>

                {/* Komposisi */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 border-2 border-[#C9184A]/50 shadow-lg">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[#C9184A] font-bold mb-2">Komposisi</p>
                  <p className="text-base md:text-lg font-bold text-gray-900">Rosella • Jahe • Kayu Manis • Pemanis Alami</p>
                </div>

                {/* Harga & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 md:pt-4">
                  <div className="bg-white/95 px-5 py-3 rounded-xl shadow-xl border-2 border-white">
                    <p className="text-3xl md:text-4xl font-extrabold text-[#C9184A]">Rp10.000</p>
                    <p className="text-xs md:text-sm text-gray-700 font-semibold">per botol (250ml)</p>
                  </div>
                  <a
                    href="https://wa.me/6285231264685?text=Halo,%20saya%20ingin%20memesan%20ROSET%20SPARK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-white text-[#C9184A] px-6 md:px-8 py-3 md:py-4 rounded-xl font-extrabold text-base md:text-lg hover:bg-[#C9184A] hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 border-3 border-white"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Pesan Sekarang
                  </a>
                </div>
              </div>

              {/* Right Side - Product Image */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-2 border-4 border-white shadow-2xl">
                  <div className="bg-gradient-to-br from-[#FFE5EB] to-[#FFF5F7] rounded-2xl flex flex-col items-center justify-center overflow-hidden border-2 border-[#C9184A]/30">
                    <img
                      src="/images/banner-iklan.png"
                      alt="ROSET SPARK - Minuman Herbal Sparkling"
                      className="w-full h-auto max-h-[700px] object-contain rounded-xl drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="text-center mt-8">
            <a
              href="#video"
              className="inline-flex items-center gap-2 bg-white text-[#C9184A] px-8 py-4 rounded-full font-extrabold hover:bg-[#C9184A] hover:text-white transition-all shadow-2xl border-3 border-white"
            >
              <Sparkles className="w-5 h-5" />
              Lihat Video Produk
            </a>
          </div>
        </div>
      </section>

      {/* Brosur Produk Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Brosur Produk</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Lihat detail lengkap produk ROSET SPARK
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Brosur Utama */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-2 border-[#C9184A]/40/20 hover:shadow-3xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#C9184A] to-[#E0174A] p-6 md:p-8 text-white text-center">
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-white drop-shadow-lg" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">ROSET SPARK</h3>
                <p className="text-xs md:text-sm uppercase tracking-widest drop-shadow-md">Functional Sparkling Herbal Drink</p>
              </div>

              <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#FFE5EC]/30 via-white to-[#2E7D32]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center p-4 md:p-6">
                    <div className="bg-white rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg overflow-hidden">
                      <img src="/images/logo.png" alt="ROSET SPARK Logo" className="w-full h-full object-contain p-4" />
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 space-y-2 md:space-y-3">
                      <p className="text-xl md:text-2xl font-bold text-[#C9184A]">250ml</p>
                      <p className="text-xs md:text-sm text-gray-600">Botol Premium</p>
                      <div className="flex justify-center gap-1 md:gap-2 flex-wrap">
                        <span className="bg-[#C9184A] text-white px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs">Rosella</span>
                        <span className="bg-[#2E7D32] text-white px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs">Jahe</span>
                        <span className="bg-[#B8860B] text-white px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs">Kayu Manis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C9184A] mb-2">Rp10.000</p>
                  <p className="text-gray-600 text-xs md:text-sm">Harga terjangkau untuk mahasiswa</p>
                </div>
              </div>
            </div>

            {/* Info & Keunggulan Brosur */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border-l-4 border-[#C9184A]/40 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold text-[#C9184A] mb-3 md:mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#1B5E20]" />
                  Komposisi Alami
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">✓</span>
                    <span><strong>Rosella:</strong> Kaya antioksidan, vitamin C, dan menurunkan tekanan darah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">✓</span>
                    <span><strong>Jahe:</strong> Meningkatkan metabolisme dan sistem imun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">✓</span>
                    <span><strong>Kayu Manis:</strong> Mengontrol gula darah dan anti-inflamasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">✓</span>
                    <span><strong>Stevia:</strong> Pemanis alami tanpa kalori berlebih</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-2xl shadow-lg p-4 md:p-6 text-white hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2 drop-shadow-md">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
                  Keunggulan Produk
                </h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">★</span>
                    <span>Tanpa kafein - Tidak menyebabkan jantung berdebar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">★</span>
                    <span>Karbonasi alami - Sensasi segar dan nikmat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">★</span>
                    <span>Aman untuk lambung - Tidak menyebabkan iritasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B8860B] mt-1">★</span>
                    <span>100% Halal - Sesuai syariat Islam</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-2xl shadow-lg p-4 md:p-6 text-white hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2 drop-shadow-md">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 drop-shadow-lg" />
                  Cocok Untuk
                </h4>
                <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
                    <p className="font-bold drop-shadow-md">Mahasiswa</p>
                    <p className="text-[10px] md:text-xs text-white/90 drop-shadow-sm">Fokus belajar</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
                    <p className="font-bold drop-shadow-md">Pekerja</p>
                    <p className="text-[10px] md:text-xs text-white/90 drop-shadow-sm">Produktif kerja</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
                    <p className="font-bold drop-shadow-md">Atlet</p>
                    <p className="text-[10px] md:text-xs text-white/90 drop-shadow-sm">Energi stabil</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
                    <p className="font-bold drop-shadow-md">Ibu Rumah Tangga</p>
                    <p className="text-[10px] md:text-xs text-white/90 drop-shadow-sm">Sehat alami</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="https://wa.me/6285231264685?text=Halo,%20saya%20ingin%20memesan%20ROSET%20SPARK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#C9184A] text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base text-center hover:bg-[#C9184A] transition shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Pesan Sekarang
                </a>
                <a
                  href="#manfaat"
                  className="flex-1 bg-white text-[#C9184A] px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base text-center hover:bg-gray-50 transition shadow-lg border-2 border-[#C9184A] flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5" />
                  Lihat Manfaat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Produk */}
      <section id="tentang" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Tentang ROSET SPARK</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Minuman herbal sparkling non-kafein yang menggabungkan kearifan lokal dengan inovasi modern
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border-l-4 border-[#C9184A]/40">
                <h3 className="text-lg md:text-xl font-bold text-[#C9184A] mb-2 md:mb-3">Bahan Alami Pilihan</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Diperkaya dengan bunga rosella kaya antioksidan, jahe hangat, kayu manis aromatik, dan pemanis alami stevia tanpa kalori berlebih.
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border-l-4 border-[#1B5E20]">
                <h3 className="text-lg md:text-xl font-bold text-[#1B5E20] mb-2 md:mb-3">Tanpa Kafein</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Berbeda dengan energy drink konvensional, ROSET SPARK memberikan energi stabil tanpa efek samping caffeine crash atau gangguan tidur.
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border-l-4 border-[#B8860B]">
                <h3 className="text-lg md:text-xl font-bold text-[#B8860B] mb-2 md:mb-3">Karbonasi Segar</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Sensasi sparkling yang menyegarkan membuat setiap tegukan terasa nikmat, cocok untuk menemani aktivitas belajar dan berkreasi.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#C9184A] to-[#E0174A] text-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl">
              <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[#1B5E20]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 drop-shadow-md">Revitalisasi Jamu Nusantara</h3>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-white/95 drop-shadow-sm">
                ROSET SPARK hadir sebagai jawaban modern untuk generasi yang mencari alternatif minuman sehat, berenergi, dan tetap terhubung dengan warisan herbal Indonesia.
              </p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-white text-lg md:text-xl font-bold drop-shadow-md">✓</span>
                  <span className="drop-shadow-sm">Antioksidan tinggi dari rosella</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-white text-lg md:text-xl font-bold drop-shadow-md">✓</span>
                  <span className="drop-shadow-sm">Rempah lokal berkualitas premium</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-white text-lg md:text-xl font-bold drop-shadow-md">✓</span>
                  <span className="drop-shadow-sm">Aman untuk lambung sensitif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manfaat */}
      <section id="manfaat" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Manfaat ROSET SPARK</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Healthy Energy, Natural Focus
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-[#C9184A] to-[#E0174A] text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <div className="bg-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                <Zap className="w-7 h-7 md:w-8 md:h-8 text-[#C9184A]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 drop-shadow-md">Meningkatkan Fokus Belajar</h3>
              <p className="text-sm md:text-base text-white/95">
                Kombinasi herbal alami membantu meningkatkan konsentrasi dan produktivitas tanpa efek jantung berdebar.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <div className="bg-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                <Heart className="w-7 h-7 md:w-8 md:h-8 text-[#1B5E20]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 drop-shadow-md">Antioksidan Tinggi</h3>
              <p className="text-sm md:text-base text-white/95">
                Bunga rosella kaya akan antioksidan yang melindungi sel tubuh dari radikal bebas dan menjaga kesehatan.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <div className="bg-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-[#B8860B]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 drop-shadow-md">Energi Stabil</h3>
              <p className="text-sm md:text-base text-white/95">
                Tanpa kafein berarti tanpa crash energi. Tubuh tetap segar sepanjang hari tanpa rasa lemas mendadak.
              </p>
            </div>
            <div className="bg-white border-2 border-[#C9184A]/40 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#C9184A] mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#C9184A]">Aman untuk Lambung</h3>
              <p className="text-sm md:text-base text-gray-700">
                Formula herbal yang lembut dan aman dikonsumsi bahkan untuk yang memiliki lambung sensitif.
              </p>
            </div>
            <div className="bg-white border-2 border-[#1B5E20] p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <Leaf className="w-10 h-10 md:w-12 md:h-12 text-[#1B5E20] mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#1B5E20]">100% Herbal Alami</h3>
              <p className="text-sm md:text-base text-gray-700">
                Tanpa bahan kimia berbahaya, pewarna sintetis, atau pengawet buatan. Murni dari alam.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <div className="bg-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 drop-shadow-md">Rasa Segar & Nikmat</h3>
              <p className="text-sm md:text-base text-white/95">
                Kombinasi rasa herbal dan karbonasi menciptakan sensasi minum yang menyegarkan dan tidak membosankan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Video Promosi</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Lihat lebih dekat proses pembuatan dan testimoni ROSET SPARK
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6jp8Rerl2G0?si=dHW3HGr_hgYM5xtY"
                title="ROSET SPARK Minuman Herbal Sparkling"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Galeri Produk</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-[#C9184A] to-[#E0174A] p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <div className="text-center text-white">
                  <Sparkles className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-white drop-shadow-lg" />
                  <p className="font-semibold text-sm md:text-base drop-shadow-md">Botol 250ml</p>
                  <p className="text-xs md:text-sm text-white/90">Label Premium</p>
                </div>
              </div>
              <p className="text-white text-center text-sm md:text-base drop-shadow-md">Kemasan botol bening dengan label ROSET SPARK</p>
            </div>
            <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <div className="text-center text-white">
                  <Leaf className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-white drop-shadow-lg" />
                  <p className="font-semibold text-sm md:text-base drop-shadow-md">Bahan Alami</p>
                  <p className="text-xs md:text-sm text-white/90">Rosella & Rempah</p>
                </div>
              </div>
              <p className="text-white text-center text-sm md:text-base drop-shadow-md">Bunga rosella segar dan rempah pilihan</p>
            </div>
            <div className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] p-6 md:p-8 rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <div className="text-center text-white">
                  <Zap className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-white drop-shadow-lg" />
                  <p className="font-semibold text-sm md:text-base drop-shadow-md">Promo Spesial</p>
                  <p className="text-xs md:text-sm text-white/90">Rp10.000</p>
                </div>
              </div>
              <p className="text-white text-center text-sm md:text-base drop-shadow-md">Harga terjangkau untuk mahasiswa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Harga */}
      <section id="harga" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-[#C9184A] to-[#E0174A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 drop-shadow-lg">Harga Spesial</h2>
          <div className="w-20 md:w-24 h-1 bg-white mx-auto mb-8 md:mb-12"></div>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-8 md:p-12 border-2 border-white shadow-2xl">
            <div className="inline-block bg-[#C9184A] text-white px-4 md:px-6 py-2 rounded-full font-bold mb-4 md:mb-6 text-sm md:text-base shadow-lg">
              PROMO MAHASISWA
            </div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 text-[#C9184A]">Rp10.000</p>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-700">per botol (250ml)</p>
            <div className="max-w-md mx-auto text-left space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <span className="text-[#1B5E20] text-xl font-bold">✓</span>
                <span className="text-gray-800">Minuman herbal sparkling premium</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1B5E20] text-xl font-bold">✓</span>
                <span className="text-gray-800">Antioksidan tinggi dari rosella</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1B5E20] text-xl font-bold">✓</span>
                <span className="text-gray-800">Tanpa kafein, aman untuk lambung</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1B5E20] text-xl font-bold">✓</span>
                <span className="text-gray-800">Tersedia pembelian paket untuk acara kampus</span>
              </div>
            </div>
            <a
              href="https://wa.me/6285231264685?text=Halo,%20saya%20ingin%20memesan%20ROSET%20SPARK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9184A] text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl hover:bg-[#C9184A] transition shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section id="tim" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Tim Kami</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Kelompok 12 - KWU129
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Anggota 1 */}
            <div className="bg-gradient-to-br from-[#C9184A] to-[#E0174A] text-white p-6 md:p-8 rounded-2xl shadow-xl hover:scale-105 transition">
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <p className="text-4xl md:text-5xl font-bold text-[#C9184A]">IZ</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold mb-1">Izaz Tsany Rismawan</h3>
                  <p className="text-sm md:text-base text-[#B8860B] font-semibold mb-2 md:mb-3">NIM: 25051204355</p>
                  <div className="inline-block bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full">
                    <p className="text-xs md:text-sm font-semibold">Ketua</p>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mt-2 md:mt-3">Manajemen Bisnis</p>
                </div>
              </div>
            </div>

            {/* Anggota 2 */}
            <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white p-6 md:p-8 rounded-2xl shadow-xl hover:scale-105 transition">
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <p className="text-4xl md:text-5xl font-bold text-[#1B5E20]">EG</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold mb-1">Egin Sefiano Widodo</h3>
                  <p className="text-sm md:text-base text-[#B8860B] font-semibold mb-2 md:mb-3">NIM: 25051204328</p>
                  <div className="inline-block bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full">
                    <p className="text-xs md:text-sm font-semibold">Anggota</p>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mt-2 md:mt-3">Pemasaran dan Distribusi</p>
                </div>
              </div>
            </div>

            {/* Anggota 3 */}
            <div className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-white p-6 md:p-8 rounded-2xl shadow-xl hover:scale-105 transition sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <p className="text-4xl md:text-5xl font-bold text-[#B8860B]">FE</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold mb-1">Fearda Agnessiya Putri Dardiri</h3>
                  <p className="text-sm md:text-base text-white font-semibold mb-2 md:mb-3">NIM: 25051204332</p>
                  <div className="inline-block bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full">
                    <p className="text-xs md:text-sm font-semibold">Anggota</p>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mt-2 md:mt-3">Produksi dan Quality Control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C9184A] mb-3 md:mb-4">Hubungi Kami</h2>
            <div className="w-20 md:w-24 h-1 bg-[#C9184A] mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">
              Siap melayani pesanan Anda!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://instagram.com/roset_spark"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center"
            >
              <Instagram className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-white/90 text-sm">@roset_spark</p>
            </a>
            <a
              href="https://wa.me/6285231264685?text=Halo,%20saya%20ingin%20memesan%20ROSET%20SPARK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center"
            >
              <Phone className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-white/90 text-sm">085231264685</p>
            </a>
            <a
              href="mailto:rosetspark@herbal.com"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center"
            >
              <Mail className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/90 text-sm">rosetspark@gmail.com</p>
            </a>
            <div className="bg-gradient-to-br from-[#C9184A] to-[#E0174A] text-white p-6 rounded-2xl shadow-lg text-center">
              <MapPin className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Alamat</h3>
              <p className="text-white/90 text-sm">
                Jl. Raya Maospati - Madiun No.126, Magetan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#C9184A] text-white py-8 md:py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="/images/logo.png" alt="ROSET SPARK Logo" className="w-10 h-10 object-contain bg-white rounded-full p-1 shadow-lg" />
              <p className="text-lg md:text-xl font-bold drop-shadow-md">ROSET SPARK</p>
            </div>
            <p className="text-sm md:text-base text-white/95 mb-4 italic drop-shadow-sm font-semibold">Revitalisasi Jamu Nusantara</p>
          </div>

          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-white/60">
                © 2026 ROSET SPARK. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs md:text-sm font-semibold">
                <a href="#hero" className="text-white/70 hover:text-white hover:drop-shadow-lg transition">Beranda</a>
                <span className="text-white/40">•</span>
                <a href="#tentang" className="text-white/70 hover:text-white hover:drop-shadow-lg transition">Tentang</a>
                <span className="text-white/40">•</span>
                <a href="#kontak" className="text-white/70 hover:text-white hover:drop-shadow-lg transition">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}