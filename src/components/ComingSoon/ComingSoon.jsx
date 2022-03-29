import { ComingSoonStyle } from './ComingSoon.style';
import AirModel from '../AirModel/AirModel';
import Preloader from '../Preloader/Preloader';
import { Icon } from '../UIKit';

const ComingSoon = () => {
  return (
    <ComingSoonStyle>
      <Preloader />
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
                            href='https://twitter.com/sneakerheadsoff'
                            rel='noreferrer'
                            className='social-btn'
                        >
                            <Icon name='twitter' size={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      <div className='content'>

        <div className='left'>
          <AirModel />
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
            By <a href='https://mobile.twitter.com/ill_lawi' target='_blank' rel='noreferrer'>ALI DAWOOD</a>
          </span>
        </div>
      </div>
    </ComingSoonStyle>
  );
};

export default ComingSoon;
