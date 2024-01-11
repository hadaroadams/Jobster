import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    margin:50px 0px;
    justify-content: end;
    align-items: end;
    flex-direction: column;
    gap: 20px;

    .next , .prev {
        background-color: white;
        padding: 15px;
        font-size: 1.5em;
        color:#3B82F6;
        border-radius: 7px;
        width: fit-content;
    }

    div{
        display: flex;
        .pagBtn{
            background-color: #DBEAFE;
            color:#3B82F6;
            padding: 15px;
            font-size: 1.5em;
            font-weight: 700;
            border-radius: 6px;
        }

        .active{
            background-color: #3B82F6;
            color:white;
        }
    }

    @media (min-width:700px) {
        flex-direction: row;
    }
`

export default Wrapper