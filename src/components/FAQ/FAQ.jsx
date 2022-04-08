import React, { forwardRef, useState } from "react"
import { FAQStyle } from "./FAQ.style"
import Collapsible from "react-collapsible"
import { Icon } from "../UIKit"
import { Fade } from "react-awesome-reveal"

const data = [
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
]
const FAQ = forwardRef((props, ref) => {
  const [openPosition, setOpenPosition] = useState(null)

  const handleTriggerClick = position => {
    if (openPosition === position) {
      setOpenPosition(null)
    } else {
      setOpenPosition(position)
    }
  }
  return (
    <FAQStyle ref={ref}>
      <div className="container">
        <div className="faq-content">
          <div className="title-wrapper">
            <Fade
              triggerOnce
              direction={"up"}
              fraction={0.8}
              duration={1000}
              delay={0}
            >
              <h1 className="title">
                <img className='img-left' src="assets/title-attribute1.png" alt="" />
                FAQ
                <img className='img-right' src="assets/title-attribute.png" alt="" />
              </h1>
            </Fade>
          </div>

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
                // lazyRender={true}
                trigger={

                    <div className="trigger-inner">
                      <p>{q.question}</p>
                      <div className='icon-wrapper'>
                        <Icon name="plus-bold" size={24} />
                      </div>
                    </div>
                }
              >
                <p>{q.answer}</p>
              </Collapsible>
              </Fade>
            )
          })}
        </div>
      </div>
    </FAQStyle>
  )
})

export default FAQ
