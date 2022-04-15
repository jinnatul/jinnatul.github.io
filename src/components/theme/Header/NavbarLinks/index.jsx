import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop} theme={"light"}>
      <HashLink smooth to="/#projects">Projects</HashLink>
      <HashLink smooth to="/#skills">Skills</HashLink>
      <HashLink smooth to="/courses">Courses</HashLink>
      <HashLink smooth to="/#contact">Contact</HashLink>
    </Wrapper>
  );
};

export default NavbarLinks;
