import styled from 'styled-components';
export const CardWrapper = styled.div`
  & {
    position: relative;
    height: 330px;
    transition: all linear 3s !important;
    img {
      border-radius: 20px;
    }
    .affterCard {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      color: white;
      border-radius: 20px;
    }
    .affterCard:hover {
      background: linear-gradient(
        348deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(80, 80, 207, 0.28335084033613445) 44%,
        rgba(0, 212, 255, 1) 100%
      );
    }
  }
`;
