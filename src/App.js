import { useEffect, useState, useRef } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import { useLockedBody } from './hooks/useLockedBody';
import FAQ from './components/FAQ/FAQ';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import AirModel from './components/AirModel/AirModel';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  const [loading, setLoading] = useState(true);
  // const [, setLocked] = useLockedBody(true);
  const [scrollTo, setScrollTo] = useState(null);
  const roadmapRef = useRef(null);
  const faqRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const teamRef = useRef(null);
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const refMapping = {
    '#roadmap': roadmapRef,
    '#about': aboutRef,
    '#contact': contactRef,
    '#faq': faqRef,
    '#team': teamRef,
  };

  useEffect(() => {
    if (scrollTo) {
      refMapping[scrollTo]?.current?.scrollIntoView({
        behavior: 'smooth',
      });
      setScrollTo(false);
    }
  }, [scrollTo]);

  const handleLinkClick = (to) => {
    setScrollTo(to);
  };

  const handleLoad = () => {
    setLoading(false);
    // setLocked(false);
  };
  return <ComingSoon />;
}

export default App;
