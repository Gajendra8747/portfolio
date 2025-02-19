import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import linkedin from '../assets/linkedin.WEBP'
import email from '../assets/email1.png'
import twitter from '../assets/twitterr.png';
import insta from '../assets/insta.WEBP';

const Contact = () => {
  const socialLinks = [
    {
      platform: "Email",
      link: "mailto:your.email@gmail.com",
      icon: `${email}`,
      color: "hover:text-red-500",
      description: "Send me an email for professional inquiries",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/email-5727004-4784891.png"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/gajendra-gour-107339287",
      icon: `${linkedin}`,
      color: "hover:text-blue-600",
      description: "Connect with me on LinkedIn",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/linkedin-5727013-4784900.png"
    },
    {
      platform: "Twitter",
      link: "https://x.com/GajendraGo52258",
      icon: `${twitter}`,
      color: "hover:text-blue-400",
      description: "Follow me on Twitter",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/twitter-5727027-4784914.png"
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/gajendragour87",
      icon: `${insta}`,
      color: "hover:text-pink-600",
      description: "Follow my journey on Instagram",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/instagram-5727012-4784899.png"
    }
  ]

  return (
    <div className="min-h-screen pt-20 px-8 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col items-center gap-4 p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all ${social.color}`}
          >
            <motion.img
              src={social.icon}
              alt={social.platform}
              className="w-16 h-16 object-contain"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xl font-semibold">{social.platform}</span>
            <p className="text-gray-600 dark:text-gray-300 text-center">{social.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Contact