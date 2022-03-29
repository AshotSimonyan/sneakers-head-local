import styled from 'styled-components';

export const ComingSoonStyle = styled.main`
  background: url('assets/coming-soon/coming-bg.jpg') center center;
  background-size: cover;
  position: relative;
  font-family: 'Exo 2', sans-serif;
  font-weight: 200;
  min-height: 100vh;

  .img-abs {
    position: absolute;
    
    &.cloud1 {
      top: 0;
      left: 0;
    }
    
    &.cloud2 {
      bottom: 0;
      right: 120px;
      width: 370px;
      height: 110px;
      object-position: top;
      object-fit: cover;
    }
    
    &.head1 {
      top: 70px;
      right: 0;
    }
    &.head2 {
      bottom: 0;
      right: 0;
      width: 142px;
      height: 256px;
      object-position: left;
      object-fit: cover;
    }
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 48px;
    
    ul {
      margin-top: 20px;
      display: flex;
      .social-btn {
        margin-right: 20px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: 0.5s;

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.white};
            transition: 0.5s;
          }
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};

          .icon {
            path {
              fill: ${({ theme }) => theme.colors.black};
            }
          }
        }
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px 80px;
    position: relative;
    z-index: 1;
  }
  span {
    font-weight: 200;
    font-size: 16px;
    a {
      text-decoration: underline;
      font-weight: 400;
      margin-left: 4px;
    }
  }

  .title-wrapper {
    max-width: 475px;
    padding: 0 24px;
    width: 100%;
    
    img {
      width: 100%;
      display: block;
    }
  }
  .left {
    width: 480px;
    height: 640px;
    
  }
  .right {
    flex: 1;
    margin-left: 40px;
    max-width: 670px;
    .title {
      display: inline-block;
      font-weight: 400;
      font-size: 120px;
      font-family: 'Fugaz one', cursive;
      text-transform: uppercase;
      text-align: end;
      line-height: 80%;
      letter-spacing: -6px;
    }
    .text {
      padding-bottom: 24px;
      font-weight: 200;
      font-size: 16px;
      margin: 32px 0;
      letter-spacing: 0.08em
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .right {
      .title {
        font-size: 100px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .img-abs {


      &.cloud2 {
        width: 306px;
        height: 90px;
      }

      &.head1 {
        width: 114px;
        top: 98px;
      }
      &.head2 {
        width: 100px;
        height: 184px;
        bottom: 28px;
      }
    }
    .left {
      padding-bottom: 48px;
      width: 400px;
      height: 532px;
    }
    .right {
      padding-left: 0;
      margin: 0;
      .title {
        font-size: 80px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {

    .img-abs {
      
      &.cloud2 {
        width: 306px;
        height: 90px;
      }

      &.head1 {
        height: 140px;
        width: 90px;
        object-position: left;
        object-fit: cover;
        top: 50%;
      }
      &.head2 {
        width: 100px;
        height: 184px;
        bottom: 28px;
      }
    }
    
    .content {
      flex-direction: column;
      padding: 16px 40px 140px;
      .top {
        top: 30px;
      }
    }
    .left {
      padding-left: 0;
      padding-bottom: 40px;
      max-width: 426px;
      height: 566px;
    }
    .right {
      padding-left: 0;
      .title {
        font-size: 80px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .img-abs {
      &.cloud1 {
        width: 245px;
        height: 287px;
        object-fit: cover;
        object-position: right;
        top: 77px;
      }

      &.head1 {
        width:70px;
      }

    }
    .left {
      width: 100%;
      height: 408px;
    }
    .content {
      padding: 16px 20px 140px;
    }
    .right {
      .title {
        font-size: 56px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    &:after {
      background-position: -50px 0;
    }
    .content {
      .left {
        width: 100%;
        height: 300px;
      }
      .right {
        .title {
          font-size: 46px;
          letter-spacing: -3px;
        }
      }
    }
  }
`;
