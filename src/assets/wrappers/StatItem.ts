import styled from "styled-components";

const Wrapper = styled.article<{props?:string}>`
    color: ${props => props.props};
    background-color: white;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.55);
    margin: 10px 30px;
    border-radius: 10px;
    /* border-bottom: 3px solid; */
    overflow: hidden;

    .topText {
        padding: 0px 20px;  
        display: flex;
        font-size: 3em;
        justify-content: space-between;
    }
    h3{
        padding: 20px;  
    }
    .liner{
        width:100%;
        height: 10px;
        background-color:  ${porps=> porps.props};
    }
`

export default Wrapper