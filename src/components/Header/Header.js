import { useEffect, useState } from 'react';
import { HeaderStyle } from './Header.style';
import { Button, Icon } from '../UIKit';

const Header = ({ onLinkClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, [scrolled]);

  function handleScroll(e) {
    let isScrolled = window.scrollY > 60;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }

  return (
    <HeaderStyle headerScrolled={scrolled ? 'headerScrolled' : ''}>
      <div className='container'>
        <div className='header-content'>
          <div className='logo-wrapper'>
            <a className='logo' href={'#main'}>
              <img src='logo.png' alt='BamBoozles' />
            </a>
          </div>

          <ul className='social'>
            <li>
              <a
                target='_blank'
                href='#'
                rel='noreferrer'
                className='social-btn'
              >
                <Icon name='discord' size={24} />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='#'
                rel='noreferrer'
                className='social-btn'
              >
                <Icon name='twitter' size={24} />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='#'
                rel='noreferrer'
                className='social-btn'
              >
                <Icon name='instagram' size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
