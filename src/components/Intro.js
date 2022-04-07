import React from "react";
import styled from "styled-components";
import ME from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  color: white;
  width: 60vw;
  height: 55vh;

  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 5px;

  border-left: 5px solid ${(props) => props.theme.body};
  border-right: 5px solid ${(props) => props.theme.text};
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  dispaly: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > :last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I am Yakup KAYA</h3>
          <h6>Just try to improve myself</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        >
          <img className="pic" src={ME} alt="CodeBucks" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
