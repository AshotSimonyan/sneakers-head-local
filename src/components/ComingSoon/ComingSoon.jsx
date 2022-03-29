import { ComingSoonStyle } from './ComingSoon.style';
// import AirModel from '../AirModel/AirModel';
import AirModel from '../AirModel/AirModelCopy';
import Preloader from '../Preloader/Preloader';
import { Icon } from '../UIKit';

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      {/*<Preloader />*/}
        <img className='img-abs cloud1' src="assets/coming-soon/cloud1.png" alt=""/>
        <img className='img-abs cloud2' src="assets/coming-soon/cloud2.png" alt=""/>
        <img className='img-abs head1' src="assets/coming-soon/floating-head-1.png" alt=""/>
        <img className='img-abs head2' src="assets/coming-soon/floating-head-2.png" alt=""/>
        <div className='top'>
            <div className="title-wrapper">
                <img src="assets/coming-soon/title.png" alt=""/>
            </div>
            <div>
                <ul className='social'>
                    <li>
                        <a
                            target='_blank'
                            href='#'
                            rel='noreferrer'
                            className='social-btn'
                        >
                            <Icon name='twitter' size={32} />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            href='#'
                            rel='noreferrer'
                            className='social-btn'
                        >
                            <Icon name='discord' size={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      <div className='content'>

        <div className='left'>
          {/*<AirModel />*/}
            <video  autoPlay muted loop style={{width: '100%', height: '100%'}}>
                {/*<source src="sneakerhead_1000x1260_DNxHR_HQ.mov"  />*/}
                <source src="sneakerhead_highRes_0000.webm" type='video/webm'  />
                {/*<source src="movie.ogg" type="video/ogg" />*/}
                        Your browser does not support the video tag.
            </video>
        </div>
        <div className='right'>
          <div>
            <h1 className='title'>
              We're still <br /> building...
            </h1>
          </div>
          <p className='text'>
            Sneaker Head is a project composed of 8,888 NFTs crafted by talented
            and expert designers and developers. We unified the most experienced
            people in the industry to deliver a remarkable, cutting-edge
            product.
          </p>
          <span>
            By <a href='#'>ALI DAWOOD</a>
          </span>
        </div>
      </div>
    </ComingSoonStyle>
  );
};

export default ComingSoon;
