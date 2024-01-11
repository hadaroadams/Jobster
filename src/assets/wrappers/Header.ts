import styled from "styled-components";

const Wrapper = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  transition: 1s;
  position: static;
  z-index: 2;

  /* border: 1px solid black; */

  .menuBtn button {
    display: flex;
    color: #3b82f6;
    font-size: 1.3em;
  }
  .menuBtn button:hover {
    color: #1d4ed8;
  }
  .logoDiv img {
    height: 30px;
  }
  .pageName {
    font-size: 2.4em;
    color: #102a43;
    display: none;
  }
  .testUserBtn .userButton,
  .testUserBtn .logOutBtn {
    background-color: #3b82f6;
    color: white;
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 6px;
    transition: 0.5s;
  }
  .testUserBtn .userButton:hover {
    background-color: #1d4ed8;
  }
  .testUserBtn .userButton span {
    margin: 0px 15px;
    font-weight: 500;
  }
  .testUserBtn {
    position: relative;
    z-index: 0px;
  }
  .testUserBtn .logOutBtn {
    z-index: 0;
    position: absolute;
    color: #3b82f6;
    left: 0;
    right: 0;
    margin: 50px 0px;
    background-color: #dbeafe;
  }

  @media (min-width: 900px) {
    position: sticky;
    top: 0;
    .menuBtn button{
        font-size: 2.3em;
    }
    .pageName {
      display: block;
    }
    .logoDiv {
      display: none;
    }
  }
`;

export default Wrapper;
