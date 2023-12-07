import styled from "styled-components";

const Wrapper=styled.header`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    width:100%;
    transition: 1s;
     /* border: 1px solid black; */
     
    .menuBtn button{
        display: flex;
        color: #3B82F6;
        font-size:2.4rem;
    }
    .menuBtn button:hover{
        color: #1D4ED8;
    }
    .logoDiv img{
        height: 40px;
    }
    .pageName{
        font-size: 2.4em;
        color: #102A43;
        display: none;
    }
    .testUserBtn button{
        background-color: #3B82F6;
        color: white;
        padding: 5px;
        font-size: 1.2rem;
        border-radius: 6px;
        transition: 0.5s;
    }
    .testUserBtn button:hover{
        background-color: #1D4ED8;
    }
    .testUserBtn button span{
        margin: 0px 15px;
        font-weight: 500;
    }


    @media (min-width: 700px){
        .pageName{
            display: block;
        }
        .logoDiv{
            display: none;
        }
    }

    
`

export default Wrapper