import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../sumComponents/PowerButton";
import Logo from "../sumComponents/Logo";
import SocialIcons from "../sumComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSVG";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Container = styled.div`
  border: 3px solid green;
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => {
    console.log("Main.js sayfasındaki Contact'a gelen props:", props);
    return props.theme.text;
  }};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 2;
`;

const BottomBar = styled.div`
  border: 2px solid purple;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  border: 2px solid orange;
  text-decoration: none;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  border: 2px solid orange;
  text-decoration: none;
`;

const rotateYingYang = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  left: ${(props) => (props.click ? "92%" : "50%")};
  top: ${(props) => (props.click ? "85%" : "50%")};
  transform: translate(-50%, -50%);
  z-index: 3;
  border: none;
  outline: none;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  & > :first-child {
    animation: ${rotateYingYang} infinite 2s linear;
    border-radius: 100%;
  }

  & > :last-child {
    /*span*/
    padding-top: 1rem;
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <Logo />
        <SocialIcons />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click me...</span>
        </Center>
        <Contact target="_blank" to={{ pathname: "mailto:myemail@gmail.com" }}>
          <h2>Send e-mail..</h2>
        </Contact>
        <BLOG to="/blog">
          <h2>Blog..</h2>
        </BLOG>
        <WORK to="/work">
          <h2>Work..</h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about">
            <h2>About..</h2>
          </ABOUT>
          <SKILLS to="/skills">
            <h2>Skills..</h2>
          </SKILLS>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
