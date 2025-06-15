'use client'

import { motion } from 'framer-motion'

const affiliates = [
  {
    name: 'Program Affiliate Hosting Murah',
    description:
      'Saya bekerja sama dengan penyedia hosting untuk memberikan diskon kepada pengguna baru yang mendaftar melalui link saya.',
    link: 'https://example.com/affiliate-hosting',
  },
  {
    name: 'Partnership UI Kit Premium',
    description:
      'Bekerja sama dengan pengembang UI Kit untuk membantu desainer dan developer mendapatkan akses lebih cepat dengan harga terjangkau.',
    link: 'https://example.com/uikit',
  },
  {
    name: 'Affiliate E-Learning Platform',
    description:
      'Saya menjadi mitra promosi untuk platform e-learning yang menyediakan kursus pemrograman berkualitas.',
    link: 'https://example.com/elearning',
  },
]

export default function AffiliatePage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Program Afiliasi & Kerja Sama
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {affiliates.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Kunjungi Link &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
