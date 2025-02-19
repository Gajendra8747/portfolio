import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      category: "MERN Stack",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5019747-4183734.png",
      items: [
        "MongoDB - NoSQL Database",
        "Express.js - Backend Framework",
        "React.js - Frontend Library",
        "Node.js - Runtime Environment"
      ]
    },
    {
      category: "Database",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/database-5019748-4183735.png",
      items: [
        "SQL - Structured Query Language",
        "NoSQL - Document-based Storage"
      ]
    },
    {
      category: "Programming",
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/coding-5019749-4183736.png",
      items: [
        "JavaScript - Web Development",
        "Java - Object-Oriented Programming"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen pt-20 px-8 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        Skills & Expertise
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all"
          >
            <motion.img
              src={skillGroup.icon}
              alt={skillGroup.category}
              className="w-24 h-24 mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
            />
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">{skillGroup.category}</h3>
            <ul className="space-y-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-3 text-blue-500">•</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills