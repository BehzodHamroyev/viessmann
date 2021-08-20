import styled from "styled-components";

export const Home1Wrapper = styled.div`

&{
   
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    .homeImg{
        width: 100%;
        min-height: 80vh;
    }
    .after{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 101%;
        background-color: rgba(0,0,0,0.5);
        .homeBanner{
            margin: 100px 0 0 100px;
            padding: 40px;
            background-color: rgba(46, 50, 214,0.5);
            border-radius: 20px;
            color:white;
        }
    }

}

`