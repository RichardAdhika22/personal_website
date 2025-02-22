import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {useState} from 'react'

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {myself} from '../assets'

const ServiceCard = ({ index, title, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip () {
    if(!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  return (
  <Tilt className='sm:w-[250px] cursor-pointer flip-card'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='green-pink-gradient p-[1px] rounded-[20px] shadow-card flip-card-inner h-[280px] w-[220px]' 
      onClick={handleFlip}
      initial={false}
      animate={{rotateY: isFlipped ? 180 : 360}}
      transition={{duration: 0.3, animationDirection:"normal", ease: "easeInOut"}}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div
        options={{ // tilt settings 
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-[#151030] rounded-[20px] py-5 px-12 
          flex justify-evenly items-center flex-col flip-card-front h-full
          ${isFlipped ? "hidden" : ""}`}>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>

      <div className={`bg-[#151030] rounded-[20px] py-5 px-5 h-full
        flex  flip-card-back
        ${isFlipped ? "" : "hidden"}`}>
        banana
      </div>
    </motion.div>
  </Tilt>
)}

const About = () => {
  return (
    <div>
      {/* Description and image */}
      <div className="flex">
        <div className="flex flex-col">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionHeadText}>About Me</p>
          </motion.div>

          <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"  variants={fadeIn("", "", 0.1, 1)}>
            I am currently a third-year undergraduate student at UBC Vancouver majoring in 
            Combined Honours Mathematics and Computer Science.
            I am always fascinated with how math can be applied to computer algorithms 
            to produce cool stuffs. 
            Having experiences in both mathematics and computer science competitions, 
            as well as projects and professional jobs, 
            I am looking forward to dive deeper into these subjects.
          </motion.p>
        </div>

        <motion.img variants={fadeIn("", "", 0.1, 1)} src={myself} alt="myself" className="h-50 w-50 rounded-full"/>
      </div>

      <motion.div className="flex  justify-center" variants={fadeIn("", "", 0.1, 1)}>
        <a href="https://drive.google.com/file/d/1doI1HmM8gR8svt38S7XUzbqPZjHA1_Os/view?usp=sharing"
          className="border-white border-3 p-2 hover:text-gray-300 hover:border-gray-300">
          Check out my resume!
        </a>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubheadText}>A bit of my activities to unwind:</p>
      </motion.div>

      <div className='mt-5 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")