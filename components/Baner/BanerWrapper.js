import styled from 'styled-components';

export const BanerWrapper = styled.div`
  & {
    .imgRelative {
      position: relative;
      height: 100%;
      width: 100%;
    }
    .imgAbsolute {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
