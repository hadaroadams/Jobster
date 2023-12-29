import styled from "styled-components";

const Wrapper = styled.div`
    border:10px solid ;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border-right:10px solid blue ;
    animation: spiner 0.7s linear infinite;
    margin: 0 auto;

    @keyframes spiner {
        0%{
            transform: rotate(0deg);
        }100%{
            transform: rotate(360deg);
        }
    }
`

export default Wrapper