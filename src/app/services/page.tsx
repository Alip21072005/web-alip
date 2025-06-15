'use client'

import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaChalkboardTeacher, FaBug } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="text-3xl text-blue-600 dark:text-blue-400" />,
    title: 'Web Development',
    description: 'Membuat website modern, cepat, dan responsif menggunakan Next.js, React, dan Tailwind CSS.',
  },
  {
    icon: <FaLaptopCode className="text-3xl text-blue-600 dark:text-blue-400" />,
    title: 'Fullstack App',
    description: 'Membangun aplikasi fullstack dengan fitur CRUD, autentikasi, dan database menggunakan Prisma & PostgreSQL.',
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600 dark:text-blue-400" />,
    title: 'Mentoring / Edukasi',
    description: 'Memberikan pelatihan dasar pemrograman, web development, dan tools modern bagi pemula maupun tingkat lanjut.',
  },
  {
    icon: <FaBug className="text-3xl text-blue-600 dark:text-blue-400" />,
    title: 'Bug Fixing & Security Testing',
    description: 'Menganalisis, memperbaiki bug, serta menguji keamanan aplikasi menggunakan berbagai metode pentesting.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Layanan Saya
      </motion.h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
