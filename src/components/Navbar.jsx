import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import download from '../assets/download.png'
import resume from '../assets/resume1.png'
import experi from '../assets/experience.png'
import contact from '../assets/contact.png'
import project from '../assets/project1.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { 
      name: 'Home', 
      path: 'home',
      // icon: <img src={download} alt="home" />
      icon: `${download}`
    },
    { 
      name: 'Skills', 
      path: 'skills',
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/coding-5019749-4183736.png"
    },
    { 
      name: 'Experience', 
      path: 'experience',
      icon: `${experi}`
    },
    { 
      name: 'Projects', 
      path: 'projects',
      icon: `${project}`
    },
    { 
      name: 'Resume', 
      path: 'resume',
      icon:  `${resume}`
    },
    { 
      name: 'Contact', 
      path: 'contact',
      icon: `${contact}`
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
            >
              ▄︻デG̷a̷j̷e̷n̷d̷r̷a̷_̷G̷o̷u̷r̷══━
            </motion.button>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.path)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-2 lg:px-4 py-2 text-sm lg:text-base rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors whitespace-nowrap group"
              >
                <motion.img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-600 text-xl" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-gray-600 text-xl" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-gray-600 dark:text-gray-300 text-xl" />
              ) : (
                <FaBars className="text-gray-600 dark:text-gray-300 text-xl" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
      >
        <div className="container mx-auto px-4 py-2">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.path)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="w-full flex items-center gap-3 text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              <motion.img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar