import styled from "styled-components";

const Wrapper =styled.main`
    color:#102A43;
    background-color:white;
    margin:30px auto;
    padding: 40px;
    /* -webkit-box-shadow: 0px 0px 39px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 39px -14px rgba(0,0,0,0.75); */
    box-shadow: 0px 0px 39px -14px rgba(0,0,0,0.75);
    border-radius: 10px;
    width: 100%;
    h1{
        font-size: 2.4em;
        font-weight: 500;
    }
    form{
        font-size: 1.3em;
        font-weight: 400;
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 10px;   
        width:100%;  
        overflow-wrap: wrap;
        /* border: 1px solid black; */

        div{
            margin-top:20px ;
            display: flex;
            flex-direction: column;
            /* border: 1px solid black; */
            width:100% ;
            
            label{
                margin-bottom: 5px
            }
            input,select{
                background-color:#F0F4F8 ;
                border-radius: 5px;
                padding: 3px;
                border: 2px solid #D6E0EA ;
            }
        }
        button{
            color:white;
            background-color:#3B82F6 ;
            width:100%;
            margin-top: 20px;
            padding: 5px;
            border-radius: 7px;
            transition: 0.4s;

            &:hover{
                background-color:#1D4ED8;
            }
        }
        section{
            display: flex;
            gap: 10px;

            :first-child{
                background-color:#627D98 ;
            }
        }

        @media (min-width:700px) {
            &{
              grid-template-columns:1fr 1fr ;
              
              button{
                height: 40px;
                align-self:flex-end;
              }
            }
        }
        @media (min-width:900px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`

export default  Wrapper