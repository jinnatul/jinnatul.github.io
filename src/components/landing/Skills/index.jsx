import React from 'react';
import { Container } from '../../common';
import { Wrapper, Details } from './styles';

export const Skills = () => {
  return (
    <Wrapper as={Container} id="skills">
        <Details theme={"light"}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy.
          </p>
        </Details>
    </Wrapper>
  );
};
