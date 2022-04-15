import React from 'react';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => {  
  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} theme={"light"}/>
      <Bar mid sidebar={sidebar} theme={"light"} />
      <Bar bottom sidebar={sidebar} theme={"light"} />
    </Wrapper>
  )
};

export default Hamburger;
