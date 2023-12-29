import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 40px;

    h1{
        font-size: 1.5em;
        color:#102A43;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .jobContainer{
        display: grid;
        gap:30px;
        @media (min-width:800px) {
            grid-template-columns: 1fr 1fr;
        }
        
    }

`

export default Wrapper