import styled from "styled-components"

export const RoadmapStyle = styled.div`
  padding: 150px 0;

  .content {
    h1 {
      text-align: center;
      font-size: 186px;
      letter-spacing: -8px;
      margin-bottom: 180px;
    }
  }

  .Collapsible {
    border-bottom: 3px solid #141414;
  }

  .Collapsible__trigger {
    display: block;
    clip-path: polygon(4% 0,100% 0,100% 60%,96% 100%,0 100%,0 40%);
    background-color: #252525;
    &.is-open {
      background-color: #333333;

      .trigger-inner {
        .number {
          font-weight: 400;
          font-family: ${({theme}) => theme.fonts.secondary};
          font-style: normal;
          
        }
        
        .text {
          font-weight: 800;
        }
      }

      .icon-wrapper {
        img {
          opacity: 1;
          @supports not selector(:nth-child(1 of x)) {
            filter: drop-shadow(0 0 12px  rgba(255, 255, 255, 1));
          }
        }
      }
    }
    

  }

  .Collapsible__contentInner {
    padding: 40px 78px;
    background-color: #333333;
    font-size: 16px;
    user-select: none;
    font-weight: 300;
    border-top: 3px solid #141414;
  }

  .trigger-inner {
    position: relative;
    cursor: pointer;
    user-select: none;
    font-weight: 400;
    display: flex;
      // font-family: ${({ theme }) => theme.fonts.secondary};

    .number {
      min-width: 275px;
      font-size: 75px;
      line-height: 1;
      text-align: center;
      font-style: italic;
      font-weight: 100;
      position: relative;
      padding: 32px 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 300px;
        width: 3px;
        background-color: #141414;
        transform: rotate(25deg);
        transform-origin: top;
      }
    }
    
    .text {
      padding: 32px 120px 32px 32px;
      display: flex;
      align-items: center;
      font-weight: 300;
      text-transform: uppercase;
      width: 100%;
    }

    .icon-wrapper {
      position: absolute;
      top: 50%;
      transition: 0.5s;
      transform: translateY(-50%);
      border-radius: 20px 0 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 40px;
      
      img {
        width: 60px;
        opacity: .3;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .content {
      h1 {
        text-align: center;
        font-size: 140px;
        margin-bottom: 116px;
      }

    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 100px 0;
    .content {
      h1 {
        text-align: center;
        font-size: 126px;
        margin-bottom: 80px;
      }
    }
    
    .trigger-inner {
      .number {
        padding: 20px 80px;
        font-size: 50px;
      }
      .text {
        padding: 20px 100px 20px 20px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .content {
      h1 {
        font-size: 97px;
      }
    }
    .Collapsible__contentInner {
      padding: 32px 56px;
    }
    .trigger-inner {
      .number {
        padding: 12px 20px;
        min-width: 180px;
      }
      .text {
        padding: 12px 100px 12px 12px;
      }
      .icon-wrapper {
        img {
          width: 40px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 60px 0;

    .Collapsible__contentInner {
      padding: 16px 28px;
    }

    .trigger-inner {
      .number {
        padding: 12px 20px;
        min-width: 130px;
        font-size: 40px;
      }
      .text {
        padding: 12px 60px 12px 12px;
      }
      .icon-wrapper {
        right: 20px;
        img {
          width: 28px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    .content {
      h1 {
        text-align: center;
        font-size: 73px;
        margin-bottom: 50px;
      }
    }

    .Collapsible__contentInner {
      font-size: 14px;
    }
    
    .trigger-inner {
      .number {
        min-width: 85px;
        font-size: 20px;
      }
      .text {
        font-size: 12px;
      }
      .icon-wrapper {
        right: 10px;
        img {
          width: 20px;
        }
      }
    }
  }
`
