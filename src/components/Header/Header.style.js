import styled from "styled-components"

export const HeaderStyle = styled.header`
  padding-top: 78px;
  transition: background-color 0.18s ease-out;
  background-color: ${({ headerScrolled, theme }) =>
    headerScrolled ? theme.colors.primary : "transparent"};

  .container,
  .header-content {
    height: 100%;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-wrapper,
  .social {
    flex: 1;
  }

  .logo {
    max-width: 204px;
    display: block;
    padding: 10px 10px 10px 0;
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
        margin-right: 16px;
        font-size: ${({ theme }) => theme.fontSizes.md};
        position: relative;
        transition: color 0.5s;

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

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
  }
`
