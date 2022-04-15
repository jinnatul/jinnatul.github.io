import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Link to="/">Morol</Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
