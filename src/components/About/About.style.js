import styled from 'styled-components';

export const AboutStyle = styled.section`
  padding-bottom: 100px;

  .content {
    margin: 0 auto;
    padding-bottom: 100px;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .image {
      width: 100%;
      max-width: 548px;
      height: 460px;
      img {
        width: 100%;
        max-width: 548px;
      }
    }
  }

  .content-top {
    display: flex;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 130%;
      height: 130%;
      background-size: 92%;
      z-index: -1;
      background-repeat: no-repeat;
      background-image: url(assets/coming-soon/blur-min.png);
      right: -25%;
      top: -35%;
    }
  }
  .content-bottom {
    margin-top: 200px;
    display: flex;
  }

  .content-bottom-image {
    margin-right: 120px;
    position: relative;
    flex: 1 100%;
    z-index: 1;
    img {
      width: 100%;
      min-width: 542px;
    }
    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 130%;
      height: 130%;
      background-size: 92%;
      z-index: -1;
      background-repeat: no-repeat;
    }
    &::after {
      background-image: url(assets/blur.png);
      left: -40%;
      bottom: -35%;
    }
    &::before {
      background-image: url(assets/blurPurple.png);
      right: -45%;
      top: -30%;
    }
  }
  .content-bottom-text {
    flex: 1 100%;
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0.04em;
    text-align: left;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .title {
    padding-bottom: 24px;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  .text {
    padding-bottom: 24px;
    width: 80%;

    &.pull-right {
      margin-left: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    /* padding: 80px 0; */
    /* .text {
      padding-bottom: 32px;
    } */
    .content-top {
      /* flex-direction: column; */
      .image {
        img {
          max-width: 444px;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 80px;
    .content {
      padding-bottom: unset;
    }
    .content-top {
      flex-direction: column;
      &::before {
        right: -35%;
        top: -20%;
      }
      .image {
        margin: 0 auto;
        margin-top: 1.5rem;
        img {
          min-width: unset;
        }
      }
    }
    .content-bottom {
      margin-top: 120px;
      flex-direction: column;
      .content-bottom-image {
        order: 2;
        margin-right: 0;
        margin-top: 24px;
      }
      .content-bottom-text {
        order: 1;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .text {
      width: 100%;
    }
    .content-top {
      &::before {
        top: -20%;
      }
    }
    .content-bottom {
      .content-bottom-image {
        img {
          width: 100%;
          max-width: 540px;
          min-width: unset;
        }
      }
      .content-bottom-text {
        order: 1;
      }
    }
  }
`;
