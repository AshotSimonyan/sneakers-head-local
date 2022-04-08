import styled from "styled-components"

export const FooterStyle = styled.footer`
  text-align: center;
  
  .content {
    border-top: 1px solid #3E3E3E;
    padding: 116px 0 140px;
  }

  .social {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;

    li {
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
  
  .logo-wrapper {
    max-width: 183px;
    width: 100%;
    margin: 20px auto;
    img {
      width: 100%;
    }
  }
  .copyright {
    color: white;
    font-weight: 100;
    font-size: 38px;
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
    .content {
      padding: 80px 0 100px;
    }
    
    .copyright {
      font-size: 28px;
    }

    .logo-wrapper {
      max-width: 137px;
      margin: 12px auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .content {
      padding: 40px 0 60px;
    }

    .copyright {
      font-size: 22px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .content {
      padding: 30px 0 40px;
    }
  }
`
