import { motion } from 'framer-motion'
import { FaDownload, FaEye } from 'react-icons/fa'

const Resume = () => {
  // Replace with your actual resume URL
  const resumeUrl = "https://drive.google.com/file/d/1kvRC9gyftFWcmm6elm_dhuHL9nhO1BOv/view?usp=drivesdk"

  return (
    <div className="min-h-screen pt-20 px-8 flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-white/80 dark:bg-gray-800/80 p-12 rounded-2xl shadow-xl backdrop-blur-sm"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">Resume</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">View or download my detailed resume to learn more about my experience and skills.</p>
        <div className="space-x-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            <FaEye className="text-xl" />
            View Resume
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl"
          >
            <FaDownload className="text-xl" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume