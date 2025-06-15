'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Halo, Saya Alip Maulana
        </motion.h1>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Seorang Programmer & Mahasiswa Sistem Informasi yang menyukai Web Development modern.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/projects"
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Lihat Proyek Saya
          </Link>
          <a
            href="/CV-Alip.pdf"
            download
            className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </main>
  )
}
