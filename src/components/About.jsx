import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {useState} from 'react'

import { styles } from "../styles";
import { hobbies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {myself} from '../assets'

const HobbyCard = ({ index, title, icon, description }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip () {
    if(!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  return (
  <Tilt className='sm:w-[265px] cursor-pointer flip-card'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='green-pink-gradient p-[2px] rounded-[20px] shadow-card flip-card-inner h-[280px] sm:w-[260px] w-[240px]' 
      onClick={handleFlip}
      initial={false}
      animate={{rotateY: isFlipped ? 180 : 360}}
      transition={{duration: 0.3, animationDirection:"normal", ease: "easeInOut"}}
      onAnimationComplete={() => setIsAnimating(false)}
    >

      {/* Front side */}
      <div
        options={{ // tilt settings 
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-[#090a77] rounded-[20px] py-5 px-12 
          flex justify-evenly items-center flex-col flip-card-front h-full
          ${isFlipped ? "hidden" : ""}`}>
        <img
          src={icon}
          alt={title}
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>

      {/* Back side */}
      <div className={`bg-[#090a77] rounded-[20px] py-3 px-3 h-full 
        flex  flip-card-back text-[14px] relative z-4
        ${isFlipped ? "" : "hidden"}`}>
        {(title === "Travelling" || title === "Manga") ? 
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {description.map((item, index) => 
              <li key={index}>
                <div className="flex items-center">
                  <span>{item.text} &nbsp;</span>
                  <img src={item.image} alt="flags" 
                  className={title === "Travelling" ? "w-[25px]" : "w-[25px]"} />
                </div>
              </li>)}
          </ul> :
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {description.map((item, index) => <li key={index}>{item}</li>)}
          </ul> 
        }
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
            I am currently a third-year undergraduate student at University of British Columbia, Vancouver, majoring in 
            Combined Honours Mathematics and Computer Science.
            I am always fascinated with how math can be applied to computer algorithms 
            to produce cool stuffs. 
            Having experiences in both mathematics and computer science competitions, 
            as well as projects and professional jobs, 
            I am looking forward to dive deeper into these subjects!
          </motion.p>
        </div>

        <motion.img variants={fadeIn("", "", 0.1, 1)} src={myself} alt="myself" className="h-50 w-50 rounded-full"/>
      </div>

      {/* Resume */}
      <motion.div className="flex  justify-center" variants={fadeIn("", "", 0.1, 1)}>
        <a href="https://drive.google.com/file/d/1c9diuuexmPlgAxP8AxKyNyGEPdUJYae2/view?usp=sharing"
          className="border-white border-3 p-2 hover:text-gray-300 hover:border-gray-300">
          Check out my resume!
        </a>
      </motion.div>

      {/* Hobbies section */}
      <motion.div variants={textVariant()} className="mt-13">
        <p className={styles.sectionSubheadText}>What I do in free time: &nbsp;
          <span className="text-[10px]">(click for details)</span>
        </p>
      </motion.div>

      <div className='mt-5 flex flex-wrap gap-5'>
        {hobbies.map((service, index) => (
          <HobbyCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")