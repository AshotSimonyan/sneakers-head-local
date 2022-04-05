import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import { Button, Icon } from "../UIKit"
import { useLockedBody } from "../../hooks/useLockedBody"
import {navList} from "./config";

const Header = ({ onLinkClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [locked, setLocked] = useLockedBody()

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
  }, [scrolled])

  function handleScroll(e) {
    let isScrolled = window.scrollY > 60
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }

  return (
    <HeaderStyle headerScrolled={scrolled ? "headerScrolled" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <a className="logo" href={"#main"}>
              <img src="logo.png" alt="BamBoozles" />
            </a>
          </div>
          <nav className="header-nav">
            <div className="header-nav-inner">
              <ul className="header-nav-list">
                {navList.map(({ to, title }) => {
                  return (
                    <li key={to} onClick={() => handleMenuLinkClick(to)}>
                      {title}
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>

          <ul className="social">
            <li>
              <a
                target="_blank"
                href="#"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="discord" size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="#"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="twitter" size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="#"
                rel="noreferrer"
                className="social-btn"
              >
                <Icon name="instagram" size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
