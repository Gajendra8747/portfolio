import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    return savedDarkMode ? JSON.parse(savedDarkMode) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen w-full`}>
        <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="w-full">
            <section id="home" className="w-full min-h-screen">
              <Home />
            </section>
            <section id="skills" className="w-full min-h-screen">
              <Skills />
            </section>
            <section id="experience" className="w-full min-h-screen">
              <Experience />
            </section>
            <section id="projects" className="w-full min-h-screen">
              <Projects />
            </section>
            <section id="resume" className="w-full min-h-screen">
              <Resume />
            </section>
            <section id="contact" className="w-full min-h-screen">
              <Contact />
            </section>
            
          </main>
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </Router>
  )
}

export default App