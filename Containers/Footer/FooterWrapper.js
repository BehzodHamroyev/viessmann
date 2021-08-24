import styled from 'styled-components';

export const FooterWrapper = styled.div`
  & {
    background-color: rgb(9, 20, 46);
    width: 100%;
    height: 300px;
    .iconFooter {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 28px;
    }
    .iconFooter:hover {
      color: red !important;
    }
    a {
      color: white;
    }
    a:hover {
      color: red !important;
    }
  }
  @media only screen and (max-width: 600px) {
    & {
      height: 700px;
    }
  }
`;
