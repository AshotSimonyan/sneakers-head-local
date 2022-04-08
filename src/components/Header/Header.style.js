import styled from "styled-components"

export const HeaderStyle = styled.header`
  padding: 78px 100px 0;
  transition: background-color 0.18s ease-out;

  .container,
  .header-content {
    height: 100%;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
  }

  .logo-wrapper,
  .social {
    flex: 1;
    
  }

  .logo {
    max-width: 162px;
    display: block;
    img {
      width: 100%;
      display: block;
    }
  }
  
    .header-nav {
    flex: 2;

    .header-nav-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-nav-list {
      display: flex;

      > li {
        cursor: pointer;
        line-height: 1;
        margin-right: 100px;
        position: relative;
        transition: color 0.5s;
        font-weight: 500;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    .copyright {
      display: none;
    }

    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  .hamburger {
    display: none;
  }

  .social {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
  }

  .social-btn {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .header-nav {
      .header-nav-list {
        display: flex;

        > li {
          margin-right: 70px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 60px 80px 0;
    
    .logo {
      max-width: 130px;
    }
    
    .header-content {
      flex-wrap: wrap;
      .social {
        width: 100%;
        flex: auto;
        display: flex;
        flex-direction: row;
        margin-top: 32px;

        li {
          &:not(:last-child) {
            margin-right: 12px;
          }
        }
      }
    }

    .header-nav {
      .header-nav-inner {
        justify-content: flex-end;
      }
    }
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 40px 48px 0;
    .logo {
      max-width: 120px;
    }
    
    .hamburger {
      display: inline-block;
      cursor: pointer;
      position: relative;
      z-index: 111;
    }

    .header-content {
      .social {
        justify-content: center;
      }
    }

    &.open {
      .header-nav {
        height: 100%;
      }
    }

    .header-nav {
      position: fixed;
      inset: 0;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.white};

      .header-nav-inner {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        height: 100vh;
        padding-top: 120px;
        background-color: ${({ theme }) => theme.colors.black};
      }

      .header-nav-list {
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;

        > li {
          padding: 24px 40px;
          margin-right: 0;
          font-size: ${({ theme }) => theme.titleSizesSM.h2};

          &:not(:first-child) {
            margin-top: 24px;
          }
        }
      }

      .copyright {
        display: block;
        text-align: center;
        padding: 24px 20px;
        font-size: ${({ theme }) => theme.fontSizes.md};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 30px 30px 0;

    .logo {
      max-width: 90px;
    }
  }
`
