import styled from 'styled-components';

const AccordionWrapper = styled.div`
  .bg {
    margin-top: 70px;
    color: white;
    height: 60vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    min-height: 600px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      z-index: 0;
    }
  }
  .mybox:hover .title {
    color: red;
  }
`;
export default AccordionWrapper;
