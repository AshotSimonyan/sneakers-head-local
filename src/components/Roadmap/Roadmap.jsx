import React, { forwardRef, useState } from "react"
import { RoadmapStyle } from "./Roadmap.style"
import { Fade } from "react-awesome-reveal"
import Collapsible from "react-collapsible"
import { data } from "./Data"


const Roadmap = forwardRef((props, ref) => {
  const [openPosition, setOpenPosition] = useState(null)

  const handleTriggerClick = position => {
    if (openPosition === position) {
      setOpenPosition(null)
    } else {
      setOpenPosition(position)
    }
  }

  return (
    <RoadmapStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Fade
            triggerOnce
            cascade
            direction={"up"}
            fraction={0.8}
            duration={800}
          >
          <h1>ROADMAP</h1>
          </Fade>
          {data.map((q, i) => {
            return (
              <Fade
                triggerOnce
                cascade
                direction={"up"}
                fraction={0.8}
                duration={800}
              >
              <Collapsible
                key={"Collapsible" + i}
                handleTriggerClick={handleTriggerClick}
                transitionTime={300}
                accordionPosition={i}
                open={openPosition === i}
                trigger={

                    <div className="trigger-inner">
                      <div className='number'>
                        <span>0{i + 1}</span>
                      </div>
                      <p className='text'>{q.title}</p>
                      <div className='icon-wrapper'>
                        <img   src="assets/roadmap/1.png" alt="" />
                      </div>
                    </div>
                }
              >
                <p>{q.description}</p>
              </Collapsible>

              </Fade>
            )
          })}
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap
