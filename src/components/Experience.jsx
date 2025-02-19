import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: "Tryidol Technologies",
      position: "Software Engineer Intern",
      duration: "2025",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/software-development-5019763-4183750.png",
      responsibilities: [
        "Developed full-stack applications using MERN stack",
        "Implemented RESTful APIs and database integration",
        "Collaborated with senior developers on project architecture",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      company: "GeeksOfGurukul",
      position: "Frontend Developer Intern",
      duration: "2024",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-programmer-5019762-4183749.png",
      responsibilities: [
        "Built responsive web applications using React.js",
        "Implemented modern UI/UX designs with Tailwind CSS",
        "Optimized application performance and loading times",
        "Worked on state management using Redux and Context API"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen pt-20 px-8 bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        Work Experience
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all"
          >
            <div className="flex items-start gap-6">
              <motion.img
                src={exp.icon}
                alt={exp.company}
                className="w-24 h-24 object-contain"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">{exp.position}</p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: respIndex * 0.1 }}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-3 text-blue-500 mt-1">•</span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience