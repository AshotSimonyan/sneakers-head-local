import styled, { css } from "styled-components"

export const ButtonStyle = styled.a`
  padding: 0 48px;
  border-radius: 52px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  cursor: pointer;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  height: 56px;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  background: linear-gradient(273.92deg, #0FB7FF 5.99%, #094B7B 93.95%);
  background-size: 150% 100%;
  
  .icon {
    margin-right: 12px;
    path {
      transition: 0.5s;
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`

      &:hover {
        background-position: 100% 0;
        transition: all .4s ease-in-out;
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.black} !important;
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.white} !important;
          }
        }
      }
    `}



  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`
