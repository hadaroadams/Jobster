import styled from "styled-components";
import { SideWrapper } from "./SideNav";

const Wrapper = styled.div<SideWrapper>`
  position: absolute;
  z-index: ${(props)=>props.isSideBarOpen?'1':'-1' };
  background-color:${(props)=> props.isSideBarOpen? 'rgba(0, 0, 0, 0.6)':'rgba(0, 0, 0, 0)'};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  

  .navContainer {
    background-color:${(props)=>props.isSideBarOpen?'rgba(255, 255, 255, 1)':'rgba(255, 255, 255, 0)'};
    width: 90%;
    height: 90%;
    display: 'flex';
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    transition: 0.3s ease-in-out;    /* margin: 100px; */
    button {
      color: red;
      font-size: 2.4em;
      width: fit-content;
      height: fit-content;
    }
    div {
      /* background-color: red; */
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        width: 300px;
      }
      ul {
        font-size: 1.6em;
        li{
            margin:30px ;
        }
      }
    }
  }

  @media (min-width:900px) {
    display: none;
  }
`;

export default Wrapper;
