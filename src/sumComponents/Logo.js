import React from "react";
import styled from "styled-components";

const LogoStyle = styled.h1`
  display: inline-block;
  color: ${(props) => props.mytheme === "light" ? props.theme.text : props.theme.body};
  font-family: "Lavishly Yours", cursive;
  font-size: 2.2rem;
  letter-spacing: 0.5rem;
  border-bottom: 5px solid;
  border-color: ${(props) => props.mytheme === "light" ? props.theme.text : props.theme.body};
  border-radius: 35px;
  position: absolute;
  z-index: 3;
  transition: all 1s;
  & > :first-child {
    font-family: inherit;
    font-size: 2.5rem;
  }
`; //LogoStle Fınıshed

const Logo = (props) => {
  console.log(props);
  return (
    <LogoStyle mytheme={props.dark_light}>
      <span>Y</span>K
    </LogoStyle>
  );
};

export default Logo;
