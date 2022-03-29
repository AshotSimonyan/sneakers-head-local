import styled from 'styled-components';

export const FAQStyle = styled.section`
  padding: 160px 0;

  .title {
    margin-bottom: 40px;
    position: relative;
    z-index: 1;
  }
  .faq-content {
    display: flex;

    .left {
      margin-top: 124px;
      position: relative;
      z-index: 1;
      margin-right: 1.5rem;
      .left-image {
        width: 100%;
        max-width: 548px;
        position: relative;
        img {
          width: 100%;
        }
        &::after {
          content: '';
          position: absolute;
          width: 130%;
          height: 130%;
          background-image: url(assets/blur.png);
          background-size: 92%;
          top: -20%;
          z-index: -1;
          left: -15%;
          background-repeat: no-repeat;
        }
      }
    }

    .right {
      flex: 1;
      padding-left: 24px;
    }
  }

  .Collapsible {
    border-bottom: 1px solid #0fb7ff;
  }

  .Collapsible__trigger {
    display: block;
    border-radius: 16px 16px 0 0;

    &.is-open {
      .icon {
        transform: rotate(180deg);
      }
    }
  }

  .Collapsible__contentInner {
    padding-bottom: 24px;
    font-size: 16px;
    user-select: none;
    font-weight: 500;
  }

  .trigger-inner {
    position: relative;
    font-weight: 900;
    padding: 16px 40px 30px 0;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};
    .icon {
      position: absolute;
      top: 10px;
      fill: white;
      right: 0;
      transition: 0.5s;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 120px 0;
    .title {
      margin-bottom: 24px;
    }
    .faq-content {
      .left {
        width: 360px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;
    .faq-content {
      flex-direction: column;
      .left {
        margin: 40px auto;
        width: 100%;

        order: 2;
        img {
          max-width: unset;
        }
        .title {
          padding-bottom: 12px;
        }
      }
      .left-image {
        margin: 0 auto;
      }
      .right {
        padding-left: 0;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .left-image {
      margin: 24px auto;
    }
  }
`;
