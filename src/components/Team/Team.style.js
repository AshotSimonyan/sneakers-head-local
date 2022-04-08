import styled from "styled-components"

export const TeamStyle = styled.section`
  padding: 100px 0;
  overflow: hidden;

  .title {
    display: inline-flex;
    align-items: center;
    font-size: 120px;
    margin-bottom: 60px;
    white-space: nowrap;
    position: relative;

    .img-right, .img-left {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .img-right {
      left: 100%;
      margin-left: 35px;
    }

    .img-left {
      margin-right: 35px;
      display: none;
    }
  }

  .card-content {
    position: absolute;
    top: 10%;
    z-index: 1;
    left: 42%;
    right: 0;
  }
  
  .img-wrapper {

    img {
      display: block;
      width: 100%;
    }
  }

  .team-card {
    position: relative;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: .3s;
  }

  .name {
    font-family: ${({ theme }) => theme.fonts.secondary};
    line-height: 1;
    font-size: 56px;
    text-transform: uppercase;
  }

  .position {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 100;
    font-style: italic;
  }
  
  .social-icon {
    position: absolute;
    right: 32px;
    top: 0;
    
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .title {
      font-size: 87px;
    }
    .name {
      font-size: 50px;
    }

    .team-card {
      //padding-left: 60px;
    }
    .card-content {
      left: 40%;
    }
    .social-icon {
      right: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .title {
      font-size: 73px;
    }
    .name {
      font-size: 40px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md + 1}px) {

    .slick-track {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .slick-slide {
      width: 48% !important;
      margin-bottom: 22px;
      
      >div {
        padding: 10px;
      }

      &:nth-child(2n) {
        margin-left: 4%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .title-wrapper {
      text-align: center;
      overflow: hidden;
    }
    .title {
      font-size: 60px;

      .img-left, .img-right {
        width: 200px;
      }
      .img-left {
        display: block;
        right: 100%;
      }
    }
    
    .slick-arrow {
      
      &:before {
        content: none;
      }
      &.slick-prev, &.slick-next {
        height: auto;
        width: auto;
      }
      &.slick-prev {
        left: -10px;
        transform: translate(-100%, -50%);
      }
      &.slick-next {
        right: -10px;
        transform: translate(100%, -50%);
      }
    }
    .slick-slider {
      .slick-track {
        display: block;
        
        .slick-slide {
          padding: 0 24px;
        }
      }
    }
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {

    .title {
      font-size: 47px;
      .img-left {
        margin-right: 16px;
      }
      .img-right {
        margin-left: 16px;
      }
    }
    .carousel-wrapper {
      padding: 0 50px;
    }
    .name {
      font-size: 30px;
    }
    .position {
      margin-top: 4px;
    }
    .social-icon {
      .icon {
        width: 32px;
        height: 32px;
      }
    }
    .slick-arrow {
      &.slick-prev, &.slick-next {
        img {
          width: 37px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding: 30px 0;
    .title {
      font-size: 30px;
    }
    .carousel-wrapper {
      padding: 0 20px;
    }
    .name {
      font-size: 16px;
    }
    .position {
      font-size: 12px;
    }
    .slick-slider {
      .slick-track {
        display: block;

        .slick-slide {
          padding: 0 4px;
        }
      }
    }

    .social-icon {
      right: 8px;
      top: 0;
    }
    .slick-arrow {
      &.slick-prev, &.slick-next {
        img {
          width: 24px;
        }
      }
    }
  }

`
