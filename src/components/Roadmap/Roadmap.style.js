import styled from 'styled-components';

export const RoadmapStyle = styled.div`
  padding: 100px 0;
  background-color: #10072a;
  background-image: linear-gradient(
    180deg,
    #10072a 0%,
    #10072a 92%,
    #100b36 100%
  );

  ba .title {
    display: flex;
    span {
      opacity: 0;
    }
  }

  .cards-container {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }
  .roadmap-card {
    display: flex;
    margin-bottom: 48px;
    &:last-child {
      margin-bottom: unset;
    }
  }

  .card-image {
    min-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 300px;
    align-items: center;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      max-width: 192px;
      z-index: 3;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      box-shadow: rgb(16 7 41) 1px 0px 20px 25px inset;
      z-index: 1;
      top: 0;
      left: 0;
      border-radius: 50%;
    }
    .roadmap-video {
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      border-radius: 50%;
      z-index: 0;
      top: 0;
      left: 0;
      padding: 4px;
    }
  }

  .card-info {
    margin-left: 20px;
    text-align: left;
    span {
      font-size: 12px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    h4 {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin: 4px 0 24px 0;
      text-transform: uppercase;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .roadmap-card {
      flex-direction: column;
      margin-bottom: 24px;
      .card-image {
        min-width: unset;
        width: 100%;
        max-width: 300px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    .roadmap-card {
      .card-image {
        min-width: unset;
        width: 100%;
        max-width: 250px;
        height: 250px;
        img {
          width: 150px;
        }
      }
    }
  }
`;
