import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => {  
  return (
  <Wrapper active={sidebar} onClick={toggle} theme={"light"}>
    <NavbarLinks />
  </Wrapper>
  )
};

export default Sidebar;
