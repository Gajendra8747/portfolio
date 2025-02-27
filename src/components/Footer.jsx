import { motion } from 'framer-motion';

const Footer = ({ darkMode }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`py-6 mt-10 bg-gradient-to-b ${darkMode ? 'from-gray-900 to-gray-800 text-white' : 'from-blue-50 to-purple-50 text-black'} shadow-lg rounded-t-2xl`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Full Stack Developer | MERN Stack</p>
        <motion.p >
          &copy; {new Date().getFullYear()} All rights reserved by @Gajendra.
        </motion.p>
      </div>
    </motion.footer>
  );
};
export default Footer;
