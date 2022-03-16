import { useEffect, useState, useRef, useCallback } from "react"
import About from "./components/About/About"
import { useOnScreen } from "./hooks/useOnScreen"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Team from "./components/Team/Team"
import HorizontalScroll from "react-scroll-horizontal"
import NavBar from "./components/Navbar/NavBar"
import RoadMap from "./components/RoadMap/RoadMap"

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(5)
  const [animValues, setAnimValues] = useState(0)
  const [touchDevice, setTouchDevice] = useState(false)
  const parentRef = useRef(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const roadMapRef = useRef(null)

  const aboutScreen = useOnScreen(aboutRef)
  const [, setLocked] = useLockedBody(true)

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  const refMapping = {
    "#about": aboutRef,
    "#roadMap": roadMapRef,
    "#faq": faqRef,
    "#team": teamRef,
  }

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window?.matchMedia("(pointer: coarse)").matches
    ) {
      setTouchDevice(true)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3500)
  }, [])

  const calculateProgress = useCallback(offsetLeft => {
    const parent = document.querySelector(".parent >div")
    const pageWidth = parseInt(window.getComputedStyle(parent).width)
    let percent = Math.round(
      ((offsetLeft + parentRef.current.hScrollParent.clientWidth) / pageWidth) *
        100
    )
    if (percent < 5) {
      percent = 5
    }
    return percent
  }, [])

  const handleLinkClick = to => {
    const offsetLeft = parseInt(refMapping[to]?.current.offsetLeft)
    const animValues = Math.abs(parentRef.current?.state.animValues)
    if (touchDevice) {
      refMapping[to]?.current.scrollIntoView({
        inline: "start",
      })
    } else {
      setAnimValues(animValues - offsetLeft)
      setProgress(calculateProgress(offsetLeft))
    }
  }

  const handleScroll = () => {
    const animValues = Math.abs(parentRef.current?.state?.animValues)
    setProgress(calculateProgress(animValues))
  }

  return (
    <main>
      <Loader className={loading ? "" : "hide-loader"} />
      <div className="main-wrapper" onWheel={handleScroll}>
        <HorizontalScroll
          className="parent"
          reverseScroll
          config={{ stiffness: 50 }}
          ref={parentRef}
          animValues={animValues}
        >
          <About ref={aboutRef} onScreen={aboutScreen && !loading} />
          <RoadMap ref={roadMapRef} />
          <Team ref={teamRef} />
          <FAQ ref={faqRef} />
        </HorizontalScroll>
      </div>

      <NavBar
        onLinkClick={handleLinkClick}
        progress={progress}
        onScroll={handleScroll}
        touchDevice={touchDevice}
      />
    </main>
  )
}

export default App
