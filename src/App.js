import { useEffect, useState, useRef } from "react"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Roadmap from "./components/Roadmap/Roadmap"
import Team from "./components/Team/Team"
import Header from "./components/Header/Header"
import Preloader from "./components/Preloader/Preloader"
import { AppStyle } from "./styles/App.style"

function App() {
  const [loading, setLoading] = useState(true)
  const [, setLocked] = useLockedBody(true);
  const [scrollTo, setScrollTo] = useState(null)
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

  const handleLoad = () => {
    setLoading(false)
    setLocked(false);
  }
  return (
    <AppStyle>
      <Preloader handleLoad={handleLoad} />
      <div className="main-wrapper">
        <Header onLinkClick={handleLinkClick} />
        <About ref={aboutRef} />
        <Roadmap ref={roadmapRef} />
        <Team ref={teamRef} />
        <FAQ ref={faqRef} />
        <Footer />
      </div>
    </AppStyle>
  )
/*  return (
    <ComingSoon />
  )*/
}

export default App
