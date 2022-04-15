import React from "react";
import { HashLink } from "react-router-hash-link";
import { Header } from "../../theme";
import { Container, Button } from "../../common";
import dev from "../../../assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export const Intro = () => {
  return (
    <Wrapper id="about">
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={"light"}>
          <h1>Hi There!</h1>
          <h4>I’m Zinnatul Islam Morol and I’m a Backend engineer!</h4>

          <HashLink smooth to="/#contact">
            <Button>Hire me</Button>
          </HashLink>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Zinnatul Islam Morol and I’m a Backend engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
