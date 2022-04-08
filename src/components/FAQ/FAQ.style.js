import styled from "styled-components"

export const FAQStyle = styled.section`
  padding: 100px 0;

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
   
  .Collapsible {
    background-color: #1C1C1C;
    border-bottom: 1px solid #2A2A2A;
  }

  .Collapsible__trigger {
    display: block;
    //padding: 0 30px 0 60px;

    &.is-open {
      background-color: #2F2F2F;
      
      .icon-wrapper {
        background: #131313;
      }
      .icon {
        transform: rotate(135deg);
      }
    }
  }

  .Collapsible__contentInner {
    padding: 60px 90px;
    background-color: #131313;
    font-size: 16px;
    user-select: none;
    font-weight: 400;
  }

  .trigger-inner {
    position: relative;
    padding: 32px 60px;
    cursor: pointer;
    user-select: none;
    font-weight: 400;
    // font-family: ${({ theme }) => theme.fonts.secondary};
    
    .icon-wrapper {
      position: absolute;
      top: 50%;
      right: 10px;
      transition: 0.5s;
      transform: translateY(-50%);
      height: 64px;
      width: 64px;
      border-radius: 20px 0 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      transform:  rotate(0deg);
      fill: white;
      transition: 0.5s;
      
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .title {
      font-size: 87px;
    }
    
    .trigger-inner {
      padding: 25px 60px;

      .icon-wrapper {
        width: 50px;
        height: 50px;
        
        .icon {
          height: 20px;
          width: 20px;
        }
      }
    }
    .Collapsible__contentInner {
      padding: 30px 60px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 120px 0;
    .title {
      font-size: 73px;
    }
    .content {
      .left {
        width: 360px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;

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


    .trigger-inner {
      padding: 16px 60px 16px 30px;
      font-size: 16px;

      .icon-wrapper {
        width: 42px;
        height: 42px;
        border-radius: 16px 0 16px 0;

        .icon {
          height: 16px;
          width: 16px;
        }
      }
    }
    .Collapsible__contentInner {
      padding: 20px 30px;
      font-size: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding: 30px 0;
    .title {
      font-size: 30px;
    }

    .trigger-inner {
      padding: 16px 60px 16px 24px;
      .icon-wrapper {
        width: 36px;
        height: 36px;
        border-radius: 16px 0 16px 0;

        .icon {
          height: 12px;
          width: 12px;
        }
      }
    }
  }
`
