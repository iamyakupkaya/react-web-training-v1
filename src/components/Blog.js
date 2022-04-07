import React from "react";
import bgPicture from "../assets/Images/blog.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../sumComponents/Logo";
import PowerButton from "../sumComponents/PowerButton";
import SocialIcons from "../sumComponents/SocialIcons";

const MainContainer = styled(motion.div)`
  background-image: url(${bgPicture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Container = styled.div`
  background-color: ${(props) => {
    console.log("Blog gelen props:", props);
    return `rgba(${props.theme.bodyRgba},0.8)`;
  }};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Blog = (props) => {
  console.log("gelen Blog propsu:", props);
  return (
    <MainContainer
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100vw", height: "100vh" }}
      transition={{ type: "spring", duration: 1 }}
    >
      <Container>
        <Logo dark_light={(props) => (props.$click ? "dark" : "light")} />
        <PowerButton />
        <SocialIcons />
      </Container>
    </MainContainer>
  );
};

export default Blog;
