import styled from "styled-components"

export const AppStyle = styled.main`
  overflow-x: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    background: url("assets/main-bg1.png") no-repeat top right;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 3600px;
    right: 0;
    background: url("assets/main-bg2.png") no-repeat top right;
    background-size: 100%;
    height: 1587px;
    max-width: 795px;
    width: 100%;
  }
  
  .main-wrapper {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    &:after {
      max-width: 600px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    &:after {
      max-width: 436px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    &:after {
      max-width: 360px;
      top: 1600px; /*remove*/
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    &:before {
      background-position: top center;
      background-size: contain;
    }
    &:after {
      max-width: 360px;
      height: 1280px;
      //top: 2800px;
      top: 1000px; /*remove*/
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    &:after {
      max-width: 230px;
      height: 1000px;
    }
  }
`
