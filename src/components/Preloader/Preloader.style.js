import styled from 'styled-components';

export const PreloaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(115deg, #272727, #000000);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease-out;
  opacity: 1;
  &.loaded {
    opacity: 0;
  }
  .CircularProgressbar {
    overflow: visible;
  }
  .CircularProgressbar-trail {
    color: #fff;
    fill: #fff;
    stroke: #fff !important;
    stroke-width: 1px;
  }
  .CircularProgressbar-path {
    stroke: #fff !important;
    stroke-width: 3px;
    /* filter: drop-shadow(0px 0px 3px #fff);
      -webkit-filter: drop-shadow(0px 0px 3px #fff); */
  }
  .CircularProgressbar-text {
    font-size: 2rem;
  }

  .progress {
    border-radius: 50%;
    overflow: hidden;
    width: 210px;
    position: relative;
    img {
      width: 120px;
    }
    div[data-test-id='CircularProgressbarWithChildren__children'] {
      margin-top: -105% !important;
    }
    /* @include mq(sm) {
      width: 180px;
      position: relative;
      img {
        width: 108px;
      }
    }
    @include mq(xs) {
      width: 220px;
      position: relative;
      img {
        width: 108px;
      }
    }
    @include mq(lg) {
      width: 340px;
      position: relative;
      img {
        width: 180px;
      }
    } */
    span {
      margin-top: 3rem;
      font-size: 2rem;
    }
  }
`;
