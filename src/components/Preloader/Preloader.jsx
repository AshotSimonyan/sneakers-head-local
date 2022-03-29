import React from 'react';
import { useProgress } from '@react-three/drei';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PreloaderStyle } from './Preloader.style';

function Preloader({ handleLoad }) {
  const progress = useProgress();
  const [value, setValue] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const counter = React.useRef(0);

  React.useEffect(() => {
    let images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img.complete) {
        incrementCounter(images.length);
      } else {
        img.addEventListener('load', () => incrementCounter(images.length));
      }
    });
    return () => {
      setValue(0);
      counter.current = 0;
    };
  }, []);

  function incrementCounter(len) {
    counter.current++;
    if (counter.current === len) {
      setValue(100);
    } else {
      setValue((counter.current * 100) / 80);
    }
  }

  React.useEffect(() => {
    if (progress.progress === 100 && value === 100) {
      setTimeout(() => {
        if (handleLoad) {
          handleLoad();
        }
      }, 400);
      setLoaded(true);
    }
  }, [progress, value]);

  return loaded ? null : (
    <PreloaderStyle>
      <div className='progress'>
        <CircularProgressbarWithChildren value={progress.progress}>
          <img src={'assets/roadmap/3.png'} alt='loader' />
        </CircularProgressbarWithChildren>
      </div>
      <span>{progress.progress.toFixed()}%</span>
    </PreloaderStyle>
  );
}

export default React.memo(Preloader);
