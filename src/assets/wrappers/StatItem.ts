import styled from "styled-components";

const Wrapper = styled.article<{color?:string}>`
    color: ${props => props.color};
    padding-top:50px ;
    background-color: white;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);
    margin: 10px 10px;
    border-radius: 10px;
    border-bottom: 3px solid;
    overflow: hidden;
    span{
        padding: 0px 15px;
        background-color:${props => props.color+'80'};
        border-radius: 6px;
    }
    .topText {
        padding: 0px 20px;  
        display: flex;
        font-size: 3em;
        font-weight: 700;
        justify-content: space-between;
    }
    h3{
        padding: 20px;
        color:#102A43;
        font-size: 1.5em;
        letter-spacing: 0.1px;
    }
    .liner{
        width:100%;
        height: 10px;
        background-color:  ${porps=> porps.color};
    }
`

export default Wrapper