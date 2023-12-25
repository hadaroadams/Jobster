import styled from "styled-components";

const Wrapper=styled.header`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    width:100%;
    border-bottom:1px solid #E5E7EB ;
    transition: 1s;
    position: static;
    z-index: 2;

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
    .testUserBtn .userButton,.testUserBtn .logOutBtn{
        background-color: #3B82F6;
        color: white;
        padding: 5px;
        font-size: 1.2rem;
        border-radius: 6px;
        transition: 0.5s;
    }
    .testUserBtn .userButton:hover{
        background-color: #1D4ED8;
    }
    .testUserBtn .userButton span{
        margin: 0px 15px;
        font-weight: 500;
    }
    .testUserBtn{
        position: relative;
        z-index:0px;
    }
    .testUserBtn .logOutBtn{
        z-index: 0;
        position: absolute;
        color:#3B82F6;
        left:0;
        right:0;
        margin: 50px 0px;
        background-color:#DBEAFE;
    }


    @media (min-width: 900px){
        position: sticky;
        top: 0;
        .pageName{
            display: block;
        }
        .logoDiv{
            display: none;
        }
    }

    
`

export default Wrapper