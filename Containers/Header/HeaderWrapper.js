import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  & {
    background-color: red;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center !important;
    width: 100%;
    height: 80px;
    .logo {
      width: 120px;
    }
    .bars {
      cursor: pointer;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center !important;
      margin: auto 0;
      li {
        list-style: none;
        a {
          color: white;
          &:hover {
            color: black;
          }
        }
      }
    }
    .Navbar {
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5000;
      background-color: white;
    }
  }
  @media screen and (max-width: 900px) {
    ul {
      position: absolute;
      padding: 0 50px;
      /* opicity: */
      opacity: ${(props) => props.isShow && '0'||"1"};
      width: 300px;
      height: 100vh;
      top: 80px;
      right: 0px;
      padding: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      text-align: start !important ;
      justify-content: space-around;
      background-color: white;
      transition: all linear 0.3s;
      z-index: 3000;
      li {
        a {
          color: black !important;
          &:hover {
            color: red !important;
          }
        }
      }
    }
  }
`;
