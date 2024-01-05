import { useRef } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import PreFooter from '../components/PreFooter'
import PastProjects from '../components/PastProjects'
import Skills from '../components/Skills'

const Home = () => {
  const targetElem = useRef()

  const scrollIntoView = () => {
    const elmnt: any = targetElem
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    })
  }

  return (
    <div className="flex flex-col divide-y dark:divide-gray-600">
      <Hero scrollToAbout={scrollIntoView} />
      <About ref={targetElem} />
      <PastProjects />
      <Skills/>
      <Experience />
      <PreFooter />
    </div>
  )
}

export default Home