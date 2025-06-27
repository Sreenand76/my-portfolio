import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'
const projectsData = [
  {
    image: '/img/Portfolio-laptop2.png',
    title: 'PrismTech',
    description: 'A laptop buying platform with advanced filters,searching and dynamic pricing system allowing users to compare and purchase laptops based on specifications and prices.',
    technologies: ["React", "SpringBoot", "SQL", "Tailwind", "Docker"],
    live_link: 'https://prismtech7-laptops.vercel.app/',
    github_link: 'https://github.com/Sreenand76/Ecommerce-laptop'
  },
  {
    image: '/img/quizmo-app2.png',
    title: 'Quizmo',
    description: 'A fun and interactive quiz app that offers various quizzes to test your knowledge in different topics of fundamental computer science, with a user-friendly interface.',
    technologies: ["React", "SpringBoot", "SQL", "Tailwind", "Docker"],
    live_link: 'https://quizmo75.vercel.app/',
    github_link: 'https://github.com/Sreenand76/QuizApp'
  },
  {
    image: '/img/articlesummarizer2.png',
    title: 'ConciseAI',
    description: 'An AI-powered article summarizer that uses OpenAI to extract the key points from long articles and present them in a concise format.',
    technologies: ["React", "OpenAI"],
    live_link: 'https://ai-summarizer-seven-steel.vercel.app/',
    github_link: 'https://github.com/Sreenand76/ai-summarizer'
  },
]

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {

  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24 rounded-lg lg:min-w-[80vw] md:mb-10'>
        <div className="relative w-full lg:w-[38vw] h-[25vh] md:h-[43vh]" >
          {/* Image */}
          <a href={project.live_link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 h-full xl:max-w-[38vw] object-cover'
            />
          </a>
          <div className='hidden md:block'>
            <motion.div
              className={` absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl opacity-0 hover:opacity-100 $ transition-opacity duration-300 rounded-lg backdrop-blur-sm `}
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Visit Site</span>
                <FaPaperPlane />
              </a>
            </motion.div>

          </div>


        </div>
        <div>
          <div className='flex flex-col gap-3 p-1 md:max-w-[40vw]'>
            <div className=' text-xl font-semibold flex gap-5 items-center'>
              {project.title}
              <a href={project.github_link}><BsGithub /></a>
            </div>
            <p>{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            {project.technologies.map((technology, index) => (
              <span key={index} className='rounded-md bg-black p-1.5 text-xs text-white'>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id='project' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-2 md:px-14 md:py-24 mt-3 '>
      <ScrollReveal>
        <h1 className='text-3xl font-light text-gray-200 md:text-5xl mt-10 text-start'>Featured Projects</h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] md:max-w-[81vw] flex-col gap-16 lg:gap-32 text-gray-300'>
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects