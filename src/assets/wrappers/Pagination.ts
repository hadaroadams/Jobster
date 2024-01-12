import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  margin: 50px 0px;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  gap: 20px;

  .next,
  .prev {
    background-color: white;
    padding: 15px;
    font-size: 1.5em;
    color: #3b82f6;
    border-radius: 7px;
    width: fit-content;
  }

  div {
    display: flex;
    .pagBtn {
      background-color: #dbeafe;
      color: #3b82f6;
      padding: 15px;
      font-size: 1.3em;
      font-weight: 700;
      border-radius: 6px;
    }

    .active {
      background-color: #3b82f6;
      color: white;
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    .pagBtn {
      padding: 15px;
      font-size: 1.2em;
      font-weight: 700;
      border-radius: 6px;
    }
  }
`;

export default Wrapper;
