import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../sumComponents/PowerButton";
import Logo from "../sumComponents/Logo";
import SocialIcons from "../sumComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSVG";
import Intro from "./Intro";
import {motion} from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
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
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  transition: color 1s;

  z-index: 2;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  transition: color 1s;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
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
  top: ${(props) => (props.click ? "90%" : "50%")};
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
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotateYingYang} infinite 2s linear;
    border-radius: 50%;
    width: ${(props) => (props ? "100px" : "150px")};
    height: ${(props) => (props ? "100px" : "150px")};
    fill: "currentColor";
    &:hover {
      transition: all 0.2s;
      width: ${(props) => (props.click ? "1250px" : "200px")};
      height: ${(props) => (props.click ? "120px" : "200px")};
    }
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")}
    /*span*/
    padding-top: 1rem;
  }
`;

/* styled("div") is same with styled.div */
const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  /*
  for transition...
  1. arguman: which property will the animation be applied to?
  2. arguman: how much second later the animation will be finished?
  3. arguman: which type cubic animation will be applied?
  4. arguman: when time the animation will be started (after the second). 
*/
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((previousState) => !previousState);

  return (
    <MainContainer>
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <Logo dark_light={click ? "dark" : "light"} />
        <SocialIcons dark_light={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang onClick={() => handleClick()} />
          <span>Click me...</span>
        </Center>
        <Contact target="_blank" to={{ pathname: "mailto:myemail@gmail.com" }}>
          <motion.h2 whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >Send e-mail..</motion.h2>
        </Contact>
        <BLOG $click={click} to="/blog">
          <motion.h2 whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >Blog..</motion.h2>
        </BLOG>
        <WORK $click={click} to="/work">
          <motion.h2 whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >Work..</motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT $click={click} to="/about">
            <motion.h2 whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            >About..</motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2 whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            >Skills..</motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
