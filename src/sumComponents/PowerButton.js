import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSVG";

const Power = styled.button`
  position: fixed;
  top: 2rem;  
  left:50%;
  transform: translate(-50%, 0px);
  text-align: center;
  background-color: #fcf6f4;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  color: black;

  &:hover {
    box-shadow: 5px 5px 30px rgb(255, 0, 0);
    transition: all 0.4s;
    background-color: red;
    color: white;
  }

  & > *:first-child {
    text-decoration: none;
    color: black;

    &:hover {
      color: white;
    }
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn height="30" width="30" fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
