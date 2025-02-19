import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">Full Stack Developer</p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Specializing in MERN Stack Development</p>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-500">Turning Ideas into Reality</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5019747-4183734.png"
            alt="Developer Illustration"
            className="w-64 md:w-96 h-64 md:h-96 object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Home