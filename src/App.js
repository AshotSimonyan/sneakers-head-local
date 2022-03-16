import { useEffect, useState, useRef } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Roadmap from "./components/Roadmap/Roadmap"
import Team from "./components/Team/Team"
import ComingSoon from "./components/ComingSoon/ComingSoon"

function App() {
  const [loading, setLoading] = useState(true)
  const [, setLocked] = useLockedBody(true)
  const [scrollTo, setScrollTo] = useState(null)
  const heroRef = useRef(null)
  const roadmapRef = useRef(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  const refMapping = {
    "#roadmap": roadmapRef,
    "#about": aboutRef,
    "#contact": contactRef,
    "#faq": faqRef,
    "#team": teamRef,
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3800)
  }, [])

  useEffect(() => {
    if (scrollTo) {
      refMapping[scrollTo]?.current?.scrollIntoView({
        behavior: "smooth",
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  const handleLinkClick = to => {
    setScrollTo(to)
  }


  return (
    <ComingSoon />
  )
}

export default App
