import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Twitter, Facebook, YouTube } from "../components/AllSVG";
import styled from "styled-components";
import { darkTheme } from "../components/Theme";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: calc(1.5rem + 1vw);
  z-index: 2;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color};
`;

const SocialIcons = (props) => {
  const theme = props.dark_light === "dark" ? darkTheme.text : darkTheme.body;
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.github.com" }}
        >
          <Github width={25} height={25} fill={theme} />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.twitter.com" }}
        >
          <Twitter width={25} height={25} fill={theme} />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com" }}
        >
          <Facebook width={25} height={25} fill={theme} />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.youtube.com" }}
        >
          <YouTube width={25} height={25} fill={theme} />
        </NavLink>
      </div>
      <Line color={theme} />
    </Icons>
  );
};

export default SocialIcons;
