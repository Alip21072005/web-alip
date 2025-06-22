'use client'

import { motion } from 'framer-motion'

const organizations = [
  {
    role: 'Ketua OSIM',
    org: 'MAN 1 Mukomuko',
    year: '2021 - 2022',
    description: 'Memimpin organisasi siswa intra madrasah dengan berbagai kegiatan akademik dan sosial.',
  },
  {
    role: 'Kepala Bidang Kerohanian',
    org: 'Himpunan Mahasiswa Sistem Informasi - Universitas Dehasen Bengkulu',
    year: '2023 - Sekarang',
    description: 'Mengelola kegiatan kerohanian dan sosial kemahasiswaan berbasis keagamaan.',
  },
  {
    role: 'Ketua Remaja Islam',
    org: 'Masjid Darussalam, Ipuh',
    year: '2022 - 2023',
    description: 'Membina kegiatan remaja masjid dan kegiatan dakwah di tingkat desa.',
  },
  {
    role: 'Bendahara',
    org: 'Karang Taruna Medan Jaya',
    year: '2022',
    description: 'Mengelola keuangan dan penganggaran kegiatan sosial dan pemuda desa.',
  },
]

export default function Organization() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pengalaman Organisasi
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {organizations.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                {item.role}
              </h2>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                {item.year}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">
              {item.org}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
