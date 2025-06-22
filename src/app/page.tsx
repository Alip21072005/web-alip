"use client";

import Image from "next/image";
import SplitText from "@/TextAnimations/SplitText/SplitText";
import ScrambledText from "@/TextAnimations/ScrambledText/ScrambledText";
// import ScrollReveal from "@/TextAnimations/ScrollReveal/ScrollReveal"; // Jika Anda masih menggunakannya di halaman ini, pastikan terimpor

export default function HomePage() {
  const handleSplitTextAnimationComplete = (): void => {
    console.log('Animasi "Hallo Bre..." selesai!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 px-4 py-8 relative overflow-hidden"> {/* Tambah overflow-hidden untuk ikon yang mungkin sedikit keluar */}
      <div className=""></div>

      <SplitText
        text="Hallo Bre..."
        className="mt-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center mb-8 md:mb-12 text-white leading-tight drop-shadow-lg"
        delay={70}
        duration={0.8}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 50, rotationZ: 10 }}
        to={{ opacity: 1, y: 0, rotationZ: 0 }}
        threshold={0.1}
        rootMargin="-100px 0px"
        textAlign="center"
        onLetterAnimationComplete={handleSplitTextAnimationComplete}
      />

      {/* Kontainer relatif untuk foto dan ikon */}
      <div className="relative mb-12 md:mb-16 w-full flex justify-center items-center"> {/* Menggunakan flex dan max-w-sm untuk centering foto */}
        {/* Ikon Kiri Atas (JavaScript) */}
        <div className="absolute top-[-40px] left-[-20px] md:top-[-60px] md:left-[-40px] z-10 animate-float-1"> {/* Tambah animate-float */}
          <Image
            src="/images/icons/javascript.png"
            alt="JavaScript Icon"
            width={65} // Ukuran sedikit lebih besar
            height={65}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
        </div>

        {/* Ikon Kanan Bawah (React) */}
        <div className="absolute bottom-[-50px] right-[-10px] md:bottom-[-70px] md:right-[-30px] z-10 animate-float-2"> {/* Tambah animate-float */}
          <Image
            src="/images/icons/react.png"
            alt="React Icon"
            width={75} // Ukuran yang berbeda
            height={75}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
        </div>

        {/* Foto Profil Utama */}
        <Image
          src="/images/nobg.png" // Pastikan path ini benar
          alt="Foto Profil Alip Maulana"
          width={700} 
          height={700}
          className="transition-transform duration-300 hover:scale-105 relative z-20"
          priority
        />

        {/* Ikon Kiri Bawah (Node.js) */}
        <div className="absolute bottom-[-20px] left-[0px] md:bottom-[-30px] md:left-[10px] z-10 animate-float-3"> {/* Tambah animate-float */}
          <Image
            src="/icons/node.png" // **PERBAIKI PATH INI** dari /icons/node.png
            alt="Node.js Icon"
            width={55} // Ukuran yang berbeda lagi
            height={55}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
        </div>

        {/* Ikon Kanan Atas (TypeScript) */}
        <div className="absolute top-[0px] right-[0px] md:top-[10px] md:right-[10px] z-10 animate-float-4"> {/* Tambah animate-float */}
          <Image
            src="/images/icons/typescript.png"
            alt="TypeScript Icon"
            width={70} // Ukuran yang berbeda
            height={70}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
        </div>
      </div>

      {/* Komponen ScrambledText dipindahkan ke sini, di luar div relative foto/ikon */}
      <div className="max-w-4xl mx-auto text-center mt-8 md:mt-12 mb-20 px-2 text-white">
        <ScrambledText
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 leading-relaxed"
          radius={100}
          duration={1.2}
          speed={0.1}
          scrambleChars="!@#$%^&*<?>0129837465:"
        >
          Halo, saya Alip Maulana, seorang Programmer yang bersemangat dalam membangun solusi digital. Berbasis di Bengkulu, saya mengubah ide-ide kompleks menjadi aplikasi web yang intuitif dan berkinerja tinggi. Saya fokus pada kode bersih, desain responsif, dan pengalaman pengguna yang luar biasa. Mari wujudkan proyek Anda bersama!
        </ScrambledText>
      </div>

    </div>
  );
}