import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: background-color 0.18s ease-out;
  background-color: ${({ headerScrolled, theme }) =>
    headerScrolled ? theme.colors.primary : 'transparent'};

  &.sticky {
    transition: box-shadow 0.3s;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
  }

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
`;
