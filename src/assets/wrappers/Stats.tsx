import styled from "styled-components";

const Wrapper = styled.section`

    .statsItemContainer{
        display: grid;
    }

    @media (min-width:700px) {
        .statsItemContainer{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width:1200px){
        .statsItemContainer{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    
`

export default Wrapper