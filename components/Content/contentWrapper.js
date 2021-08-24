import styled from 'styled-components';

export const ContentWrapper = styled.div`
  & {
    background-color: ${(props) => props.color.backgroundColor};
    color: black;
    .row {
      .rounded {
        border-radius: 10px !important;
      }
    }
  }
`;
