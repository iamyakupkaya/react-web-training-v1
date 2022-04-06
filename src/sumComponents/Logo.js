import React from "react";
import styled from "styled-components";

const LogoStyle = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Lavishly Yours", cursive;
  font-size: 2.2rem;
  letter-spacing: 0.5rem;
  border-bottom:5px solid black;
  border-radius:35px;
  &>:first-child {
    font-family: inherit;
    font-size:2.5rem;
  }
`; //LogoStle Fınıshed

const Logo = () => {
  return (
    <LogoStyle>
      <span>Y</span>K
    </LogoStyle>
  );
};

export default Logo;
