import styled from "styled-components"

export const ComingSoonStyle = styled.main`
   background:  ${({theme}) => theme.colors.primaryGradient};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("assets/coming-soon/blur.png") no-repeat top right;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 80px 0;
    position: relative;
    z-index: 1;
  }
  
  .left {
    width: 450px;
    img {
      width: 100%;
    }
  }
  .right {
    flex: 1;
    padding-left: 120px;

    .title {
      text-transform: capitalize;
    }
    .title, .text {
      padding-bottom: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .left {
      width: 440px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {

    &:after {
      background-position: 100px 0;
    }
    
    .content {
      flex-direction: column;
    }
    .left {
      padding-bottom: 48px;
      
    }
    .right {
      padding-left: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    &:after {
      background-position: -50px 0;
    }
    .left {
      width: 100%;
    }
  }
`
