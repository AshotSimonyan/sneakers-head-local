import { forwardRef, useEffect, useRef, useState } from "react"
import { AboutStyle } from "./About.style"
import { Fade } from "react-awesome-reveal"
import { useOnScreen } from "../../hooks/useOnScreen"
import { Button } from "../UIKit"
import AirModel from "../AirModel/AirModel"

const AboutUs = forwardRef((props, ref) => {
  const [onScreen, setOnScreen] = useState(false)
  const aboutRef = useRef()
  const aboutScreen = useOnScreen(aboutRef)

  useEffect(() => {
    if (aboutScreen) {
      setOnScreen(true)
    }
  }, [aboutScreen])

  return (
    <AboutStyle id="about" ref={ref}>
      <div className="container">
        <div className="content">
          <div className="content-top">
            <img src="assets/hero/sneaker-outline.png" alt="sneaker" />
            <div className="content-top-flex">
              <h1>HEADS</h1>
                <h2>3D Hand-drawn
                  Sneaker Heads.</h2>
            </div>
          </div>
          <div className="content-bottom" >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <div className="button-group">
              <Button href='#' onClick={() =>console.log('asdasd')}>DISCORD</Button>
              <Button>TWITTER</Button>
            </div>
          </div>
          <div ref={aboutRef} />
        </div>
      </div>
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="spinner-item"><img src="assets/spinner/1.png" alt="" /></div>
          <div className="spinner-item"><img src="assets/spinner/2.png" alt="" /></div>
          <div className="spinner-item"><img src="assets/spinner/3.png" alt="" /></div>
          <div className="spinner-item"><img src="assets/spinner/4.png" alt="" /></div>
          <div className="spinner-item"><img src="assets/spinner/5.png" alt="" /></div>
          <div className="spinner-item"><img src="assets/spinner/6.png" alt="" /></div>
        </div>
      </div>

      <div className="container">
        <div className="model-block">
          <Fade
            triggerOnce
            cascade
            direction={"up"}
            fraction={0.8}
            duration={800}
          >
          <h2 className='title-resp'>HAND DRAWN
            AMAZING 3D
            SNEAKER HEADS
          </h2>
          </Fade>
          <div className="model-block-left">
            <img className='img-rotate' src="assets/hero/360.png" alt="" />
            <div className="model">
              <AirModel />
            </div>
          </div>
          <div className="model-block-right">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.8}
              duration={800}
            >
            <h2>HAND DRAWN
              AMAZING 3D
              SNEAKER HEADS
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            <div className="button-group">
              <Button href='#' onClick={() =>console.log('asdasd')}>DISCORD</Button>
              <Button>TWITTER</Button>
            </div>
            </Fade>
          </div>
        </div>
      </div>

    </AboutStyle>
  )
})

export default AboutUs
