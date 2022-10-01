import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  background-color: #add8e6;

  img {
    width: 50px;
    height: 50px;
    margin: 12px;
  }
  div {
    width: 100%;
  }
  button {
    width: 100px;
    margin: 16px;
  }
`;

export const BodyContainer = styled.div`
  padding: 64px;
`;