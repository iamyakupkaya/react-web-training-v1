import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div id="social-main-container">
      <ul className="wrapper">
      <li className="social-media-line">
        <div className="line"></div>
        <div className="social-media-text">sosyal</div>
        <div className="line"></div>
      </li>
      <li className="icon linkedin">
        <span className="">
          <a
            href="https://www.linkedin.com/in/iamyakupkaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="social-media-icons-color" size="1.3rem" />
          </a>
        </span>
      </li>
      <li className="icon github">
        <span>
          <a
            href="https://www.github.com/iamyakupkaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubLine className="social-media-icons-color" size="1.5rem" />
          </a>
        </span>
      </li>
      <li className="icon instagram">
        <span>
          <a
            href="https://www.instagram.com/iamyakupkaya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className="social-media-icons-color" size="1.4rem" />
          </a>
        </span>
      </li>
      <li className="social-media-line">
        <div className="line"></div>
        <div className="social-media-text">medya</div>
        <div className="line"></div>
      </li>
    </ul>
    </div>
  );
};

export default SocialMedia;
