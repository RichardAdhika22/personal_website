import { motion } from "framer-motion";
import { styles } from "../styles";
import { BookCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* left side dot and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#2aa6ad]' />
          <div className='w-1 sm:h-80 h-40 light-blue-gradient' />
        </div>

        {/* Very bried intro */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-color-changing'>Richard Adhika</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Math & Coding Full-time Enjoyer
          </p>
        </div>
      </div>

      <div className="absolute">
       
      </div>
      <BookCanvas />

      {/* Scroll down animation */}
      <div className='absolute bottom-7 w-full flex flex-col justify-center items-center'>
        <div className="text-gray-400 text-[16px]" >Scroll down to explore!</div>
        <a href='#about'>
          <div className='w-[15px] h-[45px] rounded-3xl border-4 border-gray-400 p-2 flex-col justify-center items-center'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='relative w-2 h-2 rounded-full bg-gray-400 bottom-[6px] right-[5px]'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero