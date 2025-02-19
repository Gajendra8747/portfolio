import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "RenterHub",
      description: [
        "Property rental management platform",
        "User authentication and authorization",
        "Real-time property listings and updates",
        "Secure payment integration"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      link : "https://github.com/Gajendra8747/RenterHub"
    },
    {
      title: "ChatApp",
      description: [
        "Real-time messaging application",
        "Private and group chat functionality",
        "File sharing and emoji support",
        "Message encryption and security"
      ],
      tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      link : "https://github.com/Gajendra8747"
    },
    {
      title: "School Management",
      description: [
        "Comprehensive education management system",
        "Student and teacher portals",
        "Attendance and grade tracking",
        "Course management and scheduling"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
      link : "https://github.com/sgtechent/school-mgmt/tree/development"
    }
  ]

  return (
    <div className="min-h-screen pt-20 px-8 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{project.title}</h3>
            <ul className="mb-6 space-y-2">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="mr-3 text-blue-500 mt-1">•</span>
                  {desc}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                title="GitHub Repository"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/Gajendra8747"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          <FaGithub className="text-2xl" />
          More Projects on GitHub
        </a>
      </motion.div>
    </div>
  )
}

export default Projects