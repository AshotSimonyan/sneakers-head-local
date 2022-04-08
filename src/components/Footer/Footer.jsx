import { FooterStyle } from "./Footer.style"
import { Icon } from "../UIKit"

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="content">
          <ul className="social">
            <li>
              <a target="_blank" href="#" rel="noreferrer" className="social-btn">
                <Icon name="twitter" size={48} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#" rel="noreferrer" className="social-btn">
                <Icon name="instagram" size={48} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#" rel="noreferrer" className="social-btn">
                <Icon name="discord" size={48} />
              </a>
            </li>
          </ul>
          <div className='logo-wrapper'>
            <img src="logo-centered.png" alt="sneakers heads" />
          </div>
          <p className="copyright">
            ©{new Date().getFullYear()} sneaker heads LLC
          </p>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer
