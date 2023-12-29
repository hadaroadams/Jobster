import styled from "styled-components";

const Wrapper = styled.article<{status:string}>`
    background-color: white;
    padding: 20px 0px;
    box-shadow: 0px 0px 27px -11px rgba(0,0,0,0.75);
    border-radius: 10px;
    .topDiv{
        display: flex;
        gap: 20px;
        border-bottom: 1px solid #D6E0EA;
        padding:10px 30px;

        span{
            font-size: 2em;
            font-weight: 600;
            background-color:#3B82F6 ;
            color:white;
            padding: 15px 25px;
            border-radius: 10px;
            width: fit-content;
            height:fit-content ;
        }
        div{
            h3{
                font-size: 1.8em;
                color:#102A43;
            }
            h4{
                font-size: 1.3em;
            }
        }
    }
    .middleDiv{
        display:grid;
        margin: 10px 30px;
        gap: 10px;
        @media (min-width:700px){
            grid-template-columns: 1fr 1fr;
        }
        div{
            .icon{
                font-size: 1.4em;
                margin-right: 10px;
            }
            .text{
                color:#102A43;
                font-size: 1.3em;
            }
        }
        .status{
            font-size: 1.4em;
            background-color:${(prop)=> prop.status==='pending'?'#FCEFC7':prop.status=="declined"?"#FFEEEE":"#E0E8F9"};
            color:${(prop)=> prop.status==='pending'?'#EABA49':prop.status=="declined"?"#D66A6A":"#7086CC"};
            width: fit-content;
            padding: 5px 10px;
            border-radius: 7px;
            font-weight: 500;
        }
          
    }
    .btnDiv{
        margin: 0px 30px;
        .edit{
            padding: 10px; 
            margin-right: 10px;
            border-radius:7px;
            font-size:1.3em;
            background-color:#D1E7DD ;
            color:green

        }
        .delete{
            padding: 10px; 
            margin-right: 10px;
            border-radius:7px;
            font-size:1.3em;
            background-color: #F8D7DA;
            color:#842051;
        }
    }
` 

export default Wrapper