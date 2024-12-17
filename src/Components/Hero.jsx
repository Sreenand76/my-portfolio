import React from 'react';
import { TextGenerateEffect } from './ui/Text-GenerationEffect';
import TypeWriterEffect from './ui/TypeWriterEffect';
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <div id='home' className='pb-20 pt-36 lg:min-h-[100vh] flex items-center md:w-[85vw] justify-center'>
      <div className='flex justify-center'>
        <div className='max-w-[89vw] flex flex-col justify-center'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 text-lg md:text-2xl lg:text-5xl md:mb-3"
          >
            Hey, I'm Sreenand S
          </motion.h1>

          <TextGenerateEffect
            className="text-base text-left lg:mb-7"
            words={"An Aspiring Full Stack Developer"}
            duration={1} // Duration for the effect
            filter={false} // Set to false for immediate visibility
          />
          <div className="block md:hidden">
            {/* Mobile View */}
            <TypeWriterEffect
              className="break-words whitespace-normal flex flex-wrap mt-3 md:mt-6"
              words={[{ text: "Currently debugging my way through college. . ." }]}
              cursorClassName=""
            />
          </div>
          <div className="hidden md:block ">
              {/* Laptop View */}
              <TypeWriterEffect
              className="break-words whitespace-normal flex flex-wrap mt-3 md:mt-6"
              words={[{ text: "Currently debugging my way through college, one mysterious error at a time..." }]}
              cursorClassName=""
            />
            </div>
          <div className='flex justify-start mt-14'>
            <button className='bg-purple-950 text-white text-sm md:text-base p-2 rounded-md lg:h-14 px-3 font-light hover:brightness-110'>Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

