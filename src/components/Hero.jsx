import {motion} from 'framer-motion'

import {styles} from '../styles'
import{ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className=" flex flex-col justify-center items-center mt-5">
       
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}> Hello, I am <span className="text-[#915eff]"> Pascal </span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>A dedicated software developer,<br className="sm:block hidden"/> with a passion for creating cutting-edge solutions. With a strong background in Computer Science and hands-on experience in Django, Python, React.js, and databases, 
        I'm eager to collaborate on impactful projects. Let's build something extraordinary together!
        </p>

        <div className="flex gap-3 justify-center mt-8">
        {/* GitHub Button */}
        <motion.a
          href="https://github.com/pascagihozo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded"
        >
          GitHub
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/pascal-gihozo-a37061178/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          LinkedIn
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          href="https://docs.google.com/document/d/1ikT5q-A4InsGOD9OCYdvV9Hw_gTpxgcRQ738uPSIvTU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Download Resume
        </motion.a>
      </div>
      
      </div>
      </div>
    
    {/* <ComputersCanvas /> */}
    
    </section>
  )
}

export default  Hero