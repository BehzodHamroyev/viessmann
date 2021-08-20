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
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center !important;
      margin: auto 0;
      li {
        list-style: none;
      }
    }
  }
  @media screen and ( max-width:900px){
    ul{
display: none;
    }
  }
`;
