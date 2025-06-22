'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hubungi Saya
      </motion.h1>

      <motion.div
        className="max-w-2xl mx-auto bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 dark:text-gray-300">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-700 dark:text-gray-300">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full mt-1 p-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              placeholder="Tulis pesan Anda..."
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </motion.button>
        </form>
      </motion.div>
    </main>
  )
}
