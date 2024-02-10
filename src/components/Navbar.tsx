import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  // check if the device theme is dark
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches

  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setDark] = useState(true) // Default theme is 'dark'
  const firstBar = useRef(null)
  const secondBar = useRef(null)
  const menu = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const setMode = (isDarkMode:boolean) => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    setDark(isDarkMode)
  }

  const toggleTheme = () => {
    setMode(!isDark)
  }

  useEffect(() => {
    // get initial theme from localStorage
    const initTheme = localStorage.getItem('theme')
    if (initTheme) {
      setDark(initTheme === 'dark')
    } else {
      // If no theme is set in localStorage, use the device's theme
      setDark(getCurrentTheme())
    }
  }, [])

  useEffect(() => {
    // Add or remove 'dark' class based on isDark state
    isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [isDark])

  return (
    <nav className="flex text-center md:text-left md:justify-between py-8 px-14 bg-white dark:bg-neutral-900 items-center w-full">
      <div className="mr-auto">
        <Link to="/" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          <Logo theme={isDark ? 'dark' : 'light'} />
        </Link>
      </div>
      <div
        ref={menu}
        className={`
          md:flex
          ${isOpen ? 'flex' : 'hidden'}
          md:flex-row
          flex-col
          md:relative
          fixed
          md:bg-transparent
          bg-neutral-950
          z-30
          items-center
          md:gap-x-8
          gap-y-6
          md:justify-around
          md:h-auto
          h-screen
          md:text-neutral-800
          text-white
          top-0
          bottom-0
          left-0
          md:pt-0 pt-12
        `}
      >
        <Link to="/portfolio" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          Portfolio
        </Link>
        <Link to="/resume" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          Resume
        </Link>
        <Link to="/contact" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          Contact
        </Link>
        <button
          onClick={toggleTheme}
          className="inline-flex items-center md:text-lg text-2xl dark:text-neutral-100 md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24"
        >
          {isDark ?
            <span className="inline-flex items-center gap-x-2">
              <i className="lar la-moon text-3xl" /> <span className="md:hidden">Dark</span>
            </span>
            :
            <span className="inline-flex items-center gap-x-2">
              <i className="lar la-sun text-3xl" /> <span className="md:hidden">Light</span>
            </span>
          }
        </button>
      </div>
      <div className="group ml-auto block md:hidden" role="button" onClick={toggleMenu}>
        <div
          ref={firstBar}
          className="group-hover:bg-gray-600 w-9 h-0.5 my-3 bg-neutral-950 dark:bg-neutral-50 transition-all duration-300"
        ></div>
        <div
          ref={secondBar}
          className="group-hover:bg-gray-600 w-9 h-0.5 my-3 bg-neutral-950 dark:bg-neutral-50 transition-all duration-300"
        ></div>
      </div>
    </nav>
  )
}

export default Navbar