import styled from "styled-components";

const Wrapper = styled.section`

    .statsItemContainer{
        display: grid;
        margin: 30px 30px;
        
    }

    @media (min-width:800px) {
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