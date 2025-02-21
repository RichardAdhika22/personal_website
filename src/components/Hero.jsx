import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Richard</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am undergrad at UBC <br className='sm:block hidden' />
            banana
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-7 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[15px] h-[45px] rounded-3xl border-4 border-gray-500 p-2 flex-col justify-center items-center'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='relative w-2 h-2 rounded-full bg-gray-500 bottom-[6px] right-[5px]'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero