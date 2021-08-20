import styled from "styled-components";

export const FooterWrapper = styled.div`
&{
    background-color: rgb(9, 20, 46);
    width: 100%;
    min-height: 50vh;
    .iconFooter{
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
       font-size: 28px;
    }
    .iconFooter:hover{
        color: red !important;
    }
    a:hover{
        color: red !important;
    }
}`