import styled, { css } from "styled-components"

export const ButtonStyle = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 26px;
  font-weight: 500;
  font-style: italic;
  background: transparent;
  background-size: 150% 100%;
  display: inline-flex;
  position: relative;

  &:after, &:before {
    transition: .3s;
  }
  &:before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${({theme}) => theme.colors.white};
    clip-path: polygon(16% 0,84% 0,92% 50%,84% 100%,16% 100%,8% 50%);
  }
  
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme}) => theme.colors.black};
    clip-path: polygon(16% 0,84% 0,92% 50%,84% 100%,16% 100%,8% 50%);
  }
  
  span {
    display: inline-flex;
    width: 280px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 24px;
    clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
    height: 66px;
    transition: .3s;
    background: #000;
    z-index: 1;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: ${({theme}) => theme.colors.white};
      clip-path: polygon(85% 0,92% 48%,100% 0);
    }
    
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${({theme}) => theme.colors.white};
      clip-path: polygon(8% 50%,15% 100%,0 100%);
    }
  }
  
  &:hover {
    color: ${({theme}) => theme.colors.black};

    @supports not selector(:nth-child(1 of x)) {
      filter: drop-shadow(0 0 12px  rgba(255, 255, 255, 1));
    }
    
    &:after, &:before {
      opacity: 0;
    }
    span {
      background: ${({theme}) => theme.colors.white};
    }
  }
  




  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    font-size: 20px;
    span {
      height: 50px;
      width: 220px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    font-size: 14px;
    span {
      height: 40px;
      width: 140px;
    }
  }
`
