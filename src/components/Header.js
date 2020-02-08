import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  background-color: black;
`;

const Title = styled.div`
  color: white;
  font-size: 2rem;
`;
function Header() {
  return (
    <Wrapper>
      <Title>small work, big money!</Title>
    </Wrapper>
  );
}

export default Header;
