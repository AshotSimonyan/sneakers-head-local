import { ComingSoonStyle } from "./ComingSoon.style"
import { Button } from "../UIKit"

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      <div className="container">
        <div className="content">
          <div className="left">
            <img src="/assets/coming-soon/coming.png" alt="Sneaker Head" />
          </div>
          <div className="right">
            <h2 className='title'>We are still building. See you soon.</h2>
            <p className='text'>Sneaker Head is a project composed of 8,888 NFTs crafted by talented and expert designers and developers.</p>
            <p className='text'>We unified the most experienced people in the industry to deliver a remarkable, cutting-edge product.</p>
            <Button href='https://discord.com/invite/JPMgm9c2'>Join Our Discord</Button>
          </div>
        </div>
      </div>
    </ComingSoonStyle>
  )
}

export default ComingSoon
