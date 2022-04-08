import styled from "styled-components"

export const AboutStyle = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;

  .content {
    max-width: 1040px;
    width: 100%;
    padding-bottom: 230px;
  }

  .content-top {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;

    .content-top-flex {
      display: flex;
      align-items: center;

      h1 {
        font-size: 144px;
      }

      h2 {
        margin-left: 30px;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 200;
        text-transform: uppercase;
        font-size: 48px;
        font-style: italic;
      }
    }

  }

  .content-bottom {
    margin-bottom: 60px;
  }

  .button-group {
    margin-top: 50px;

    >:first-child {
      margin-right: 4px;
    }
  }
  

  .spinner-wrapper {
    padding: 200px 0;
    background: url("assets/hero/spinner-bg.png") no-repeat center center;
    background-size: contain;
  }

  .spinner {
    margin: 0 auto;
    //max-height: 1020px;
    max-width: 1020px;
    width: 100%;
    height: auto;
    border: 1px dashed ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    position: relative;

    &::before {
      padding-bottom: 100%;
      content: "";
      display: inline-block;
      vertical-align: top;
    }

    &:after {
      content: "";
      height: 50%;
      width: 50%;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 10px solid ${({ theme }) => theme.colors.white};
      background-color: rgba(238, 238, 238, 0.1);
    }
  }

  .spinner-item {
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top;

    img {
      position: absolute;
      width: 350px;
      border-radius: 50%;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      transform-origin: center;
      transition: .3s;
    }
    
    

    &:nth-child(1) {
      transform: rotate(0deg);

      &:hover {
        img {
          transform: translate(-50%, 50%) scale(1.3) ;
        }
      }
    }

    &:nth-child(2) {
      transform: rotate(45deg);
      img {
        transform: translate(-50%, 50%) rotate(-45deg);
      }
      &:hover {
      img {
        transform: translate(-50%, 50%) scale(1.3) rotate(-45deg);
      }
    }
    }

    &:nth-child(3) {
      transform: rotate(90deg);
      img {
        transform: translate(-50%, 50%) rotate(-90deg);
      }
      &:hover {
      img {
        transform: translate(-50%, 50%) scale(1.3) rotate(-90deg);
      }
    }
    }

    &:nth-child(4) {
      transform: rotate(180deg);
      img {
        transform: translate(-50%, 50%) rotate(-180deg);
      }
      &:hover {
      img {
        transform: translate(-50%, 50%) scale(1.3) rotate(-180deg);
      }
    }
    }

    &:nth-child(5) {
      transform: rotate(270deg);
      img {
        transform: translate(-50%, 50%) rotate(90deg);
      }
      &:hover {
      img {
        transform: translate(-50%, 50%) scale(1.3) rotate(90deg);
      }
    }
    }

    &:nth-child(6) {
      transform: rotate(315deg);
      img {
        transform: translate(-50%, 50%) rotate(45deg);
      }
      &:hover {
      img {
        transform: translate(-50%, 50%) scale(1.3) rotate(45deg);
      }
    }
    }

    

  }
  
  .model-block {
    display: flex;
    align-items: center;

    .title-resp {
      display: none;
    }
    h2 {
      font-size: 93px;
      margin-bottom: 60px;
    }
    
    .model-block-left {
      width: 40%;
      position: relative;
      
      .img-rotate {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        pointer-events: none;
      }
      
      .model {
        height: 808px;
      }
    }
    .model-block-right {
      width: 60%;
      padding-left: 60px;
      
     
      
      p {
        width: 80%;
        margin-bottom: 60px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .content {
      max-width: 800px;
      width: 100%;
      padding-bottom: 160px;
    }
    .content-top {
      margin-bottom: 40px;

      img {
        max-width: 440px;
        width: 100%;
      }
      
      .content-top-flex {
        h1 {
          font-size: 106px;
        }

        h2 {
          margin-left: 20px;
          font-family: ${({ theme }) => theme.fonts.primary};
          font-weight: 200;
          text-transform: uppercase;
          font-size: 36px;
        }
      }

    }

    .model-block {

      h2 {
        font-size: 70px;
        margin-bottom: 40px;
      }
      
      .model-block-left {

        .img-rotate {
          width: 207px;
        }

        .model {
          height: 607px;
        }
      }
      .model-block-right {

        p {
          width: 80%;
          margin-bottom: 40px;
          text-align: justify;
        }
      }
    }

    .spinner-wrapper {
      padding: 160px 0;
    }

    .spinner {
      max-width: 808px;

      img {
        width: 250px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-bottom: 80px;
    .content-bottom {
      text-align: justify;
    }
    .button-group {
      text-align: center;
    }

    .model-block {
      flex-direction: column;
      
      .title-resp {
        display: block;
        text-align: center;
        margin-bottom: 120px;
      }
      .model-block-left {
        width: 100%;

        .img-rotate {
          width: 207px;
        }

        .model {
          height: 607px;
        }
      }
      .model-block-right {
        width: 100%;
        padding-left: 0;
        
        h2 {
          display: none;
        }

        p {
          width: 100%;
          margin-bottom: 40px;
          text-align: justify;
        }
      }
    }

    .spinner-wrapper {
      padding: 160px 0;
    }

    .spinner {
      max-width: 716px;

      img {
        width: 200px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 32px;
    .content-top {
      justify-content: center;
      .content-top-flex {
        flex-direction: column;
      }
    }
    .model-block {
      .model-block-left {

        .img-rotate {
          width: 170px;
        }

        .model {
          height: 520px;
        }
      }
    }

    .spinner-wrapper {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .content-top {
      margin-bottom: 40px;

      .content-top-flex {
        h1 {
          font-size: 90px;
        }

        h2 {
          margin-left: 0;
          font-size: 25px;
          text-align: center;
        }
      }
    }

    .model-block {
      h2 {
        font-size: 50px;
      }
      .title-resp {
        margin-bottom: 80px;
      }
      .model-block-left {

        .img-rotate {
          width: 130px;
        }

        .model {
          height: 390px;
        }
      }
    }


  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    .content-top {
      

      img {
        max-width: 100%;
      }
    }
  }
`
