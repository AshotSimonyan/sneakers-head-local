import styled from 'styled-components';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  .social {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;

    li {
      margin: 0 8px;
    }
  }
  .copyright {
    color: white;
    font-size: 16px;
    font-weight: 400;
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
`;
