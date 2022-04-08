import React, { forwardRef, useMemo, useRef } from "react"
import { TeamStyle } from "./Team.style"
import { Fade } from "react-awesome-reveal"
import { Carousel, Icon } from "../UIKit"
import { theme } from "../../styles/theme"

const teamList = [
  {
    position: "3D Artist",
    name: "ALI",
    url: '#'
  },
  {
    position: "Founder",
    name: "VIANNEY",
    url: '#'
  },
  {
    position: "CTO",
    name: "MARC",
    url: '#'
  },
  {
    position: "Advisor",
    name: "MARIA",
    url: '#'
  },
  {
    position: "UI/UX",
    name: "VAN",
    url: '#'
  },
  {
    position: "Media buyer",
    name: "MICHAEL",
    url: '#'
  },
]

const Arrow = ({ className, onClick, direction }) => {
  return (
    <button onClick={onClick} className={className}>
      <img src={`assets/team/arrow-${direction}.png`} alt="" />
    </button>
  )
}

const tiltEffectSettings = {
  max: 18,
  perspective: 1000,
  scale: 1,
  speed: 300,
  easing: "cubic-bezier(.03,.98,.52,.99)"
};

const Team = forwardRef((props, ref) => {

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <Arrow direction={"right"}/>,
      prevArrow: <Arrow direction={"left"}/>,
      responsive: [

        {
          breakpoint: theme.breakpoints.md,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 1500,
            pauseOnHover: false,
          },
        },
      ],
    }
  }, [])

  const cardRef = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null)
  }

  const setTransition = (number) => () => {
    clearTimeout(cardRef[number].current.transitionTimeoutId);
    cardRef[number].current.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    cardRef[number].current.transitionTimeoutId = setTimeout(() => {
      cardRef[number].current.style.transition = "";
    }, tiltEffectSettings.speed);
  }

  const handleMouseMove = (number) => (event) => {
    const cardWidth = cardRef[number].current.offsetWidth;
    const cardHeight = cardRef[number].current.offsetHeight;
    const centerX = cardRef[number].current.getBoundingClientRect().left + cardWidth/2;
    const centerY = cardRef[number].current.getBoundingClientRect().top + cardHeight/2;
    const mouseX = Math.round(event.clientX - centerX);
    const mouseY = Math.round(event.clientY - centerY);
    const rotateXUncapped = (-1)*(tiltEffectSettings.max*mouseY/(cardHeight/2));
    const rotateYUncapped = (1)*(tiltEffectSettings.max*mouseX/(cardWidth/2));
    const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
    cardRef[number].current.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                          scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }

  const handleMouseLeave = (number) => () => {
    cardRef[number].current.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition();
  }


  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <div className="content">
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
                THE TEAM
                <img className='img-right' src="assets/title-attribute.png" alt="" />
              </h1>
            </Fade>
          </div>

          <div className="carousel-wrapper">
            <Fade triggerOnce direction={"up"} fraction={0.8} duration={1000}>

              <Carousel settings={settings} className='"team-list"'>
                {teamList.map(({ name, position, url }, index) => {
                  const number = index + 1
                  return (

                    <div
                      ref={cardRef[number]}
                      className="team-card"
                      key={`key-${index}`}
                      onMouseMove={handleMouseMove(number)}
                      onMouseLeave={handleMouseLeave(number)}
                      onMouseEnter={setTransition(number)}
                    >
                      <div className="img-wrapper">
                        <img src={`/assets/team/${number}.png`} alt="name" />
                      </div>
                      <div className="card-content">
                        <p className="name">{name}</p>
                        <p className="position">{position}</p>
                        <a className='social-icon' href={url} target="_blank" rel="noreferrer">
                          <Icon name="twitter" size={48} color={theme.colors.white} />
                        </a>
                      </div>

                    </div>
                  )
                })}
              </Carousel>
            </Fade>
          </div>
        </div>
      </div>
    </TeamStyle>
  )
})

export default Team
