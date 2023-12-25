import styled from "styled-components";

export interface SideWrapper{
    isSideBarOpen:boolean,
}
const Wrapper = styled.nav<SideWrapper>`
    
    height:100vh;
    background-color: #FFFFFF;
    width:${(props)=> props.isSideBarOpen ?'0px' :'400px'};
    display: none;
    position: sticky;
    left: 0;
    top:0;
    overflow: hidden;
    transition: 0.5s;
    
    .sideNavLogoDiv{
        /* border: 1px solid black; */
        height: 100px;
        padding: 20px 30px;
    }
    .sideNavLinks{
        padding: 20px 30px;
        font-size:1.5em;
    }
    .sideNavLinks ul li{
        margin-top:15px ;
        transition: 0.4s;
        margin-left:0px;

    }
    .sideNavLinks ul li:hover{
         margin-left:10px;
         color: #3B82F6
    }
    .sideNavLinks ul li:hover span{
        color:#1B344C;
    }
    
    .sideNavLinks ul li span{
        margin-left: 20px;

    }
    @media (min-width:900px) {
        display: block;
    }
 `
export default Wrapper