import React, { forwardRef, useState } from 'react';
import { theme } from '../../styles/theme';
import { RoadmapStyle } from './Roadmap.style';
import { Fade } from 'react-awesome-reveal';

const cards = [
  {
    phase: 'PHASE 01',
    title: 'Imeginations Run Wild',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non magna a massa tincidunt facilisis.',
  },
  {
    phase: 'PHASE 01',
    title: 'Imeginations Run Wild',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non magna a massa tincidunt facilisis.',
  },
  {
    phase: 'PHASE 01',
    title: 'Imeginations Run Wild',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non magna a massa tincidunt facilisis.',
  },
];
const Roadmap = forwardRef((props, ref) => {
  const onCallback = (e) => {
    console.log(e);
  };
  React.useEffect(() => {
    [0, 1, 2].forEach((val) => {
      const ref = document.getElementById(`video${val}`);
      ref.currentTime = (val + 1) * 5;
    });
  }, []);
  return (
    <RoadmapStyle ref={ref}>
      <div className='container'>
        <div className='content'>
          <Fade triggerOnce direction={'up'} fraction={0.5} duration={800}>
            <h1 className='title'>ROADMAP TEASER</h1>
          </Fade>
          <div className='cards-container'>
            {cards.map(({ phase, title, info }, index) => (
              <div key={index} className='roadmap-card'>
                <div className='card-image'>
                  <img src={`assets/roadmap/${index + 1}.png`} alt='' />
                  <video
                    id={`video${index}`}
                    className='roadmap-video'
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src='assets/shade.mp4' type='video/mp4'></source>
                    <source src='assets/shade.webm' type='video/webm'></source>
                  </video>
                </div>
                <div className='card-info'>
                  <span>{phase}</span>
                  <h4>{title}</h4>
                  <p>{info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RoadmapStyle>
  );
});

export default Roadmap;
