import styled from 'styled-components';

export const Home1Wrapper = styled.div`
  & {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    .homeImg {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: relative;
    }
    .after {
      position: absolute;
      display:flex;
      justify-content: start;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 20px 0 0  0;
      background-color: rgba(0, 0, 0, 0.5);
      .row {
        margin: 0 !important;
      }
      .homeBanner {
        padding: 40px;
        background-color: rgba(46, 50, 214, 0.5);
        border-radius: 20px;
        color: white;
      }
    }
  }
}
  @media only screen and (max-width:600px){
     .after {
     height:100%;
    font-size:12px;
    }
`;
