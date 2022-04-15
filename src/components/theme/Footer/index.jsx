import React from "react";
import { Container } from "../../common";
import { Wrapper, Flex, Links, Details } from "./styles";
import { GoMarkGithub } from "react-icons/go";
import { VscTwitter } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Zinnatul Islam Morol</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          by{" "}
          <a
            href="https://jinnatul.github.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Morol
          </a>
        </span>
      </Details>
      <Links>
        <a
          key={1}
          href={"https://github.com/jinnatul"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on github`}
        >
          <GoMarkGithub />
        </a>
        <a
          key={1}
          href={"https://www.linkedin.com/in/morol1957"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on linkedin`}
        >
          <AiFillLinkedin />
        </a>
        <a
          key={1}
          href={"https://twitter.com/jinnatul_md"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on twitter`}
        >
          <VscTwitter />
        </a>
        <a
          key={1}
          href={"https://www.youtube.com/channel/UCc9Bj9gAS0wWR0DCvkN3H5Q"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on youtube`}
        >
          <BsYoutube />
        </a>
        <a
          key={1}
          href={"http://programming-jinnatul.blogspot.com"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on blogspot`}
        >
          <FaBlogger />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
