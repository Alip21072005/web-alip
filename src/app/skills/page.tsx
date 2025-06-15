'use client'

import { motion } from 'framer-motion'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'Prisma',
  'PostgreSQL',
  'MongoDB',
  'Git & GitHub',
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 bg-white dark:bg-black transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skill Saya
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-xl text-center font-semibold shadow-sm hover:scale-105 transition transform"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
