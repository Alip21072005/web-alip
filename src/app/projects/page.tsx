'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Website pribadi untuk menampilkan informasi, skill, dan proyek saya.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://alipmaulana.dev',
  },
  {
    title: 'CRUD Arsip DE CODE',
    description: 'Aplikasi manajemen arsip organisasi dengan login & integrasi Google.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Dashboard E-Learning',
    description: 'Dashboard pembelajaran daring untuk admin, mentor, dan peserta.',
    tech: ['React', 'Express', 'TypeScript'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyek Saya
      </motion.h1>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-200 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Kunjungi Proyek &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
